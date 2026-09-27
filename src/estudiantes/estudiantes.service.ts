import { Injectable, NotFoundException } from '@nestjs/common';
import { Estudiante } from './estudiante.interface';

@Injectable()
export class EstudiantesService {
  private estudiantes: Estudiante[] = [
    {
      carnet: '1290-20-1001',
      nombre: 'Juan',
      apellidos: 'Pérez',
      fecha_de_nacimiento: '2000-05-15',
      sexo: 'M'
    }
  ];

  findAll(): Estudiante[] {
    return this.estudiantes;
  }

  findOne(carnet: string): Estudiante {
    const estudiante = this.estudiantes.find(e => e.carnet === carnet);
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con carnet ${carnet} no encontrado`);
    }
    return estudiante;
  }

  create(nuevoEstudiante: Estudiante): Estudiante {
    this.estudiantes.push(nuevoEstudiante);
    return nuevoEstudiante;
  }

  update(carnet: string, estudianteActualizado: Estudiante): Estudiante {
    const index = this.estudiantes.findIndex(e => e.carnet === carnet);
    if (index === -1) {
      throw new NotFoundException(`Estudiante con carnet ${carnet} no encontrado`);
    }
    this.estudiantes[index] = { ...estudianteActualizado, carnet };
    return this.estudiantes[index];
  }

  partialUpdate(carnet: string, datosParciales: Partial<Estudiante>): Estudiante {
    const index = this.estudiantes.findIndex(e => e.carnet === carnet);
    if (index === -1) {
      throw new NotFoundException(`Estudiante con carnet ${carnet} no encontrado`);
    }
    this.estudiantes[index] = { ...this.estudiantes[index], ...datosParciales };
    return this.estudiantes[index];
  }

  remove(carnet: string): { message: string } {
    const index = this.estudiantes.findIndex(e => e.carnet === carnet);
    if (index === -1) {
      throw new NotFoundException(`Estudiante con carnet ${carnet} no encontrado`);
    }
    this.estudiantes.splice(index, 1);
    return { message: `Estudiante con carnet ${carnet} eliminado correctamente` };
  }
}