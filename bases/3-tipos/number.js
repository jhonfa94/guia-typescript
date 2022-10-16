"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villans = 20;
    console.log(villans.toFixed(2));
    if (avengers < villans) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number('1343A'); // Retorna un NaN y es considerado como un numero
    console.log('%c%s', 'color: #733d00', avengers);
})();
