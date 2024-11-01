import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';
import { Registro } from '../model/registro.model';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the form should be valid with propper data', () => {
    let nuevoRegistro = new Registro('Nombre', true, '#00FF00', new Date());
    component.registroForm.setValue({
      nombre: nuevoRegistro.nombre,
      fecha: nuevoRegistro.fecha.toISOString(),
      color: nuevoRegistro.color,
      activo: nuevoRegistro.activo,
    });
    expect(component.registroForm.valid).toEqual(true);
  });

  it('should emit a new Registro when submit is clicked', () => {
    let registroRecibido: Registro | undefined;
    component.registroUpdated.subscribe((registro) => {
      registroRecibido = registro;
    });

    let fecha = new Date();
    fecha.setHours(0, 0, 0, 0);

    let nuevoRegistro = new Registro('Nombre', true, '#00FF00', fecha);
    component.registroForm.setValue({
      nombre: nuevoRegistro.nombre,
      fecha: nuevoRegistro.fecha.toISOString().substring(0, 10),
      color: nuevoRegistro.color,
      activo: nuevoRegistro.activo,
    });

    component.enviarFormulario();
    expect(registroRecibido).toBeDefined();
    expect(registroRecibido?.nombre).toEqual(nuevoRegistro.nombre);
    expect(registroRecibido?.fecha).toEqual(nuevoRegistro.fecha);
    expect(registroRecibido?.color).toEqual(nuevoRegistro.color);
    expect(registroRecibido?.activo).toEqual(nuevoRegistro.activo);
  });

  it('should emit the "reiniciar" event when Reiniciar is clicked', () => {
    let reiniciado: boolean = false;
    component.reiniciar.subscribe(() => {
      reiniciado = true;
    });

    let botonReiniciar = fixture.debugElement.query(By.css('#reiniciar'));
    botonReiniciar?.triggerEventHandler('click');

    component.enviarFormulario();
    expect(reiniciado).toBeTruthy();
  });
});
