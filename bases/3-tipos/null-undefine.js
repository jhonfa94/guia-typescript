"use strict";
(() => {
    /**
     * Se pueden considerar como valores permitidos a un
     * string, valor booleano, a otro tipo de dato
     * Esto no se permite desde TypeScript
     */
    let nada = undefined;
    console.log('%c%s', 'color: #007300', nada);
    // Ejemplo del error
    // let isActive: boolean = undefined;
    // Mejorando el inconveniente explicitamente
    let isActive2 = undefined;
    /**
     * En el archvo de tsconfig.json se tiene el
     * strictNullChecks en valor por defecto de true,
     * si se deja en false, se quita el error
     */
    /**
     * En teoria se puede manejar para los valores booleanos
     * el true, false, null y undefine, pero en TypeScript esto no se permite
     */
})();
