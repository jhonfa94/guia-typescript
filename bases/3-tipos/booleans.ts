// FUNCION AUTO INVOCABLE
(() => {
    // let isSuperman = true;
    let isSuperman: boolean = true
    let isBatman: boolean = false
    console.log({ isSuperman });
    console.log({ isBatman });

    // isSuperman = true && false
    // console.log(isSuperman);

    isSuperman = (isBatman) ? true : false;

    console.log(isSuperman);



})()