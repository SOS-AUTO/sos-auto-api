import { Module } from '@nestjs/common';
import { TowingService } from './towing.service';
import { TowingController } from './towing.controller';

@Module({
  controllers: [TowingController],
  providers: [TowingService],
})
export class TowingModule {}
