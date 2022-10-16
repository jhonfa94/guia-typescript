//OBJETOS ESPECIFICOS
(() => {

    let flash: { name: string, age?: number, powers: string[], } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        // getFuncion() { return this.name }
    }

    // flash = {
    //     name: 'Clark',
    //     age: 60,
    //     powers: ['Super fuerza'], 
    //     getNombre(){
    //         return this.name
    //     }
    // }
    console.log(flash);


})()