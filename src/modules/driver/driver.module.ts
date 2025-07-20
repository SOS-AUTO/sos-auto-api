import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { SupabaseService } from 'src/common/supabase/supabase.service';

@Module({
  imports: [PrismaModule],
  controllers: [DriverController],
  providers: [DriverService,SupabaseService],
})
export class DriverModule {}
