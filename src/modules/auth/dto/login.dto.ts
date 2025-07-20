import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum UserRole {
  DRIVER = 'DRIVER',
  PARTNER = 'PARTNER',
  ADMIN = 'ADMIN',
}

export enum PartnerType {
  MECHANIC_SHOP = 'MECHANIC_SHOP',
  TOWING_COMPANY = 'TOWING_COMPANY',
  INSURANCE_COMPANY = 'INSURANCE_COMPANY',
}

export enum LoginMethod {
  PASSWORD = 'PASSWORD',
  OTP = 'OTP',
  MAGIC_LINK = 'MAGIC_LINK',
}

export class LoginDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ enum: UserRole })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiPropertyOptional({ enum: PartnerType, description: 'Required if role is PARTNER' })
  @IsOptional()
  @IsEnum(PartnerType)
  partnerType?: PartnerType;

  @ApiProperty({ enum: LoginMethod, example: 'PASSWORD' })
  @IsEnum(LoginMethod)
  method: LoginMethod;

  @ApiPropertyOptional({ example: 'SecurePassword123', description: 'Required for PASSWORD login' })
  @IsOptional()
  @IsString()
  password?: string;

  @ApiPropertyOptional({ example: '123456', description: 'Required for OTP login' })
  @IsOptional()
  @IsString()
  token?: string;
}
