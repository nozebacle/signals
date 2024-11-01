# Signals

Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.

## Ejecutar

Para correr, use `ng serve` y vaya a `http://localhost:4200/`.

## Pruebas unitarias

Para correr las pruebas, use `ng test --code-coverage`. Esto usará [Karma](https://karma-runner.github.io).

Se creó el archivo de configuración de Karma ( `karma.conf.js`) con el comando `ng generate config karma`

En el archivo de configuración de Karma (`karma.conf.js`), se ha agregado la línea `{ type: 'lcov' }` para que se genere un reporte de coverage que pueda leer SonarCube.
