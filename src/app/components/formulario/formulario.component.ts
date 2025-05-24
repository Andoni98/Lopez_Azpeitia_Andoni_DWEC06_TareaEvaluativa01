import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioPeliculaComponent {
  peliculaForm: FormGroup;
  titulo: FormControl;
  anio: FormControl;
  director: FormControl;
  constructor(public peliculaService: PeliculaService) {
    this.titulo = new FormControl('', Validators.required);
    this.anio = new FormControl('', [Validators.required,
      Validators.pattern(/^[0-9]{4}$/),
      Validators.max(new Date().getFullYear())]);
    this.director = new FormControl('', Validators.required);
    this.peliculaForm = new FormGroup({
      titulo : this.titulo,
      anio : this.anio,
      director : this.director
    });
  }

  handleSubmit(): void{
    console.log(this.peliculaForm.value);
  }

  postPelicula() {
      console.log('Pelicula creada: ',this.peliculaForm.value);
      this.peliculaService.postPelicula(this.peliculaForm.value).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (e) =>{
          console.log(e);
        }
      });
      this.peliculaForm.reset();
  }
}

