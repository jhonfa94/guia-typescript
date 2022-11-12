/**
 *  Las funciones genericas son las que pueden recibir cualquier tipo de argumento
 
 */

export const printObject = (argument: any) => {
    console.log(argument);
}

export function genericFunction<T>(argument: T) {
    return argument;
}

export const genericFunctionArrow = <T>(argument: T) => {
    return argument
}