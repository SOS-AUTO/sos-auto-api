import { Injectable } from '@nestjs/common';

import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { FilterDriverDto } from './dto/filter-driver.dto';
import { sanitizeData } from 'src/common/util/sanitizeData';
import { registerSupabaseUser } from 'src/common/supabase/util/register-supabase-user';
import { SupabaseService } from 'src/common/supabase/supabase.service';

@Injectable()
export class DriverService {
  constructor(private readonly prisma: PrismaService,
     private readonly supabase: SupabaseService) {}
async create(data: CreateDriverDto) {
  // Cria no Supabase
  const supabaseUserId = await registerSupabaseUser(this.supabase, data.email, data.password);
  // Limpa e normaliza dados (sem senha)
  const sanitized = sanitizeData(data);
  // Salva no banco local
  return this.prisma.driver.create({
    data: {
      id: supabaseUserId,
      ...sanitized, 
    },
  });
}

async findAll(filters: FilterDriverDto) {
  const {
    search,
    isBlocked,
    startDate,
    endDate,
    page = 1,
    limit = 10,
  } = filters;

  const pageNumber = Number(page) || 1;
  const limitNumber = Number(limit) || 10;

  const where: any = {};

  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { email: { contains: search, mode: 'insensitive' } },
    ];
  }

  if (isBlocked !== undefined) {
    if (typeof isBlocked === 'string') {
      where.isBlocked = isBlocked === 'true';
    } else if (typeof isBlocked === 'boolean') {
      where.isBlocked = isBlocked;
    }
  }

  if (startDate || endDate) {
    where.createdAt = {};
    if (startDate) where.createdAt.gte = new Date(startDate);
    if (endDate) where.createdAt.lte = new Date(endDate);
  }

  const [data, total] = await Promise.all([
    this.prisma.driver.findMany({
      where,
      skip: (pageNumber - 1) * limitNumber,
      take: limitNumber,
      include: {
        vehicles: true,
        rescueRequests: true,
        plans: true,
        driverDocuments: true,
      },
      orderBy: { createdAt: 'desc' },
    }),
    this.prisma.driver.count({ where }),
  ]);

  return {
    data,
    meta: {
      total,
      page: pageNumber,
      perPage: limitNumber,
      totalPages: Math.ceil(total / limitNumber),
    },
  };
}


  findOne(id: string) {
    return this.prisma.driver.findUnique({
      where: { id },
      include: { vehicles: true, rescueRequests: true, plans: true, driverDocuments: true },
    });
  }

  async update(id: string, data: UpdateDriverDto) {
    const preparedData = await sanitizeData(data);

    return this.prisma.driver.update({
      where: { id },
      data: preparedData,
    });
  }

  remove(id: string) {
    return this.prisma.driver.delete({ where: { id } });
  }
}
