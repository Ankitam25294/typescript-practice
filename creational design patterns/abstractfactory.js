// we have class or concrete factory for each vehicle type
var Car = /** @class */ (function () {
    function Car() {
        var _this = this;
        this.turnOn = function () {
            console.log('Car arrow', _this);
        };
        this.name = "Car";
        this.wheels = 4;
        console.log('Car constructor', this);
    }
    Car.prototype.turnOnFunc = function () {
        console.log('Car normal', this);
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
        this.turnOn = function () {
            console.log('Truck arrow');
        };
        this.name = "Truck";
        this.wheels = 8;
    }
    Truck.prototype.turnOnFunc = function () {
        console.log('Car normal');
    };
    return Truck;
}());
var MotorCycle = /** @class */ (function () {
    function MotorCycle() {
        this.turnOn = function () {
            console.log('MotorCycle arrow');
        };
        this.name = "MotorCycle";
        this.wheels = 2;
    }
    MotorCycle.prototype.turnOnFunc = function () {
        console.log('MotorCycle normal');
    };
    return MotorCycle;
}());
// abstract factory that works as a single point of interaction for our clients
// Given the type parameter it receives, in will call the corresponding concreate factory
var vehicleFactory = {
    createVehicle: function (type) {
        switch (type) {
            case 'car':
                return new Car();
            case 'truck':
                return new Truck();
            case 'motorcycle':
                return new MotorCycle();
            default:
                return null;
        }
    }
};
var car = vehicleFactory.createVehicle('car');
var truck = vehicleFactory.createVehicle('truck');
var motorcycle = vehicleFactory.createVehicle('motorcycle');
console.log(car === null || car === void 0 ? void 0 : car.turnOn());
console.log(car === null || car === void 0 ? void 0 : car.turnOnFunc());
console.log(truck === null || truck === void 0 ? void 0 : truck.turnOn());
console.log(truck === null || truck === void 0 ? void 0 : truck.turnOnFunc());
console.log(motorcycle === null || motorcycle === void 0 ? void 0 : motorcycle.turnOn());
console.log(car === null || car === void 0 ? void 0 : car.turnOnFunc());
