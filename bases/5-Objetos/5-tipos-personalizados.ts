//PROBLEMA CON LA DEFINICIÓN DE LINEA
(() => {

    /**
     * En typescript se tiene una palabra reservada type
     * Se utiliza para definir los tipos
     * 
     * type esta creada para colocar reglas a un objeto o variable definido 
     * 
     */
    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }


    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
    }

    flash = {
        name: 'Clark',
        age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    }
    console.log(flash);
    // console.log(flash.getName());


})()