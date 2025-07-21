import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApplicationsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateApplicationDto) {
    const data = {
      ...dto,
      applicationDate: new Date(dto.applicationDate),
    };

    return this.prisma.application.create({ data });
  }

  findAll() {
    return this.prisma.application.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: string) {
    const app = await this.prisma.application.findUnique({ where: { id } });
    if (!app) throw new NotFoundException('Application not found');
    return app;
  }

  async update(id: string, dto: UpdateApplicationDto) {
    await this.findOne(id);
    return this.prisma.application.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.application.delete({ where: { id } });
  }
}
