import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MuestraComponent } from './muestra/muestra.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Registro } from './model/registro.model';
import { ColoresComponent } from './colores/colores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MuestraComponent,
    FormularioComponent,
    ColoresComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signals';
  registroMostrado: Registro | undefined;
  colorFondo: string | undefined;

  onColorSelected(color: string) {
    this.colorFondo = color;
  }

  reiniciarValores() {
    this.registroMostrado = new Registro('dummy', false, '#DDDDFF', new Date());
  }

  updateRegistro(r: Registro) {
    this.registroMostrado = r;
  }
}
