// we declare our prototype object with 2 methods
const enemy = {
    attack: () => console.log("attack"), 
    flyAway: () => console.log("flyAway"),
}

// we declare another object that will inherit from our prototype
const bug1 = {
    name: "buggy",
    phrase: "your debugger doesn't work with me"
}

//with setPrototypeOf we set the prototype of our object

Object.setPrototypeOf(bug1, enemy);

//with getPrototypeOf we read the prototype and confirm the previous has worked

console.log(Object.getPrototypeOf(bug1));
console.log(bug1.name);
console.log(bug1.phrase);
console.log(bug1.attack());
console.log(bug1.flyAway());