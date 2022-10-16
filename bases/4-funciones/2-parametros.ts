// ARGUMENTOS OBLIGATORIOS EN LAS FUNCIONES

(() => {

    const fullName = (firstName: string, lastName: (string | boolean)): string => {

        return `${firstName} ${lastName}`

    }

    const name = fullName('Jhon', 'fabio')
    console.log('%c%s', 'color: #731d6d', name);


})()