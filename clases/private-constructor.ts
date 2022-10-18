(() => {

    /**
     * Constructores privado
     * 
     * Se determina como se va llamar el constructor
     * Cuando se coloca private al constructor, solo se puede ser llamado desde la misma clase
     */
    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor(
            public name: string
        ) { }

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único')
            }

            return Apocalipsis.instance

        }

        changeName(newName: string): void {
            this.name = newName
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()

    apocalipsis1.changeName('Xavier')

    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);



    // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el único')
    // console.log(apocalipsis);



})()