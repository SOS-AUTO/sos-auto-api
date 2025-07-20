// driver/dto/create-driver.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsDateString, IsBoolean } from 'class-validator';

export class CreateDriverDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'securePassword123' })
  @IsString()
  password: string;
    @ApiProperty({ example: '1234567890' })
    @IsOptional()
    @IsString()
    phone?: string;

  @ApiProperty({ example: '1234567890', description: 'Driver’s license number' })
  @IsOptional()
  @IsString()
  licenseNumber?: string;

  @ApiProperty({ example: 'B', description: 'License category (B, C, D, etc.)' })
  @IsOptional()
  @IsString()
  licenseCategory?: string;

  @ApiProperty({ example: '2026-12-31', description: 'License expiration date (ISO format)' })
  @IsOptional()
  @IsDateString()
  licenseExpiryDate?: string;
}
