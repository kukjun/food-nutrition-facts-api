import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetNutritionRequestQueryDto {
  @IsString()
  @IsOptional()
  foodName: string;
  @IsString()
  @IsOptional()
  researchYear: string;
  @IsString()
  @IsOptional()
  makerName: string;
  @IsString()
  @IsOptional()
  foodCode: string;
}
