var a = 3;
var b = 12;
var N = 7;
str = "abc"
var matrice = [4, 3, 2];
var elMatrice = 11;

console.log("valoare initiala a=" + a);
console.log("valoare initiala b=" + b);
console.log("valoare initiala N=" + N);
console.log("valoare initiala matrice=" + matrice);
console.log("valoare initiala elMatrice=" + elMatrice);

console.log("valoare initiala a str=" + str);
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


var temaVIII = function () {
    var temp;
    var invers = "";
    for (var i = str.length - 1; i >= 0; i--) {
        temp = str.substr(i, 1);
        var invers = invers + temp;
    }
    console.log("tema-punctul-8: " + invers);
}

temaVIII();

var temaIX = function () {
    temp = 0;
    for (var i = 0; i <= N; i++) {
        if (i % 2 != 0) {
            temp = temp + i;
        }
    }
    console.log("tema-punctul-9: " + "suma primelor " + N + " numere impare este " + temp);
}
temaIX();

var temaX = function () {
    for (var i = 0; i <= matrice.length - 1; i++) {
        if (matrice[i] == elMatrice) {
            counter = true;
            break;
        } else {
            counter = false;
        }
    }
    if (counter == true) {
        console.log("tema-punctul-10: elementul este in array");
    } else {
        console.log("tema-punctul-10: elementul NU este in array");

    }
}
temaX();


var temaXI = function () {
    max = 0;
    for (var i = 0; i <= matrice.length - 1; i++) {
        if (matrice[i] > max) {
            max = matrice[i];
        }
    }
    console.log("tema-punctul-11: maximul este " + max);
}
temaXI();


var temaXII = function () {
    var max = 0;
    var min = matrice[0] + 1;
    var suma = 0;
    for (var i = 0; i <= matrice.length - 1; i++) {
        if (matrice[i] > max) {
            max = matrice[i];
        }
    }
    for (var j = 0; j <= matrice.length - 1; j++) {
        if (matrice[j] < min) {
            min = matrice[j];
            console.log("pe aici nu se trece");
        }
    }
    suma = max + min;
    console.log("tema-punctul-12: suma este " + suma);
}
temaXII();


var temaXIII = function () {

    for (var i = 0; i <= matrice.length - 1; i++) {
        for (var j = 0; j <= matrice.length - 1; j++) {
            /*       console.log("matrice i " + matrice[i]);
                   console.log("matrice j " + matrice[j]);  */
            if (matrice[i] == matrice[j] && i != j) {
                counter = true;
                console.log(counter);

                break;
            }

        }
    }
    if (counter == true) {
        console.log("tema-punctul-13: existe duplicate in array");
    } else {
        console.log("tema-punctul-13: nu exista duplicate in array");
    }
}
temaXIII();



var temaXIV = function () {
    var suma = 0;
    for (var i = 0; i <= matrice.length - 1; i++) {
        suma = suma + matrice[i];
    }

    console.log("tema-punctul-14: suma este " + suma);

}
temaXIV();



var temaXV = function () {
    var suma = 0;
    for (var i = 0; i <= matrice.length - 1; i++) {
        suma = suma + matrice[i];
    }

    console.log("tema-punctul-15: suma este " + suma);

}
temaXV();
