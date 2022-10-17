(() => {

    class Avenger {

        constructor(
            private name: string,
            // public name: string,
            public realName?: string
        ) {
            // s
            console.log("Constructor Avenger llamado");

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
            console.log("Contructor Xmen llamado");

        }

        getFullNameDesdeXmen() {
            console.log(super.getFulllNameProtected());
        }

    }

    const wolverine = new Xmen('Wolvernie', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen()


})()