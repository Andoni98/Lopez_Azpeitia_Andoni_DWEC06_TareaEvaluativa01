import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { BodyComponent } from "../../components/body/body.component";

@Component({
  selector: 'app-inicio',
  imports: [HeaderComponent, FooterComponent, MenuComponent, BodyComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
