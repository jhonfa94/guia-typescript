/**
 * Tipo de funcion
 */
(() => {

    // const addNumber = (a: number, b: number) => {
    //     return a + b
    // }
    const addNumbers = (a: number, b: number): number => a + b
    const greet = (name: string): string => `Hola ${name}`
    const saveTheWorld = (): string => `El mundo está salvado`

    // let myFunction: Function
    let myFunction: (y: number, z: number) => number

    // * myFunction = 10
    // * console.log('%c%s', 'color: #735656', myFunction);

    myFunction = addNumbers;
    console.log('%c%s', 'color: #1d3f73', myFunction(2, 7));

    // myFunction = greet;
    // console.log('%c%s', 'color: #cc0088', myFunction('Jhon Fabio'));

    // myFunction = saveTheWorld;
    // console.log('%c%s', 'color: #cc0088', myFunction());


})()