

'use strict';

var calc =  function () {

    var i;
    this.sum = function (a, b) {
        this.i = a + b ;
        return this;

    };

    this.mult = function(a) {
        return function (b) {
        this.i = a*b;
        console.log(this.i);
        }.bind(calc);
    };

    this.result = function () {

        console.log(this.i);
        return this;
    }
};


var ingCalc = function () {

    this.log = function (a,b ) {
        this.i = Math.log(a,b);
        return this;
    }

};

var log = [] ;
function logDecorator(func) {
    console.log(func.name);
    return function() {

            return func.apply(this, arguments);
    }
}



ingCalc.__proto__ = calc;

var Calc = new calc();
Calc.sum(2,4).result();
Calc.mult(2)(4);
logDecorator(Calc.sum(2,4));
console.log(log);


