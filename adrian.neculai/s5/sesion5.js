var m = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
];
console.log(m);
/*
for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m[i].length; j++) {

        console.log(m[i][j]);
    }



}


for (var i = 0; i < m.length; i++) {

}

*/
/*
for (var p = 0; p < Math.floor(n / 2); p++) {

    for (i = p; i < n - p; i++) {

        console.log(m[p][i]);

    }
}
*/
var n = m.length;

for (var p = 0; p < Math.floor(n / 2); p++) {

    for (var i = p; i < n - p; i++) {

        console.log(m[p][i]);

    }

    for (var j = p + 1; j < n - p; j++) {

        console.log(m[j][n - p - 1]);
    }

    for (var k = (n - 1) - (p + 1); k > p - 1; k--) {

        console.log(m[n - 1 - p][k]);

    }
    // console.log("variabila p este = " + p);
    for (var l = (n - 1) - (p + 1); l > Sp; l--) {

        console.log(m[l][p]);
    }
}

