(() => {

    /**
     * LA CLASE ABSTRACTA
     * Se utilizan para crear clases y de asegurarse que se implmenten los parametros que se espera al heredarse de ellas, 
     * por lo tanto al ser extendidas obligan a la clase que extiende a implementar los parametros del constructor y métodos que se tienen.
     */

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) {
        }
    }

    class Xmen extends Mutante {

        salvarMundo() {
            return 'Mundo a salvo'
        }

    }

    class Villian extends Mutante {

        conquistarMundo() {
            return 'Mundo conquistado'
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());

    const printName = (charater: Mutante) => {
        console.log(charater.realName);
    }

    printName(wolverine)
    printName(magneto)


})()