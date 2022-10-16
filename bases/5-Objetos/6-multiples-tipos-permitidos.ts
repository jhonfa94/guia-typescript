//MULTIPLES TIPOS PERMITIDOS
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


})()