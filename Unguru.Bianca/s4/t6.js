var T6 = function (a) {
    var b = [];
    var i = Object.entries(a);
    console.log(i);
    for (x = 0; x < i.length; x++) {
        b.unshift(i[x]);
    }
    console.log(b);
} 