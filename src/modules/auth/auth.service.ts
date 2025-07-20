import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SupabaseService } from 'src/common/supabase/supabase.service';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginPasswordDto } from './dto/login-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabase: SupabaseService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async loginWithPassword(dto: LoginPasswordDto) {
    // 1. Autentica com o Supabase
    const { data: authData, error } = await this.supabase.client.auth.signInWithPassword({
      email: dto.email,
      password: dto.password,
    });

    if (error || !authData?.user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const { user } = authData;

    // 2. Busca o usuário local
    const localUser = await this.findLocalUser(dto, user.id);
    if (!localUser) throw new UnauthorizedException('User not found in local database');

    // 3. Cria tokens próprios
    const payload = {
      sub: localUser.id,
      role: dto.role,
      partnerType: dto.partnerType || null,
    };

   const accessToken = this.jwtService.sign(payload, {
  secret: process.env.JWT_SECRET, 
  expiresIn: '1h',
});
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return {
      message: 'Login successful',
      role: dto.role,
      partnerType: dto.partnerType || null,
      user: localUser,
      accessToken,
      refreshToken,
    };
  }

  private async findLocalUser(dto: LoginPasswordDto, supabaseId: string) {
    const { email, role, partnerType } = dto;
    switch (role) {
      case 'DRIVER':
        return this.prisma.driver.findFirst({ where: { OR: [{ email }, { id: supabaseId }] } });
      case 'PARTNER':
        if (partnerType === 'MECHANIC_SHOP')
          return this.prisma.mechanic.findUnique({ where: { email } });
        if (partnerType === 'TOWING_COMPANY')
          return this.prisma.towing.findUnique({ where: { email } });
        if (partnerType === 'INSURANCE_COMPANY')
          return this.prisma.insurer.findUnique({ where: { email } });
        break;
      case 'ADMIN':
        return this.prisma.admin.findUnique({ where: { email } });
      default:
        return null;
    }
  }
}
