var a = 3;
var b = 12;
var N = 8;

console.log("valoare initiala a=" + a);
console.log("valoare initiala b=" + b);
console.log("valoare initiala N=" + N);

console.log("");

var temaI = function () {
    if (a == b) {
        console.log("tema-punctul-1:" + " " + "true");
    } else {
        console.log("tema-punctul-1:" + " " + "false");
    }

}

temaI();


var temaII = function () {
    if (a == b) {
        console.log("tema-punctul-2:" + " " + "0");
    } else if (a < b) {
        console.log("tema-punctul-2:" + " " + "-1");
    }
    else {
        console.log("tema-punctul-2:" + " " + "1");
    }
}

temaII();


var temaIII = function () {
    if (a == b) {
        console.log("tema-punctul-3:" + " " + a);
    } else if (a < b) {
        console.log("tema-punctul-3:" + " " + b);
    }
    else {
        console.log("tema-punctul-3:" + " " + a);
    }
}

temaIII();

var temaIV = function () {
    if (a == b) {
        console.log("tema-punctul-4:" + " " + a);
    } else if (a < b) {
        console.log("tema-punctul-4:" + " " + a);
    }
    else {
        console.log("tema-punctul-4:" + " " + b);
    }
}

temaIV();

var temaV = function () {
    var temp = 0;
    for (var i = 1; i <= N; i++) {
        temp = temp + i;
    }
    console.log("tema-punctul-5:" + " " + temp);

}

temaV();

var temaVI = function () {
    temp = 0;
    for (i = 2; i <= N; i++) {
        if (N % i == 0 && N != i) {
            temp = true;
        }
    }
    if (temp == true) {
        console.log("tema-punctul-6:" + " " + N + " " + "nu este numar prim");

    } else {
        console.log("tema-punctul-6:" + " " + N + " " + "este numar prim");
    }
}
temaVI();


var temaVII = function () {
    temp = 0;
    for (i = 2; i <= N; i++) {
        /*   console.log("variabila i =" + i);  */

        for (j = 2; j <= i; j++) {

            /*    console.log("variabila j =" + j); */

            if (i % j == 0 && j != i) {
                gage = false;
                break;

            } else {
                gage = true;
            }

            /*    console.log("variabila gage =" + gage); */
        }
        if (gage == true) {
            temp = temp + i;
            /*      console.log(temp + " temp"); */

        }

    }
    console.log("tema-punctul-7:" + " " + "suma este" + " " + temp);
}
temaVII();