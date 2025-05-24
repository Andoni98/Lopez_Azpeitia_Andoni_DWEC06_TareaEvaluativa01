import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { CrearComponent } from './pages/crear/crear.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'agregar', component: CrearComponent}
];