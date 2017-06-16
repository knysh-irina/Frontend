'use strict';
function Machine() {
    this._enable = false;
    this.enableEngine = function () {
        this._enable = true;
    };
    this.disableEngine = function () {
        this._enable = false;
    }
}

function Car(power) {
    var CONSUMPTION = 10;
    var FUEL_TANK = 40;
    var self = this;
    var fuelAmount = 0;
    var oldEnableEngine;
    var movementStatus = false;

    Machine.apply(self, arguments);
    this.setFuelAmount = function (amount) {
        var totalAmount = 0;
        if (amount <= 0) {
            throw new Error('Введите положительное число!');
        }
        if (amount > FUEL_TANK) {
            throw new Error('Нельзя залить более 40 л.')
        }

        totalAmount = fuelAmount + amount;
        if (totalAmount >= FUEL_TANK) {
            throw new Error('Мы не можем заправить '+ amount +' л. топлива.')
        }
        fuelAmount += amount;
    };
    this.getFuelAmount = function () {
        return fuelAmount;
    };

    function getTimeOfRide() {
        return (fuelAmount / CONSUMPTION) * 1000;
    }
    function makeRide() {
        console.log('Мы приехали через ' + timeOfRide / 1000 + ' с.');
    }

    function fuelConsumption() {
        fuelAmount -= CONSUMPTION;
    }

    var timeOfRide;

    var carTimeout;
    var fuelTimeout;
    this.ride = function () {
        timeOfRide = getTimeOfRide();
        this.movementStatus = true;
        carTimeout =  setTimeout(makeRide, timeOfRide);
        var time = timeOfRide;
        while (time > 0){
            time -= 1000;
          fuelTimeout =    setTimeout(fuelConsumption, 1000);

        }

    };


    this.isRunning = function () {
         if (this.movementStatus){
             console.log("Едем");
         } else {console.log("стоим...");}
    };
    this.stopCar = function () {
        clearTimeout(carTimeout);
        clearTimeout(fuelTimeout);
        this.movementStatus = false;
    };

    oldEnableEngine = this.enableEngine;
    this.enableEngine = function () {
        console.log('Двигатель завели');
    };
    this.info = function () {
        console.log('Авто готово: мощность ' + power + ' л.с., в баке: ' + fuelAmount + ' л.');
    };
    this.stopInfo = function(){
        var timeInRoadroad = (timeOfRide - getTimeOfRide())/1000;
        console.log('Мы проехали ' + timeInRoadroad + ' с., в баке: ' + fuelAmount + ' л. Можем проехать: '+ getTimeOfRide()/1000+ "c.");
    };

}

var car = new Car(100);
car.setFuelAmount(30);
car.ride();
car.stopCar();
setTimeout(car.stopInfo, 4000);


