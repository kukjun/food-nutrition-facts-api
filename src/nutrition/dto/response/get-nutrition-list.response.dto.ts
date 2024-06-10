import { GetNutritionDto } from '../get-nutrition.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetNutritionListResponseDto {
  @ApiProperty({
    type: [GetNutritionDto],
    description: '영양 출력 List 정보',
    required: false,
  })
  @Type(() => GetNutritionDto)
  nutritionList: GetNutritionDto[];
}
