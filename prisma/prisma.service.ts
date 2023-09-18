/* eslint-disable prettier/prettier */
// src/prisma/prisma.service.ts
import { Prisma, PrismaClient, Tarefa} from 'prisma/@prisma/client';
import { Injectable } from '@nestjs/common';

/* eslint-disable prettier/prettier */
@Injectable()
export class PrismaService {
  private readonly prisma = new PrismaClient();

  constructor() {
    this.prisma.$connect();
  }

  async getAllTasks() {
    return this.prisma.tarefa.findMany(); // Change to tarefa
  }
  
  async getTaskById(id: number) {
    return this.prisma.tarefa.findUnique({
      where: { id },
    });
  }
  
  async createTask(data: Prisma.TarefaCreateInput) {
    return this.prisma.tarefa.create({
      data,
    });
  }
  
  async updateTask(id: number, data: Prisma.TarefaUpdateInput) {
    return this.prisma.tarefa.update({
      where: { id },
      data,
    });
  }
  
  async deleteTask(id: number) {
    return this.prisma.tarefa.delete({
      where: { id },
    });
  }
  async $disconnect() {
    await this.prisma.$disconnect();
  }
}
