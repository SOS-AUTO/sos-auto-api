import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Partners')
@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new partner' })
  create(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnerService.create(createPartnerDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all partners' })
  findAll() {
    return this.partnerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a partner by ID' })
  findOne(@Param('id') id: string) {
    return this.partnerService.findOne(id); // ✅ UUID (string) - no need to cast
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a partner by ID' })
  update(@Param('id') id: string, @Body() updatePartnerDto: UpdatePartnerDto) {
    return this.partnerService.update(id, updatePartnerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a partner by ID' })
  remove(@Param('id') id: string) {
    return this.partnerService.remove(id);
  }
}
