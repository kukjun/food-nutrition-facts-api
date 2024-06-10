import { Module } from '@nestjs/common';
import { NutritionService } from './nutrition.service';
import { NutritionController } from './nutrition.controller';
import { NutritionRepository } from './nutrition.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NutritionEntity } from './entities/nutrition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NutritionEntity])],
  controllers: [NutritionController],
  providers: [NutritionService, NutritionRepository],
  exports: [],
})
export class NutritionModule {}
