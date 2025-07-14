import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PartnerType } from 'src/common/enums/partner.type.enum';



export class CreatePartnerDto {
  @ApiProperty({ example: 'Oficina Auto SOS', description: 'Nome da empresa/parceiro' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ enum: PartnerType, description: 'Tipo de parceiro: oficina, guincho ou seguradora' })
  @IsEnum(PartnerType)
  type: PartnerType;

  @ApiProperty({ example: 'contato@empresa.com', description: 'Email do parceiro' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '+244912345678', required: false, description: 'Número de telefone (opcional)' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'Rua das Oficinas, Nº 123', description: 'Endereço completo' })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ example: -8.8383, required: false, description: 'Latitude (opcional)' })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiProperty({ example: 13.2344, required: false, description: 'Longitude (opcional)' })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiProperty({ example: 'Luanda', required: false, description: 'Cidade do parceiro' })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({ example: 'Luanda', required: false, description: 'Província do parceiro' })
  @IsOptional()
  @IsString()
  province?: string;
}
