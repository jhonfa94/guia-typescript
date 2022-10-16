"use strict";
// FUNCION AUTO INVOCABLE
(() => {
    // let isSuperman = true;
    let isSuperman = true;
    let isBatman = false;
    console.log({ isSuperman });
    console.log({ isBatman });
    // isSuperman = true && false
    // console.log(isSuperman);
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
})();
