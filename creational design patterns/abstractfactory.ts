// we have class or concrete factory for each vehicle type

class Car {
    name;
    wheels;
    constructor() {
        this.name = "Car";
        this.wheels = 4;
        console.log('Car constructor', this)

    }
    turnOn = () => {
        console.log('Car arrow', this)
    }
    turnOnFunc() {
        console.log('Car normal', this)
    }
}


class Truck {
    name;
    wheels;
    constructor() {
        this.name = "Truck";
        this.wheels = 8;
    }
    turnOn = () => {
        console.log('Truck arrow')
    }
    turnOnFunc() {
        console.log('Car normal')
    }
}


class MotorCycle {
    name;
    wheels;
    constructor() {
        this.name = "MotorCycle";
        this.wheels = 2;
    }
    turnOn = () => {
        console.log('MotorCycle arrow')
    }
    turnOnFunc() {
        console.log('MotorCycle normal')
    }
}


// abstract factory that works as a single point of interaction for our clients
// Given the type parameter it receives, in will call the corresponding concreate factory

const vehicleFactory = {
    createVehicle : function(type) {
        switch(type) {
            case 'car' :
                return new Car();
            case 'truck' :
                return new Truck();
            case 'motorcycle' :
                return new MotorCycle();
            default:
                return null;
        }
    }
}


const carobj = vehicleFactory.createVehicle('car');
const truckobj = vehicleFactory.createVehicle('truck');
const motorcycleobj = vehicleFactory.createVehicle('motorcycle');

console.log(carobj?.turnOn())
console.log(carobj?.turnOnFunc())

console.log(truckobj?.turnOn())
console.log(truckobj?.turnOnFunc())

console.log(motorcycleobj?.turnOn())
console.log(motorcycleobj?.turnOnFunc())
