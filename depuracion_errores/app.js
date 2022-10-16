"use strict";
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
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    console.log(flash);
})();
//# sourceMappingURL=app.js.map