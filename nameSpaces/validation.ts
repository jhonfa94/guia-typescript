namespace Validations {

    export const validateText = (text: string): boolean => {

        return (text.length > 3) ? true : false;

        // if (text.length > 0) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    export const validateDate = (myDate: Date) => {
        // isNaN => si no es un numbero NaN Not at Number
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    }

}


console.log(Validations.validateText('Jhon'));
console.log(Validations.validateDate(Date()));
