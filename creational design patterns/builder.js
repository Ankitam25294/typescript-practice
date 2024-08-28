
//we declare our objects
const bug1 = {
    name: "bug1"
}
const bug2 = {
    name: "bug2"
}

//these functions take an object as parameter and add method to them

const addFlyingAbility = obj => {
    obj.fly = () => console.log(`Now ${obj.name} can fly`);
}
const addSpeechAbility = obj => {
    obj.saySmthng = () => console.log(`Now ${obj.name} can speak`);
}

//finally we call the builder functions passing the objects as parameters
addFlyingAbility(bug1);
bug1.fly();
addSpeechAbility(bug2);
bug2.saySmthng();