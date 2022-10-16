"use strict";
/**
 * Tipo de funcion
 */
(() => {
    // const addNumber = (a: number, b: number) => {
    //     return a + b
    // }
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    // let myFunction: Function
    let myFunction;
    // * myFunction = 10
    // * console.log('%c%s', 'color: #735656', myFunction);
    myFunction = addNumbers;
    console.log('%c%s', 'color: #1d3f73', myFunction(2, 7));
    // myFunction = greet;
    // console.log('%c%s', 'color: #cc0088', myFunction('Jhon Fabio'));
    // myFunction = saveTheWorld;
    // console.log('%c%s', 'color: #cc0088', myFunction());
})();
