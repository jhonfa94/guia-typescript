"use strict";
//PROBLEMA CON LA DEFINICIÓN DE LINEA
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
    };
    flash = {
        name: 'Clark',
        age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
    // console.log(flash.getName());
})();
