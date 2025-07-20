// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './modules/driver/driver.module';
import { PartnerModule } from './modules/partner/partner.module';
import { MechanicModule } from './modules/partner/mechanic/mechanic.module';
import { TowingModule } from './modules/partner/towing/towing.module';
import { InsurerModule } from './modules/partner/insurer/insurer.module';
import { AdminModule } from './modules/admin/admin.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtStrategy } from './common/strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Garante que as variáveis .env estão carregadas
    DriverModule,
    PartnerModule,
    MechanicModule,
    TowingModule,
    InsurerModule,
    AdminModule,
    PrismaModule,
    AuthModule, // AuthModule é quem configura o JWT
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
