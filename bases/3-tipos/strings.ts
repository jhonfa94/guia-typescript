// Strings

(() => {
    const batman: string = 'Batman';
    console.log('%c%s', 'color: #00bf00', batman);
    let msg: string = "Mensaje"
    console.log('%c%s', 'color: #0088cc', msg);
    let texto: string = `Texto`
    console.log('%c%s', 'color: #917399', texto);

    console.log(batman[10]?.toUpperCase() || 'No esta el caracter solicitado');

})()

