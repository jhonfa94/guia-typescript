"use strict";
(() => {
    //Arreglo de multiples tipos de valores
    const caracters = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    //Arreglo de solo numeros
    const numbers = [1, 2, 3, 4, 5];
    caracters.push(11);
    caracters.push(true);
    caracters.push(false);
    console.log('%c%s', 'color: #00b300', caracters);
    numbers.push(6);
    console.log('%c%s', 'color: #1d5673', numbers);
    numbers.forEach(n => console.log(n));
    // console.log('%c%s', 'color: #f200e2', numbers);
    const nombres = ['Juan', 'Pedro', 'Jhon'];
    nombres.forEach(n => console.log(n.toLocaleUpperCase()));
})();
