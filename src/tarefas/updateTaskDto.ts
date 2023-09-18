/* eslint-disable prettier/prettier */
import { IsOptional, IsNotEmpty, IsBoolean } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
