
function printToConsole(constructor: Function) {
    console.log(constructor);

}

const printToConsoleConditional = (print: boolean = false): Function => {
    // return () => console.log('Hola mundo');
    if (print) {
        return printToConsole
    } else {
        return () => { }
    }

}

const bloquearPrototipo = function (constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)

}


function CheckValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log('target: ', target);
        // console.log('propertyKey: ', propertyKey);
        // console.log('descriptor: ', descriptor);


        // descriptor.value = () => console.log('Hola mundo');
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('El id del pokemon debe estar entre 1 y 800')
            } else {
                return originalMethod(id)
            }
        }
    }
}

// function readonly(isWritable: boolean = true): Function {
//     return function (target: any, propertyKey: string, escriptor: PropertyDescriptor) {
//         console.log('target: ', target);
//         console.log('propertyKey: ', propertyKey);
//         console.log('descriptor: ', descriptor);
//     }
// }


// @printToConsole
@bloquearPrototipo
@printToConsoleConditional(false)

export class Pokemon {
    public publicApi: string = 'https://pokeapi.co/'

    constructor(
        public name: string
    ) {

    }

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon guardado en base de datos: ${id}`);

    }
}