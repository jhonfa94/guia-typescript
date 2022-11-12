(() => {

    interface Client {
        name: string;
        age?: number;
        adress: Adress,
        getFullAdress(id: string): string
    }

    interface Adress {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Fernando',
        age: 22,
        adress: {
            id: 11,
            zip: 'sfasf',
            city: 'Pueblo Rico'
        },
        getFullAdress(id: string) {
            return this.adress.city
        },
    }

})()