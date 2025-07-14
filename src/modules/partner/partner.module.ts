import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { PrismaModule } from 'src/common/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [PartnerController],
  providers: [PartnerService],
})
export class PartnerModule {}
