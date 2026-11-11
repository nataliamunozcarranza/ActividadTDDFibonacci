const PIN_REGEX = /^(\d{4}|\d{6})$/;

export function esPinValido(pin) {
  if (typeof pin !== 'string') return false;
  if (!PIN_REGEX.test(pin)) return false;
  return new Set(pin).size > 1;
}