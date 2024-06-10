import { OmitType } from '@nestjs/swagger';
import { NutritionEntity } from '../../entities/nutrition.entity';

export class UpdateNutritionRequestDto extends OmitType(NutritionEntity, [
  'id',
  'created_at',
  'last_modified_at',
]) {}
