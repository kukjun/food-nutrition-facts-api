import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNutritionRequestDto } from './dto/request/create-nutrition.request.dto';
import { IdResponseDto } from './dto/response/Id.response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NutritionEntity } from './entities/nutrition.entity';
import { Repository } from 'typeorm';
import { UpdateNutritionRequestDto } from './dto/request/update-nutrition.request.dto';

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
    if (beforeEntity === null) throw new NotFoundException();
    const updatedEntity = Object.assign(beforeEntity, request);
    const result = await this.nutritionRepository.save(updatedEntity);

    return { id: result.id };
  }

  async deleteNutrition(id: number): Promise<null> {
    const beforeEntity = await this.nutritionRepository.findOne({
      where: { id },
    });
    if (beforeEntity === null) throw new NotFoundException();

    await this.nutritionRepository.remove(beforeEntity);

    return;
  }
}
