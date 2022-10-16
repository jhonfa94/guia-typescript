"use strict";
//Argumentos opcionales
/**
 * Para definir el parametro o el argumento como opcional se coloca el signo de interrogación  ?
 */
(() => {
    /**
     *
     * @param firstName
     * @param lastName
     * @returns
     */
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '-------'}`;
    };
    const name = fullName('Toney');
    console.log('%c%s', 'color: #731d6d', name);
})();
