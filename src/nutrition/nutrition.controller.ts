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
import { NutritionService } from './nutrition.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('nutrition')
@Controller('nutrition')
export class NutritionController {
  constructor(private readonly nutritionService: NutritionService) {}
  @ApiCreatedResponse({ type: IdResponseDto })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createNutrition(
    @Body() requestBody: CreateNutritionRequestDto,
  ): Promise<IdResponseDto> {
    return await this.nutritionService.createNutrition(requestBody);
  }

  @ApiCreatedResponse({ type: IdResponseDto })
  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async updateNutrition(
    @Param('id') id: number,
    @Body() requestBody: UpdateNutritionRequestDto,
  ): Promise<IdResponseDto> {
    return await this.nutritionService.updateNutrition(id, requestBody);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteNutrition(@Param('id') id: number): Promise<null> {
    return await this.nutritionService.deleteNutrition(id);
  }

  @ApiOkResponse({ type: GetNutritionListResponseDto })
  @Get()
  @HttpCode(HttpStatus.OK)
  async readNutrition(
    @Query() requestQuery: GetNutritionRequestQueryDto,
  ): Promise<GetNutritionListResponseDto> {
    return await this.nutritionService.getNutritions(requestQuery);
  }
}
