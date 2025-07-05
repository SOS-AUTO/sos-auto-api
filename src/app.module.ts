import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './driver/driver.module';
import { PartnerModule } from './partner/partner.module';
import { MechanicModule } from './mechanic/mechanic.module';
import { TowingModule } from './towing/towing.module';
import { InsurerModule } from './insurer/insurer.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [DriverModule, PartnerModule, MechanicModule, TowingModule, InsurerModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
