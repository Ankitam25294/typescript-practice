// Using classes

class Alien {
    name;
    phrase;
    species;
    constructor(name, phrase) {
        this.name = name;
        this.phrase = phrase;
        this.species = "alien";
    }
    fly = () => { console.log("fly") };
    sayPhrase = () => { console.log("sayPhrase") };
}

const alien1 = new Alien("Ali1", "I'm the alien!");
console.log(alien1.name);



// Using Factory function


function AlienFunc(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
}

AlienFunc.prototype.fly = () => { console.log("fly func") };
AlienFunc.prototype.sayPhrase = () => { console.log("sayPhrase func") };

const alien2 = new AlienFunc("Ali2", "I'm the alien2!");
console.log(alien2.name);
console.log(alien2.phrase);
alien2.fly();
