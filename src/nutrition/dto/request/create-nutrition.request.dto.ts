import { NutritionEntity } from '../../entities/nutrition.entity';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNutritionRequestDto
  implements Omit<NutritionEntity, 'id' | 'createdAt' | 'lastModifiedAt'>
{
  @ApiProperty({
    type: String,
    description: '식품코드',
    required: true,
    example: 'D099562',
  })
  @IsString()
  foodCd: string;

  @ApiProperty({
    type: String,
    description: '식품군',
    required: true,
    example: '음식',
  })
  @IsString()
  groupName: string;

  @ApiProperty({
    type: String,
    description: '식품이름',
    required: true,
    example: '바지락맑은된장국',
  })
  @IsString()
  foodName: string;

  @ApiProperty({
    type: Number,
    description: '조사 년도',
    required: true,
    example: 2018,
  })
  @IsNumber()
  researchYear: number;

  @ApiProperty({
    type: String,
    description: '지역/제조사',
    required: true,
    example: '삼삼한밥상(Ⅶ)',
  })
  @IsString()
  makerName: string;

  @ApiProperty({
    type: String,
    description: '자료출저',
    required: true,
    example: "식약처('20)",
  })
  @IsString()
  refName: string;

  @ApiProperty({
    type: Number,
    description: '1회 제공량',
    required: false,
    example: 250,
  })
  @IsNumber()
  @IsOptional()
  servingSize: number;

  @ApiProperty({
    type: Number,
    description: '열량(kcal)(1회제공량당)',
    required: false,
    example: 50,
  })
  @IsNumber()
  @IsOptional()
  calorie: number;

  @ApiProperty({
    type: Number,
    description: '탄수화물(g)(1회제공량당)',
    required: false,
    example: 7,
  })
  @IsNumber()
  @IsOptional()
  carbohydrate: number;

  @ApiProperty({
    type: Number,
    description: '단백질(g)(1회제공량당)',
    required: false,
    example: 0,
  })
  @IsNumber()
  @IsOptional()
  protein: number;

  @ApiProperty({
    type: Number,
    description: '지방(g)(1회제공량당)',
    required: false,
    example: 7,
  })
  @IsNumber()
  @IsOptional()
  province: number;

  @ApiProperty({
    type: Number,
    description: '총당류(g)(1회제공량당)',
    required: false,
    example: 10,
  })
  @IsNumber()
  @IsOptional()
  sugars: number;

  @ApiProperty({
    type: Number,
    description: '나트륨(mg)(1회제공량당)',
    required: false,
    example: 400,
  })
  @IsNumber()
  @IsOptional()
  salt: number;

  @ApiProperty({
    type: Number,
    description: '콜레스테롤(mg)(1회제공량당)',
    required: false,
    example: 100,
  })
  @IsNumber()
  @IsOptional()
  cholesterol: number;

  @ApiProperty({
    type: Number,
    description: '포화지방산(g)(1회제공량당)',
    required: false,
    example: 20,
  })
  @IsNumber()
  @IsOptional()
  saturatedFattyAcids: number;

  @ApiProperty({
    description: '트랜스지방(g)(1회제공량당)',
    required: false,
    example: 90,
  })
  @IsNumber()
  @IsOptional()
  transFat: number;
}
