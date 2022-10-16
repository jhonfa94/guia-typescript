"use strict";
// TIPOS DE DATOS EN TYPESCRIPT
/**
 * ES RECOMENTABLE ASIGNAR LOS TIPOS DE DATOS
 * Los tipos datos que tenemos con TypeScript son:
 * * any: cualquier tipo de dato puede ser string, booleano, number, object
 * * number: tipo numerico
 * * string: para caracteres
 */
//  const a = 10;
//  let b= 10;
const a = 10;
let b = 10;
function sayHello(msg) {
    console.log(msg + ' Jhon Fabio');
}
// Funcion auto invocada
(() => {
    console.log("Mensaje auto invocable");
})();
