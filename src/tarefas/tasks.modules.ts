/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.services';

@Module({
  controllers: [TasksController],
  providers: [TasksService, PrismaService],
})
export class TasksModule {}
