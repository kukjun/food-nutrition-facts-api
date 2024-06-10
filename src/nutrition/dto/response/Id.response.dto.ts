import { ApiProperty } from '@nestjs/swagger';

export class IdResponseDto {
  @ApiProperty({
    type: Number,
    description: '번호',
    required: false,
    example: 6,
  })
  id!: number;
}
