import { ApiProperty } from '@nestjs/swagger';
import { NutritionEntity } from '../entities/nutrition.entity';

export class GetNutritionDto
  implements Omit<NutritionEntity, 'createdAt' | 'lastModifiedAt'>
{
  @ApiProperty({
    type: String,
    description: '식품코드',
    required: true,
    example: '1676',
  })
  id: number;

  @ApiProperty({
    type: String,
    description: '식품코드',
    required: true,
    example: 'D099562',
  })
  foodCd: string;

  @ApiProperty({
    type: String,
    description: '식품군',
    required: true,
    example: '음식',
  })
  groupName: string;

  @ApiProperty({
    type: String,
    description: '식품이름',
    required: true,
    example: '바지락맑은된장국',
  })
  foodName: string;

  @ApiProperty({
    type: Number,
    description: '조사 년도',
    required: true,
    example: 2018,
  })
  researchYear: number;

  @ApiProperty({
    type: String,
    description: '지역/제조사',
    required: true,
    example: '삼삼한밥상(Ⅶ)',
  })
  makerName: string;

  @ApiProperty({
    type: String,
    description: '자료출저',
    required: true,
    example: "식약처('20)",
  })
  refName: string;

  @ApiProperty({
    type: Number,
    description: '1회 제공량',
    required: false,
    example: 250,
  })
  servingSize: number;

  @ApiProperty({
    type: Number,
    description: '열량(kcal)(1회제공량당)',
    required: false,
    example: 50,
  })
  calorie: number;

  @ApiProperty({
    type: Number,
    description: '탄수화물(g)(1회제공량당)',
    required: false,
    example: 7,
  })
  carbohydrate: number;

  @ApiProperty({
    type: Number,
    description: '단백질(g)(1회제공량당)',
    required: false,
    example: 0,
  })
  protein: number;

  @ApiProperty({
    type: Number,
    description: '지방(g)(1회제공량당)',
    required: false,
    example: 7,
  })
  province: number;

  @ApiProperty({
    type: Number,
    description: '총당류(g)(1회제공량당)',
    required: false,
    example: 10,
  })
  sugars: number;

  @ApiProperty({
    type: Number,
    description: '나트륨(mg)(1회제공량당)',
    required: false,
    example: 400,
  })
  salt: number;

  @ApiProperty({
    type: Number,
    description: '콜레스테롤(mg)(1회제공량당)',
    required: false,
    example: 100,
  })
  cholesterol: number;

  @ApiProperty({
    type: Number,
    description: '포화지방산(g)(1회제공량당)',
    required: false,
    example: 20,
  })
  saturatedFattyAcids: number;

  @ApiProperty({
    type: Number,
    description: '트랜스지방(g)(1회제공량당)',
    required: false,
    example: 90,
  })
  transFat: number;
}
