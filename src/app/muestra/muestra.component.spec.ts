import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraComponent } from './muestra.component';
import { Registro } from '../model/registro.model';

describe('MuestraComponent', () => {
  let component: MuestraComponent;
  let fixture: ComponentFixture<MuestraComponent>;
  let elementoRaiz: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuestraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MuestraComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput(
      'registroSeleccionado',
      new Registro('nuevo', true, '#000000', new Date())
    );
    fixture.detectChanges();
    elementoRaiz = fixture.nativeElement.querySelector('.muestra');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector('#nombre').textContent
    ).toContain('nuevo');
  });

  it('should change the content when the input "registroSeleccionado" is set', () => {
    let nuevoRegistro = new Registro('Nombre', false, '#00FF00', new Date());
    fixture.componentRef.setInput('registroSeleccionado', nuevoRegistro);

    fixture.detectChanges();

    // El nombre se está buscando en un div con un id específico
    expect(
      fixture.nativeElement.querySelector('#nombre').textContent
    ).toContain(nuevoRegistro.nombre);

    // El color y activo se buscan dentro de todo el componente
    expect(elementoRaiz.textContent).toContain(nuevoRegistro.activo);
    expect(elementoRaiz.textContent).toContain(nuevoRegistro.color);
  });

  it('should change the background color when the input "registroSeleccionado" is set', () => {
    let colorFondo = 'rgb(0, 0, 255)'; // Usamos esta representación para los colores porque es la que usan los navegadores
    let nuevoRegistro = new Registro(
      'nuevo registro',
      false,
      colorFondo,
      new Date()
    );
    fixture.componentRef.setInput('registroSeleccionado', nuevoRegistro);
    fixture.detectChanges();

    expect(elementoRaiz.style.backgroundColor).toBe(colorFondo);
  });
});
