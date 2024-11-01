import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-colores',
  standalone: true,
  imports: [],
  templateUrl: './colores.component.html',
  styleUrl: './colores.component.css',
})
export class ColoresComponent {
  @Output() colorSelected = new EventEmitter<string>();

  cambiarColor(color: string) {
    this.colorSelected.emit(color);
  }
}
