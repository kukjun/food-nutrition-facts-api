import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { NutritionModule } from './nutrition/nutrition.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5500,
          username: 'kukjun',
          password: 'kukjun_test123',
          database: 'sakak_test',
          logging: true,
          synchronize: true,
          entities: [join(__dirname, '/**/*.entity.*')],
          namingStrategy: new SnakeNamingStrategy(),
        };
      },
    }),
    NutritionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
