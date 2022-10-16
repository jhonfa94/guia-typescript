(() => {
    // Tipo de dato enum
    // ! Solamente existe en TypeScript
    /**
     * ? Permite establecer valores para un sentido semantico
     * * Las enumeraciones nos permiten manejar una serie de numeros
     */

    enum AudioLevel {
        min,
        medium,
        max
    }
    console.log('%c%s', 'color: #807160', AudioLevel);

    let currentAudio = AudioLevel.max;
    console.log('%c%s', 'color: #731d1d', currentAudio);



})()
