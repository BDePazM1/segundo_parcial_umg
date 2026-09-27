import { Controller, Get, Post, Put, Patch, Delete, Body, Param } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { Estudiante } from './estudiante.interface';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Get()
  getAll() {
    return this.estudiantesService.findAll();
  }

  @Get(':carnet')
  getOne(@Param('carnet') carnet: string) {
    return this.estudiantesService.findOne(carnet);
  }

  @Post()
  create(@Body() estudiante: Estudiante) {
    return this.estudiantesService.create(estudiante);
  }

  @Put(':carnet')
  update(@Param('carnet') carnet: string, @Body() estudiante: Estudiante) {
    return this.estudiantesService.update(carnet, estudiante);
  }

  @Patch(':carnet')
  partialUpdate(@Param('carnet') carnet: string, @Body() datosParciales: Partial<Estudiante>) {
    return this.estudiantesService.partialUpdate(carnet, datosParciales);
  }

  @Delete(':carnet')
  remove(@Param('carnet') carnet: string) {
    return this.estudiantesService.remove(carnet);
  }
}