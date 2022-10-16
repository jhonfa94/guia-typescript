"use strict";
// Funciones básicas
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return "Batisenal activada!";
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
    console.log('%c%s', 'color: #006dcc', heroName);
    //
})();
