// src/modules/auth/dto/login-password.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class LoginPasswordDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'StrongPassword123!' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'DRIVER', enum: ['DRIVER', 'PARTNER', 'ADMIN'] })
  @IsNotEmpty()
  role: 'DRIVER' | 'PARTNER' | 'ADMIN';

  @ApiProperty({
    example: 'MECHANIC_SHOP',
    enum: ['MECHANIC_SHOP', 'TOWING_COMPANY', 'INSURANCE_COMPANY'],
    required: false,
  })
  @IsOptional()
  partnerType?: 'MECHANIC_SHOP' | 'TOWING_COMPANY' | 'INSURANCE_COMPANY';
}
