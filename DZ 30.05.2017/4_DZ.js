

'use strict';

var calc = {
    i: 0,
    sum: function (a, b) {
        this.i = a + b ;
        return this;
    },
    mult: function (a, b) {

        function m (a,b) {
           var c = a*b;
           return c;
        }
        this.i = m(a,b);
        return this;
    },
    result: function () {
        console.log(this.i);
        return this;
    }
};


var ingCalc = {
    log: function (a,b ) {
        this.i = Math.log(a,b);
        return this;
    }

};

ingCalc.__proto__ = calc;
ingCalc.sum(2,4).result();
ingCalc.log(2,4).result();
ingCalc.mult(2,4).result();