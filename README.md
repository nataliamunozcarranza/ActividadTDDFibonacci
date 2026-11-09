# ActividadTDDFibonacci: PF03 - TDD con Node, Vitest y CI

Proyecto de la Actividad 1 de la píldora formativa 3. Consiste en implementar dos funciones en JavaScript siguiendo la metodología TDD (Red → Green → Refactor), con pruebas automáticas ejecutadas mediante GitHub Actions.

## Funciones

- `fibonacci(n)`: devuelve el n-ésimo número de la sucesión de Fibonacci. Lanza `RangeError` si `n` es negativo o no es entero.
- `esPinValido(pin)`: devuelve `true` si el PIN es válido (4 o 6 dígitos, solo números y no todos iguales) y `false` en caso contrario.

## Tecnologías

- Node.js
- Vitest (pruebas unitarias)
- GitHub Actions (integración continua)

## Instalación

```bash
npm ci
```

## Ejecutar los tests

```bash
npm test
```

## Estructura del proyecto

src/ -> código de las funciones
test/ -> pruebas unitarias
.github/workflows/ci.yml -> workflow de integración continua


## Flujo de trabajo

Se trabaja con GitFlow entre dos desarrolladores:

- `main`: rama estable.
- `develop`: rama de integración.
- `feature-*`: ramas de trabajo (tests y código).

Los cambios llegan a `main` mediante Pull Request, solo si los tests pasan en CI.

## Autor(es)
nataliamunozcarranza
namuca2627

