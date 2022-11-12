"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor() {
        this.nombre = '';
        this.edad = 0;
        this.sexo = '';
        this.estadoCivil = '';
    }
    imprimirBio() { }
    ;
}
(() => {
    let flash = {
        name: "barry Allen",
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [2, 3],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor() {
            this.age = 0;
            this.name = '';
            this.realName = '';
        }
        mutanPower() {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 22,
        adress: {
            id: 11,
            zip: 'sfasf',
            city: 'Pueblo Rico'
        },
        getFullAdress(id) {
            return this.adress.city;
        },
    };
})();
(() => {
    let addNumberFunction;
    addNumberFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map