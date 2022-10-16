"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500
    };
    const { poder, vision } = avengers;
    console.log('color: #00e600', vision.toUpperCase());
    console.log('%c%s', 'color: #ff0000', poder);
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    printAvenger(avengers);
    const avengersArr = ['Cap América', true, 15.55];
    const [capitan, ironman, seriaUnNumero] = avengersArr;
    console.log({ capitan, ironman, seriaUnNumero });
})();
(() => {
    console.log('For of');
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit"
    };
    const capitanAmerica = {
        name: "Capitan América",
        weapon: "Escudo"
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir"
    };
    const avengers = [ironman, capitanAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger.name, ' ', avenger.weapon);
    }
})();
(() => {
    let name = "Jhon Fabio";
    name = "Nuevo nombre";
    console.log(name);
    const getName = () => {
        console.log("Get Name");
    };
    getName();
    console.log("let");
})();
//# sourceMappingURL=main.js.map