"use strict";
//Argumentos opcionales
/**
 * Para definir el parametro o el argumento como opcional se coloca el signo de interrogación  ?
 * Los argumentos opcionales se recomiendan dejar para el final
 */
(() => {
    /**
     *
     * @param firstName
     * @param lastName
     * @returns
     */
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '-------'}  `.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '-------'} `;
        }
    };
    const name = fullName('tony', 'stark', true);
    console.log('%c%s', 'color: #731d6d', name);
})();
