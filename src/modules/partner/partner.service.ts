import { Injectable, NotFoundException } from '@nestjs/common';

import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class PartnerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPartnerDto: CreatePartnerDto) {
    return this.prisma.partner.create({
      data: createPartnerDto,
    });
  }

  async findAll() {
    return this.prisma.partner.findMany();
  }

  async findOne(id: string) {
    const partner = await this.prisma.partner.findUnique({
      where: { id },
    });

    if (!partner) {
      throw new NotFoundException(`Parceiro com ID ${id} não encontrado`);
    }

    return partner;
  }

  async update(id: string, updatePartnerDto: UpdatePartnerDto) {
    await this.findOne(id); // garante que existe antes de atualizar

    return this.prisma.partner.update({
      where: { id },
      data: updatePartnerDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // garante que existe antes de remover

    return this.prisma.partner.delete({
      where: { id },
    });
  }
}
