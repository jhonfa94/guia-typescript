"use strict";
// Strings
(() => {
    var _a;
    const batman = 'Batman';
    console.log('%c%s', 'color: #00bf00', batman);
    let msg = "Mensaje";
    console.log('%c%s', 'color: #0088cc', msg);
    let texto = `Texto`;
    console.log('%c%s', 'color: #917399', texto);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta el caracter solicitado');
})();
