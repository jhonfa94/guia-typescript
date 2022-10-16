"use strict";
/**
 *  ? Argumento rest
 * El resto de argumentos
 */
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const supermam = fullName('Clark', 'Josep', 'kent');
    console.log('%c%s', 'color: #e57373', supermam);
})();
