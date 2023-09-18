/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateTaskDto } from './createTaskDto';
import { UpdateTaskDto } from './updateTaskDto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTasks() {
    return this.prisma.tarefa.findMany(); 
  }
  
  async getTaskById(id: number) {
    return this.prisma.tarefa.findUnique({
      where: { id },
    });
  }
  
  async createTask(createTaskDto: CreateTaskDto) {
    return this.prisma.tarefa.create({
      data: {
        nome: createTaskDto.nome,
        isActive: createTaskDto.isActive,
        categoriaId: createTaskDto.categoriaId,
      },
    });
  }
  
  async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.tarefa.update({
      where: { id },
      data: {
        nome: updateTaskDto.nome,
        isActive: updateTaskDto.isActive,
      },
    });
  }
  
  async deleteTask(id: number) {
    return this.prisma.tarefa.delete({
      where: { id },
    });
  }
}
