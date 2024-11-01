import { Registro } from './registro.model';

describe('Registro', () => {
  let registroActivo: Registro;
  let registroInactivo: Registro;

  beforeEach(() => {
    registroActivo = new Registro('nombre1', true, 'color', new Date());
    registroInactivo = new Registro('nombre2', false, 'color', new Date());
  });

  it('Debería mantener su nombre si está activo', () => {
    expect(registroActivo.nombre).toBe('nombre1');
  });

  it('Debería cambiar su nombre por "inactivo" si está inactivo', () => {
    expect(registroInactivo.nombre).toBe('inactivo');
  });
});
