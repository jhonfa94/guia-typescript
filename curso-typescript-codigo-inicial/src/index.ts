import { getPokemon } from './generics/get-pokemon';


// import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';
// import { Villain, Hero } from './interfaces';
// import { Hero } from './interfaces/hero';
// import { Villain } from './interfaces/villain';


// printObject(123)
// printObject(124)
// printObject(new Date())

// const name: string = 'Jhon Fabio';
// console.log(genericFunction(3.1423234).toFixed(2));
// console.log(genericFunction(name).length);
// console.log(genericFunction(new Date()).getDate());

// console.log(genericFunctionArrow('ddd'));

// const deadpool = {
//     name: "Deadpool",
//     realName: "wade Winston Wilson",
//     dangerLevel: 130
// }
// console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
// console.log(getPokemon());
getPokemon(4)
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(error => console.log(error))
    .finally(() => console.log('Fin getPokemon'))











