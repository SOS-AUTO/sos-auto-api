import { Module } from '@nestjs/common';
import { TowingService } from './towing.service';
import { TowingController } from './towing.controller';
import { PrismaModule } from 'src/common/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [TowingController],
  providers: [TowingService],
})
export class TowingModule {}
