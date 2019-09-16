import { Injectable } from '@angular/core';
import { Movie } from '../dto/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    {name: 'La isla siniestra', year: 2010,actor:'Leonardo Dicaprio' },
    {name: 'Perdida', year: 2014, actor:'n/a'},
    {name: 'The number 23', year: 2007,actor:'Juan'},
    {name: 'El Origen', year: 2010,actor:'Mario'},
    {name: 'El maquinista', year: 2004,actor:'de la espriella'}
  ];

  constructor() { }

  getMovies() {
    return this.movies;
  }
}
