import { Module } from '@nestjs/common';
import { NutritionService } from './nutrition.service';
import { NutritionController } from './nutrition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NutritionEntity } from './entities/nutrition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NutritionEntity])],
  controllers: [NutritionController],
  providers: [NutritionService],
  exports: [],
})
export class NutritionModule {}
