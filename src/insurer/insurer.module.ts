import { Module } from '@nestjs/common';
import { InsurerService } from './insurer.service';
import { InsurerController } from './insurer.controller';

@Module({
  controllers: [InsurerController],
  providers: [InsurerService],
})
export class InsurerModule {}
