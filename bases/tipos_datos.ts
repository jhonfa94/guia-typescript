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
const a: number = 10;
let b: number = 10;



function sayHello(msg: string) {
    console.log(msg + ' Jhon Fabio');

}

// Funcion auto invocada
(() => {
    console.log("Mensaje auto invocable");
})()