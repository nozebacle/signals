import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { Registro } from '../model/registro.model';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  @Output() reiniciar = new EventEmitter();
  @Output() registroUpdated = new EventEmitter<Registro>();

  colorFondo = input<String>();
  colorActual = computed(() => this.colorFondo() || '#ccccff');

  registroForm = new FormGroup({
    nombre: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    activo: new FormControl<boolean>(true, [Validators.required]),
    fecha: new FormControl<string>(new Date().toISOString().slice(0, 10), [
      Validators.required,
    ]),
    color: new FormControl<string>('#AAFFAA', [Validators.required]),
  });

  enviarFormulario() {
    let nombre = this.registroForm.get('nombre')?.value;
    if (!nombre) nombre = 'anonimo';

    let color = this.registroForm.get('color')?.value;
    if (!color) color = '#CCCCCC';

    let activo = this.registroForm.get('activo')?.value;
    if (!activo) activo = false;

    let fecha = this.registroForm.get('fecha')?.value;
    let fecha_real: Date;
    if (!fecha) {
      fecha_real = new Date(Date.now());
    } else {
      let localTime = new Date(fecha + ' 0:0:0');
      fecha_real = localTime;
    }
    let nuevoRegistro = new Registro(nombre, activo, color, fecha_real);
    this.registroUpdated.emit(nuevoRegistro);
  }

  reiniciarValores() {
    this.reiniciar.emit();
  }

  saludar() {
    alert('Hola');
  }
}
