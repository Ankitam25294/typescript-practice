// Using classes
var Alien = /** @class */ (function () {
    function Alien(name, phrase) {
        this.fly = function () { console.log("fly"); };
        this.sayPhrase = function () { console.log("sayPhrase"); };
        this.name = name;
        this.phrase = phrase;
        this.species = "alien";
    }
    return Alien;
}());
var alien1 = new Alien("Ali1", "I'm the alien!");
console.log(alien1.name);
// Using Factory function
function AlienFunc(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
}
AlienFunc.prototype.fly = function () { console.log("fly func"); };
AlienFunc.prototype.sayPhrase = function () { console.log("sayPhrase func"); };
var alien2 = new AlienFunc("Ali2", "I'm the alien2!");
console.log(alien2.name);
console.log(alien2.phrase);
alien2.fly();
