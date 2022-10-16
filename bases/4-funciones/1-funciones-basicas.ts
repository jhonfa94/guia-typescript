// Funciones básicas

(() => {
    const hero: string = "Flash";

    function returnName(): string {
        return hero;
    }

    const activateBatisignal = (): string => {
        return "Batisenal activada!";
    };

    console.log(typeof activateBatisignal);

    const heroName = returnName()
    console.log('%c%s', 'color: #006dcc', heroName);

    //
})();
