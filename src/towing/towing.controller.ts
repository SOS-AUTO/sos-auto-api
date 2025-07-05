import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TowingService } from './towing.service';
import { CreateTowingDto } from './dto/create-towing.dto';
import { UpdateTowingDto } from './dto/update-towing.dto';

@Controller('towing')
export class TowingController {
  constructor(private readonly towingService: TowingService) {}

  @Post()
  create(@Body() createTowingDto: CreateTowingDto) {
    return this.towingService.create(createTowingDto);
  }

  @Get()
  findAll() {
    return this.towingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.towingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTowingDto: UpdateTowingDto) {
    return this.towingService.update(+id, updateTowingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.towingService.remove(+id);
  }
}
