import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Req } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { FilterDriverDto } from './dto/filter-driver.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { SupabaseAuthGuard } from 'src/common/guards/supabase-auth.guard';
import { JwtAuthGuard } from 'src/common/guards/Jwt-auth.guard';

@ApiTags('Drivers')
@Controller('drivers')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}
 @UseGuards(JwtAuthGuard)
 @ApiBearerAuth('access-token')  
 @Get('profile')
 getProfile(@Req() req:any) {

  return {
      message: 'Protected route',
      user: req.user,
    };
}

  @Post()
  @ApiOperation({ summary: 'Create a new driver' })
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all drivers with filters and pagination' })
  findAll(@Query() filters: FilterDriverDto) {
    return this.driverService.findAll(filters);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get driver by ID' })
  findOne(@Param('id') id: string) {
    return this.driverService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update driver by ID' })
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(id, updateDriverDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete driver by ID' })
  remove(@Param('id') id: string) {
    return this.driverService.remove(id);
  }
}
