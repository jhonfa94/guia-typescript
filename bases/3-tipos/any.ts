(() => {
    // Tratar de de no utilizar el dato de any
    let avenger: any = 123;
    let exits;
    let power;
    let num1: number = 1222;

    avenger = 'Dr Strange'
    console.log('%c%s', 'color: #ffa640', avenger.charAt(0));

    console.log(num1.toFixed(2));

    //Casting
    console.log((avenger as string).charAt(1));

    //Otro tipo de casteo
    // console.log(<number>avenger.toFixed(2));







})()