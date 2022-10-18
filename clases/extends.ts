(() => {

    class Avenger {

        constructor(
            protected name: string,
            // private name: string,
            // public name: string,
            public realName?: string
        ) {
            // console.log("Constructor Avenger llamado");

        }

        private getFulllNamePrivete() {
            return `${this.name} ${this.realName}`
        }

        protected getFulllNameProtected() {
            return `${this.name} ${this.realName}`
            // console.log(`${this.name} ${this.realName}`);
        }
    }



    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMuant: boolean
        ) {
            super(name, realName)
            // console.log("Contructor Xmen llamado");
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor de 3 letras')
            }
            this.name = name;
        }



        getFullNameDesdeXmen() {
            console.log(super.getFulllNameProtected());
        }

    }

    const wolverine = new Xmen('Wolvernie', 'Logan', true);
    // console.log(wolverine);
    // wolverine.getFullNameDesdeXmen()
    // console.log(wolverine.fullName);
    wolverine.fullName = 'Jhon'
    // console.log(wolverine.fullName);



})()