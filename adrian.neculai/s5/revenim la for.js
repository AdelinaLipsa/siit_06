var a = [1, 3, 4, 5];
var b = [2, 6, 7];

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
    console.log(s);
    return s;
}

merge(a, b);