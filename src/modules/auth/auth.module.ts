// modules/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { SupabaseService } from 'src/common/supabase/supabase.service';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET', 'default_secret'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, SupabaseService],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
