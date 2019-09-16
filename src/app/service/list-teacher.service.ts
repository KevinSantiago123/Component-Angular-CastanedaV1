import { Injectable } from '@angular/core';
import { Teacher } from '../dto/teacher';

@Injectable({
  providedIn: 'root'
})
export class ListTeacherService {

  teacher: Teacher[] = [
    {name: 'Juan ', licenciatura: 'Fisica',ciudad:'Bogota',tipologia:'H' },
    {name: 'Pedro ', licenciatura: 'Quimica',ciudad:'Cali',tipologia:'H' },
    {name: 'Maria ', licenciatura: 'C. Naturales',ciudad:'Cali',tipologia:'M' },
    {name: 'Jose ', licenciatura: 'Programación',ciudad:'Bogota',tipologia:'H' },
    {name: 'Felix ', licenciatura: 'db',ciudad:'Bogota',tipologia:'H' }
  ];

  constructor() { }
  
  getTeacher() {
    return this.teacher;
  }
}
