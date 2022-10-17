(() => {

    class Avenger {
        static avgAge: number = 35;


        // private name: string;
        // public team: string;
        // public realName?: string;

        // FORMA TRADICIONAL DE REALIZAR LOS CONSTRUCTORES
        // constructor(name: string, team: string, realName?: string) {
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }

        //NUEVA FORMA DE GENERAR LOS CONSTRUCTORES EN TYPESCRIPT
        constructor(private name: string, public team: string, public realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

        /**
         * ! MÉTODOS
         * * public
         * * private =>Al ser transpilado a js se puede visualizar el resultado
         * * static => Se accede a ellos mediante la Clase directamente  y no por instanscias
         * 
         */


        //POR DEFECTO ES PUBLICO  
        // PERO ES LO MISMO QUE COLOCAR public bio
        public bio() {
            return `${this.name} (${this.team})`
        }


        static getAvAge() {
            return this.name
        }

    }




    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log(antman);
    // console.log(Avenger.avgAge);
    // console.log(antman.bio());
    // console.log(Avenger.getAvAge());




})()