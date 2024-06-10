import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetNutritionRequestQueryDto {
  @ApiProperty({
    type: String,
    description: '식품이름',
    required: false,
    example: '돼지갈비',
  })
  @IsString()
  @IsOptional()
  foodName: string;

  @ApiProperty({
    type: String,
    description: '연도(YYYY)',
    required: false,
    example: '2019',
  })
  @IsString()
  @IsOptional()
  researchYear: string;

  @ApiProperty({
    type: String,
    description: '지역/제조사',
    required: false,
    example: '서울특별시 마포구',
  })
  @IsString()
  @IsOptional()
  makerName: string;

  @ApiProperty({
    type: String,
    description: '식품코드',
    required: false,
    example: 'D000012',
  })
  @IsString()
  @IsOptional()
  foodCode: string;
}
