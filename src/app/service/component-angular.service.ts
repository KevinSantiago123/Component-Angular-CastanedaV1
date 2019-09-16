import { Injectable } from '@angular/core';
import { Asignaturas } from '../dto/datos-component';
import { SedeU } from '../dto/datos-component';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  asignaturas: Asignaturas[] = [
    {name_asignatura: 'Bases de datos', facultad: 'Ing. Sistemas',creditos:3},
    {name_asignatura: 'Matematica I', facultad: 'Ciencas básicas',creditos:1},
    {name_asignatura: 'Programación I', facultad: 'Ing. Sistemas',creditos:3 },
    {name_asignatura: 'Etica', facultad: 'Humanidades',creditos:2 },
    {name_asignatura: 'Redes II', facultad: 'Ing. Sistemas',creditos:3}
  ];

  constructor() { }

  getAsignaturas() {
    return this.asignaturas;
  }

}
