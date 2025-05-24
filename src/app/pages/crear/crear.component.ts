import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormularioPeliculaComponent } from '../../components/formulario/formulario.component';

@Component({
  selector: 'app-crear',
  imports: [HeaderComponent, MenuComponent, FooterComponent, FormularioPeliculaComponent],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {

}
