import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import Pelicula from '../../models/Pelicula';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejemplos',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ejemplos.component.html',
  styleUrl: './ejemplos.component.css'
})
export class EjemplosComponent implements OnInit{
  peliculas: any[] = [];
  peliculaEnEdicion: any = null;
  constructor(public peliculaService: PeliculaService){

  }
ngOnInit(): void {
  this.getPeliculas()

}
getPeliculas() {
  this.peliculaService.getPeliculas().subscribe({
    next: (data) => {
      this.peliculaService.peliculas = data;
    },
    error: (e) => {
      console.log(e);
    }
  })
}

deletePelicula(id: number) {
  this.peliculaService.deletePelicula(id).subscribe({
    next: (data) => {
      console.log(data);
      this.getPeliculas();
    },
    error: (e) => {
      console.log(e);
    }
  })
}

editarPelicula(pelicula: Pelicula) {
    this.peliculaEnEdicion = { ...pelicula }; // Crear copia editable
  }

  actualizarPelicula() {
    if (!this.peliculaEnEdicion) return;

    this.peliculaService.updatePelicula(this.peliculaEnEdicion.id, this.peliculaEnEdicion).subscribe({
      next: (data) => {
        console.log('Película actualizada:', data);
        this.peliculaEnEdicion = null;
        this.cargarPeliculas();
        this.getPeliculas();
      },
      error: (e) => console.error('Error al actualizar película:', e)
    });
  }
  cargarPeliculas() {
  this.peliculaService.getPeliculas().subscribe((data) => {
    this.peliculas = data;
  });
}

}
