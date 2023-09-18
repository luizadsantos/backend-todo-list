/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsBoolean, IsInt } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  nome: string;

  @IsBoolean()
  isActive: boolean;

  @IsInt()
  categoriaId: number;
}
