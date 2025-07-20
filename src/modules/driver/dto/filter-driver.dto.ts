import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBooleanString, IsOptional } from 'class-validator';
import { BaseFilterDto } from 'src/common/dto/base-filter.dto';


export class FilterDriverDto extends BaseFilterDto {
  @ApiPropertyOptional({ description: 'Filter by blocked status (true/false)', example: 'false' })
  @IsOptional()
  @IsBooleanString()
  isBlocked?: string;
}
