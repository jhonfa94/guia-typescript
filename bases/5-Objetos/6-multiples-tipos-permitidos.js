"use strict";
//MULTIPLES TIPOS PERMITIDOS
(() => {
    let myCustomVariable = 'Fernando';
    console.log('%c%s', 'color: #ffcc00', typeof myCustomVariable);
    myCustomVariable = 20;
    console.log('%c%s', 'color: #408059', typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Ningumo']
    };
    console.log('%c%s', 'color: #99adcc', typeof myCustomVariable);
})();
