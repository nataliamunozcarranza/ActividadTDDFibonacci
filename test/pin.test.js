import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido', () => {
  it.each(['1234', '123456', '0123', '120934'])('%s es válido', (pin) => {
    expect(esPinValido(pin)).toBe(true);
  });

  it.each([null, undefined, ''])('%s es inválido (nulo o vacío)', (pin) => {
    expect(esPinValido(pin)).toBe(false);
  });

  it.each(['123', '12345', '1234567'])('%s tiene longitud incorrecta', (pin) => {
    expect(esPinValido(pin)).toBe(false);
  });

  it.each(['12a4', '12 4', '12.456', '12-456'])('%s contiene no dígitos', (pin) => {
    expect(esPinValido(pin).toBe(false);
  });

  it.each(['1111', '888888', '0000'])('%s tiene todos los dígitos iguales', (pin) => {
    expect(esPinValido(pin).toBe(false);
  });
});
