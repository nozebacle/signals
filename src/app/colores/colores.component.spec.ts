import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresComponent } from './colores.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ColoresComponent', () => {
  let component: ColoresComponent;
  let fixture: ComponentFixture<ColoresComponent>;
  let boton1: DebugElement;
  let boton2: DebugElement;
  let boton3: DebugElement;
  let boton4: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    boton1 = fixture.debugElement.query(By.css('#boton1'));
    boton2 = fixture.debugElement.query(By.css('#boton2'));
    boton3 = fixture.debugElement.query(By.css('#boton3'));
    boton4 = fixture.debugElement.query(By.css('#boton4'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event with the correct color when the buttons are clicked', () => {
    let buttons = [boton1, boton2, boton3, boton4];

    // Test each color to see if the background color matches the event that is generated
    buttons.forEach((button) => {
      // We subscribe to the output signal in the component
      // When colorSeleccionado is emitted, we change the value of the local variable selectedColor with the value of the event
      let colorSeleccionado: string | undefined;
      component.colorSelected.subscribe((color) => {
        colorSeleccionado = color;
      });

      // The expected color will be the background color of the button that we are testing
      let colorFondoBoton = button.nativeElement.style.backgroundColor;

      // Browsers return colors in the format rgb(r, g, b) so we need to convert it to the hex format #rrggbb
      let colorHex = rgbToHex(colorFondoBoton);

      // We click on the butto
      button.triggerEventHandler('click');

      // If everything worked, now colorSeleccionado should have the value received in the event
      // and colorSeleccionado should match the expected hex color
      expect(colorSeleccionado).toBe(colorHex);
    });
  });
});

function rgbToHex(rgbString: string) {
  const hexValues = rgbString.match(/\d+/g); // leave in an array the numbers in the string
  return '#' + hexValues!.map((value) => parseInt(value).toString(16)).join('');
}
