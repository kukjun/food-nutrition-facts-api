import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { NutritionModule } from './nutrition/nutrition.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5500,
      username: 'kukjun',
      password: 'kukjun_test123',
      database: 'sakak_test',
      logging: true,
      synchronize: true,
      entities: [join(__dirname, '/**/*.entity.*')],
    }),
    NutritionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
