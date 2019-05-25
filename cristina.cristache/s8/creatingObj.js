/*
Creating objects

1. Object literals
2. Object.create() with descriptors
3. function + new
4. factory function with closures
5. JS Class

*/

let log = console.log;


// 1. Object literals


let user = {
    gender: "female",
    waist: 1.80,
    weight: 78,
    bmi: function () {
        return (-76 + (4.15 * waist) -( 0.082 * weight))/weight;
    }
}


//2. Obect.create()
 
let proto = {
    frequency: function(){
        ((radio.range.low + radio.range.high)/2);
    }
}
 
let radio = Object.create(proto, {
    range: {
        low: 88,
        high:155
    },

    // Values of the object proprieties must be {}
    message: {
        writable: false,
        content: "Trees are awesome!",
    }
});

