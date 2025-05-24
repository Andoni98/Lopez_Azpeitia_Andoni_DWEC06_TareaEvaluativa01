import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Pelicula from '../models/Pelicula';

@Injectable({
  providedIn: 'root'
})
  export class PeliculaService{

    readonly API_URL = 'https://682de8cf746f8ca4a47b21a0.mockapi.io/peliculas'

    peliculas: Pelicula[] = [];

    constructor(private http: HttpClient){
      this.peliculas = []
    }

    getPeliculas(){
      return this.http.get<Pelicula[]>(this.API_URL);
    }

    postPelicula(pelicula: Pelicula){
      return this.http.post<Pelicula>(this.API_URL, pelicula)
    }

    deletePelicula(id: number) {
      return this.http.delete<any>(`${this.API_URL}/${id}`)
    }

    updatePelicula(id: number, pelicula: Pelicula) {
      return this.http.put<any>(`${this.API_URL}/${id}`, pelicula);
    }
  }
