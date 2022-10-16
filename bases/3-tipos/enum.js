"use strict";
(() => {
    // Tipo de dato enum
    // ! Solamente existe en TypeScript
    /**
     * ? Permite establecer valores para un sentido semantico
     * * Las enumeraciones nos permiten manejar una serie de numeros
     */
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    console.log('%c%s', 'color: #807160', AudioLevel);
    let currentAudio = AudioLevel.max;
    console.log('%c%s', 'color: #731d1d', currentAudio);
})();
