import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { EjemplosComponent } from "../../components/ejemplos/ejemplos.component";

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, FooterComponent, CommonModule, EjemplosComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {}
