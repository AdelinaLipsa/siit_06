var t13 = function (arr) {
    var min = [];
    var max = [];
    for (var i = 1; i <= arr.length; i++) {
        if (i % 2 == 0) {
            min.push(i);
        }
    }
    for (var x = 1; x <= arr.length; x++) {
        if (x % 2 == 1) {
            max.unshift(x);
        }
    }
    console.log(min, max)
}