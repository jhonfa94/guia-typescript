(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutanPower(id: number): string;
    }

    interface Human {
        age: number;

    }

    class Mutant implements Xmen, Human {
        public age = 0;
        public name = '';
        public realName = '';

        mutanPower() {
            return this.name + ' ' + this.realName;
        }

    }

})()