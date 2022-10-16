"use strict";
//METODOS EN LOS OBJETOS
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        // getFuncion() { return this.name }
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
