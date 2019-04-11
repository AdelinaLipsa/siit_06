//O functie care intoarce suma dintre max si min, dintr-un array primit ca parametru

//Varianta usoara
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

//Varianta complicata
var array = [100, 55, 34, 102, -1, -5, 10, 233];

function sum(array) {
    var sum = 0;

    function findMax(array) {
        var max = 0;
        var a = array.length;
        for (var i = 0; i < a; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }

    function findMin(array) {
        var min = 0;
        var a = array.length;
        for (var i = 0; i < a; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
    sum = findMax(array) + findMin(array);
    return sum;
}
console.log(sum(array));