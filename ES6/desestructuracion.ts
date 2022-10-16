(() => {

    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    const avengers: Avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500
    }

    const { poder, vision } = avengers
    console.log('color: #00e600', vision.toUpperCase());
    console.log('%c%s', 'color: #ff0000', poder);

    const printAvenger = ({ ironman, ...resto }: Avengers) => {
        // console.log('Print Avenger: ', ironman, ' ', resto);
        console.log(ironman, resto);
    }

    printAvenger(avengers)

    // const avengersArr = ['Cap América', 'ironman', 'Hulk']
    const avengersArr: [string, boolean, number] = ['Cap América', true, 15.55]

    // const ironman = avengersArr[1]
    // console.log('%c%s', 'color: #00a3cc', ironman);

    const [capitan, ironman, seriaUnNumero] = avengersArr
    console.log({ capitan, ironman, seriaUnNumero });


})()