(() => {
    /**
     * El never no es undefine o null
     * el never, significa que la funcion no termina exitosamente 
     * en terminos resumidos, va reventar nuestro programa o metodo donde se esta ejecutando
     */
    const error = (message: string): never => {

        throw new Error(message)
    }

    error('Mensaje de error');





})()