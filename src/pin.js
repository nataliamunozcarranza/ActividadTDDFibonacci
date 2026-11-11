export function esPinValido(pin) {
  if (pin === null || pin === undefined) return false;
  if (pin === '') return false;
  if (pin.length !== 4 && pin.length !== 6) return false;
  for (const c of pin) {
    if (c < '0' || c > '9') return false;
  }
  const todosIguales = pin.split('').every((c) => c === pin[0]);
  return !todosIguales;
}