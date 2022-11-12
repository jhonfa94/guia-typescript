(() => {

    // console.log('Hola mundo');
    interface Hero {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: "barry Allen",
        age: 24,
        powers: [1, 2]
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [2, 3],
        getName() {
            return this.name
        },
    }


})()