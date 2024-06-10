import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNutritionRequestDto } from './dto/request/create-nutrition.request.dto';
import { IdResponseDto } from './dto/response/Id.response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NutritionEntity } from './entities/nutrition.entity';
import { Repository } from 'typeorm';
import { UpdateNutritionRequestDto } from './dto/request/update-nutrition.request.dto';
import { GetNutritionRequestQueryDto } from './dto/request/get-nutrition.request-query.dto';
import { GetNutritionListResponseDto } from './dto/response/get-nutrition-list.response.dto';
import { GetNutritionDto } from './dto/get-nutrition.dto';

@Injectable()
export class NutritionService {
  constructor(
    @InjectRepository(NutritionEntity)
    private nutritionRepository: Repository<NutritionEntity>,
  ) {}

  async createNutrition(
    request: CreateNutritionRequestDto,
  ): Promise<IdResponseDto> {
    const entity = this.nutritionRepository.create(request);
    const result = await this.nutritionRepository.save(entity);
    return {
      id: result.id,
    };
  }

  async updateNutrition(
    id: number,
    request: UpdateNutritionRequestDto,
  ): Promise<IdResponseDto> {
    // nutrition 찾기
    const beforeEntity = await this.nutritionRepository.findOne({
      where: { id },
    });
    if (beforeEntity === null) {
      throw new NotFoundException('Nutrition Not Found');
    }
    const updatedEntity = Object.assign(beforeEntity, request);
    const result = await this.nutritionRepository.save(updatedEntity);

    return { id: result.id };
  }

  async deleteNutrition(id: number): Promise<null> {
    const beforeEntity = await this.nutritionRepository.findOne({
      where: { id },
    });
    if (beforeEntity === null) {
      throw new NotFoundException('Nutrition Not Found');
    }

    await this.nutritionRepository.remove(beforeEntity);

    return;
  }

  async getNutrition(
    queryDto: GetNutritionRequestQueryDto,
  ): Promise<GetNutritionListResponseDto> {
    const queryBuilder =
      this.nutritionRepository.createQueryBuilder('nutrition');

    if (queryDto.foodName) {
      queryBuilder.andWhere('nutrition.foodName = :foodName', {
        foodName: queryDto.foodName,
      });
    }
    if (queryDto.researchYear) {
      queryBuilder.andWhere('nutrition.researchYear = :researchYear', {
        researchYear: queryDto.researchYear,
      });
    }
    if (queryDto.makerName) {
      queryBuilder.andWhere('nutrition.makerName = :makerName', {
        makerName: queryDto.makerName,
      });
    }
    if (queryDto.foodCode) {
      queryBuilder.andWhere('nutrition.foodCd = :foodCode', {
        foodCode: queryDto.foodCode,
      });
    }

    const result = await queryBuilder.getMany();
    const getNutritionDtoList: GetNutritionDto[] = result.map((nutrition) => {
      const { createdAt, lastModifiedAt, ...dto } = nutrition;
      return dto;
    });

    return {
      nutritionList: getNutritionDtoList,
    };
  }
}
