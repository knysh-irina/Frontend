/**
 * Created by Users on 23.07.2017.
 */

let range = {
    from: 0,
    step: 5,
    to: 10
};
range[Symbol.iterator] = function() {
    let current = this.from - this.step;
    let last = this.to - this.step;
    let step = this.step;
    return {
        next() {
            if (current <= last) {
                current+= step;
                return {
                    done: false,
                    value: current
                };

            } else {
                return {
                    done: true
                };
            }
        }

    }
};

for (let num of range) {
    console.log(num); // 0, 5 , 10
}