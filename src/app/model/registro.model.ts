export class Registro {
  nombre: string = 'Anónimo';
  activo: boolean = false;
  color: string = '#000000';
  fecha: Date = new Date();

  constructor(nombre: string, activo: boolean, color: string, fecha: Date) {
    this.nombre = nombre;
    this.activo = activo;
    this.color = color;
    this.fecha = fecha;

    if (!this.activo) {
      this.nombre = 'inactivo';
    }
  }
}
