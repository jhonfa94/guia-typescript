/**
 * Desde el archivo tsconfig.json le decimos a typescript como quiere que funcione en el proyecto 
 * 
 * tsc -w => para estar en modo watch de escucha
 * 
 * guía de configuración de tsconfig.json => https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
 * 
 * * Desde el archivo de tsconfig.json podemos implementar para que no se cargue los comentarios al traspilar a javascript, para ello tenemos la opcionde removeCommets en valor de true
 * "removeComments": true
 * 
 * ! INCLUIR Y EXCLUIR CARPETAS Y/O ARCHIVOS
 * Podemos cambiar la ruta de salida de los archivos que se tienen para la salida, 
 * Por lo general podemos observar que al crear un archivo se esta genereando el .js el .map al transpilar pero esto se puede organizar, 
 * Por defecto la carpeta node_modules esta excluida porque es algo reservado para librerias, por lo que no se recomienda modificar los valores que viene por defecto en el archivo tsconfig
 * 
 * Para excluir debemos ir al final del archivo tscofig.json y agregar la palabra reservada de configuración exclude, y en objeto especificar lo que se tienen 
 * 
 * Para el ejemplo podemos detallar que se crea una carpeta llamada node_modueles2 dodne al agregar el archivo en .ts automaticamente el tsc -w compila o transcribe el archivo de ts a js y map que se tiene configurado en el archivo tsconfig.json
 * Al momento de agregar el exclude en el objeto y espcificando el al archivo la ruta de node_modueles2 automaticament lo excluye de la trapilación a js
 * 
 * Despues del objecto agregamos el exclude 
 * "exclude": [
    "node_modules2"
    ],
    }

    * ? CONFIGURACION PARA INCLUDE Y EXCLUDE
    "include": [
    "node_modules3"
    ],
    "exclude": [
        "node_modules2"
    ],

 */

(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'Fernando'
    console.log('%c%s', 'color: #ffcc00', typeof myCustomVariable);

    myCustomVariable = 20
    console.log('%c%s', 'color: #408059', typeof myCustomVariable);

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Ningumo']

    }
    console.log('%c%s', 'color: #99adcc', typeof myCustomVariable);


    //
    let flash: { name: string, age?: number, powers: string[], } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        // getFuncion() { return this.name }
    }
    //CONSOLE LOG
    console.log(flash);



})()