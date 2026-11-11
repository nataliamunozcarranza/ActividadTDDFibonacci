import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('fibonacci', () => {
  it('f(0) = 0', () => expect(fibonacci(0)).toBe(0));
  it('f(1) = 1', () => expect(fibonacci(1)).toBe(1));
  it('f(2) = 1', () => expect(fibonacci(2)).toBe(1));
  it('f(5) = 5', () => expect(fibonacci(5)).toBe(5));
  it('f(10) = 55', () => expect(fibonacci(10)).toBe(55));
  it('negativo lanza RangeError', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
    expect(() => fibonacci(-1)).toThrow('solo números enteros ≥ 0');
  });
  it('no entero lanza RangeError', () => {
    expect(() => fibonacci(1.5)).toThrow(RangeError);
  });
});