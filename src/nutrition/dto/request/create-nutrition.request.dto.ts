import { OmitType } from '@nestjs/swagger';
import { NutritionEntity } from '../../entities/nutrition.entity';

export class CreateNutritionRequestDto extends OmitType(NutritionEntity, [
  'createdAt',
  'lastModifiedAt',
]) {}
