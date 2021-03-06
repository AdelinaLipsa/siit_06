var a = [3, 1, 2, 5, 4];

function merge(a, b) {
    var i = 0;
    var j = 0;
    var s = [];
    while (i < a.length && j < b.length) {

        if (a[i] < b[j]) {
            s.push(a[i]);
            i++;
        } else {
            s.push(b[j]);
            j++;
        }

    }
    while (i < a.length) {
        s.push(a[i]);
        i++;
    }
    while (j < b.length) {
        s.push(b[j]);
        j++;
    }

    return s;
}


function sort(a) {

    var sorted = [];
    if (a.length > 0) {

        if (a.length == 1) {

            sorted = a;
        } else {
            var midIndex = Math.floor(a.length / 2);
            var left = a.slice(0, midIndex);
            var right = a.slice(midIndex, a.length);

            var sortedLeft = sort(left);
            var sortedRight = sort(right);

            sorted = merge(sortedLeft, sortedRight);
        }
    }
    return sorted;
}

var s = sort(a);
console.log(s);
