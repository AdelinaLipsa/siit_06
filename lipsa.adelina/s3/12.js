//O functie care intoarce suma dintre max si min, dintr-un array primit ca parametru

//Varianta usoara #1
var array = [100, 55, 34, 102, -1, -5, 10, 233]

function sumMinMax(array) {
    function maxNum(array) {
        return Math.max.apply(Math, array); // sooo,if I don't use the .apply to call in another function the output will be NaN
    }

    function minNum(array) {
        return Math.min.apply(Math, array);
    }
    sum = maxNum(array) + minNum(array);
    return sum;
}
console.log(sumMinMax(array));

// #2 care produce cele mai mici erori cu valori mai mari recomandat de MDN
function arrayMax(array) {
    return array.reduce(function (a, b) {
        return Math.max(a, b);
    });

    function arrayMin(array) {
        return array.reduce(function (a, b) {
            return Math.min(a, b);
        });
    }
}