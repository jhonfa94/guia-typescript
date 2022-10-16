(() => {
    /**
     * let: utilizar cuando el valor cambia
     * const: utilizar cuando se necesita que el valor sea fijo, ejemplo funciones
     */
    let name: string = "Jhon Fabio";
    name = "Nuevo nombre"
    console.log(name);


    const getName = (): void => {
        console.log("Get Name");

    }

    getName()

    console.log("let");
})();
