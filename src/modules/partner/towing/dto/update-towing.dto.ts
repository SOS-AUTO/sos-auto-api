import { PartialType } from '@nestjs/mapped-types';
import { CreateTowingDto } from './create-towing.dto';

export class UpdateTowingDto extends PartialType(CreateTowingDto) {}
