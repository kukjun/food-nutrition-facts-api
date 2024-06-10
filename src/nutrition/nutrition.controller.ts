import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNutritionRequestDto } from './dto/request/create-nutrition.request.dto';
import { IdResponseDto } from './dto/response/Id.response.dto';
import { UpdateNutritionRequestDto } from './dto/request/update-nutrition.request.dto';
import { GetNutritionRequestQueryDto } from './dto/request/get-nutrition.request-query.dto';
import { GetNutritionListResponseDto } from './dto/response/get-nutrition-list.response.dto';

@Controller('nutrition')
export class NutritionController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createNutrition(
    @Body() requestBody: CreateNutritionRequestDto,
  ): Promise<IdResponseDto> {
    return;
  }

  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async updateNutrition(
    @Param('id') id: number,
    @Body() requestBody: UpdateNutritionRequestDto,
  ): Promise<IdResponseDto> {
    return;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteNutrition(@Param('id') id: number): Promise<null> {
    return;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readNutrition(
    @Query() requestQuery: GetNutritionRequestQueryDto,
  ): Promise<GetNutritionListResponseDto> {
    return;
  }
}
