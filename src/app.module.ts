import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './driver/driver.module';
import { PartnerModule } from './modules/partner/partner.module';
import { MechanicModule } from './modules/partner/mechanic/mechanic.module';
import { TowingModule } from './modules/partner/towing/towing.module';
import { InsurerModule } from './modules/partner/insurer/insurer.module';
import { AdminModule } from './modules/admin/admin.module';
import { PrismaModule } from './common/prisma/prisma.module';

@Module({
  imports: [DriverModule, PartnerModule, MechanicModule, TowingModule, InsurerModule, AdminModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
