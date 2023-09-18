/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.services';
import { CreateTaskDto } from './createTaskDto';
import { UpdateTaskDto } from './updateTaskDto';
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: number) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() dto: CreateTaskDto) {
    return this.tasksService.createTask(dto);
  }
  

  @Put(':id')
  updateTask(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.tasksService.deleteTask(id);
  }
}