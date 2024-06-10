import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { NutritionModule } from './nutrition/nutrition.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get<string>('DB_HOST') ?? 'localhost',
          port: configService.get<number>('DB_PORT') ?? 5500,
          username: configService.get<string>('DB_USER') ?? 'kukjun',
          password:
            configService.get<string>('DB_PASSWORD') ?? 'kukjun_test123',
          database: configService.get<string>('DB_NAME') ?? 'sakak_test',
          logging: false,
          synchronize: false,
          entities: [join(__dirname, '/**/*.entity.*')],
          namingStrategy: new SnakeNamingStrategy(),
        };
      },
    }),
    NutritionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
