import { Injectable } from '@nestjs/common';
import { CreateTowingDto } from './dto/create-towing.dto';
import { UpdateTowingDto } from './dto/update-towing.dto';

@Injectable()
export class TowingService {
  create(createTowingDto: CreateTowingDto) {
    return 'This action adds a new towing';
  }

  findAll() {
    return `This action returns all towing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} towing`;
  }

  update(id: number, updateTowingDto: UpdateTowingDto) {
    return `This action updates a #${id} towing`;
  }

  remove(id: number) {
    return `This action removes a #${id} towing`;
  }
}
