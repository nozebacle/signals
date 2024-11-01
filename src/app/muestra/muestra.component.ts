import { Component, input } from '@angular/core';
import { Registro } from '../model/registro.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-muestra',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './muestra.component.html',
  styleUrl: './muestra.component.css',
})
export class MuestraComponent {
  registroSeleccionado = input.required<Registro>();
}
