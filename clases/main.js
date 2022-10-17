"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
        static getAvAge() {
            return this.name;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado");
        }
        getFulllNamePrivete() {
            return `${this.name} ${this.realName}`;
        }
        getFulllNameProtected() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMuant) {
            super(name, realName);
            this.isMuant = isMuant;
            console.log("Contructor Xmen llamado");
        }
        getFullNameDesdeXmen() {
            console.log(super.getFulllNameProtected());
        }
    }
    const wolverine = new Xmen('Wolvernie', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();
})();
//# sourceMappingURL=main.js.map