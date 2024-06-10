import { NutritionEntity } from '../../entities/nutrition.entity';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateNutritionRequestDto
  implements Omit<NutritionEntity, 'id' | 'createdAt' | 'lastModifiedAt'>
{
  @IsString()
  foodCd: string;
  @IsString()
  groupName: string;
  @IsString()
  foodName: string;
  @IsNumber()
  researchYear: number;
  @IsString()
  makerName: string;
  @IsString()
  refName: string;
  @IsNumber()
  @IsOptional()
  servingSize: number;
  @IsNumber()
  @IsOptional()
  calorie: number;
  @IsNumber()
  @IsOptional()
  carbohydrate: number;
  @IsNumber()
  @IsOptional()
  protein: number;
  @IsNumber()
  @IsOptional()
  province: number;
  @IsNumber()
  @IsOptional()
  sugars: number;
  @IsNumber()
  @IsOptional()
  salt: number;
  @IsNumber()
  @IsOptional()
  cholesterol: number;
  @IsNumber()
  @IsOptional()
  saturatedFattyAcids: number;
  @IsNumber()
  @IsOptional()
  transFat: number;
}
