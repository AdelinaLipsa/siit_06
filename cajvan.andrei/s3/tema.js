function comparanr1() {
    var x = document.getElementById("nra1");
    var y = document.getElementById("nrb1");
    var a = x.value;
    var b = y.value;
    if (a == b) {
        rezultat1.innerHTML = "true";
    }
    else {
        rezultat1.innerHTML = "false";
    }
}

function comparanr2() {
    var x = document.getElementById("nra2");
    var y = document.getElementById("nrb2");
    var a = x.value;
    var b = y.value;
    var c = 0;
    if (a < b) {
        c = -1;
    }
    else if (a > b) {
        c = 1;
    }
    rezultat2.innerHTML = c;
}

function comparanr3() {
    var x = document.getElementById("nra3");
    var y = document.getElementById("nrb3");
    var a = x.value;
    var b = y.value;
    if (a <= b) {
        rezultat3.innerHTML = b;
    }
    else {
        rezultat3.innerHTML = a;
    }
}

function comparanr4() {
    var x = document.getElementById("nra4");
    var y = document.getElementById("nrb4");
    var a = x.value;
    var b = y.value;
    if (a <= b) {
        rezultat4.innerHTML = a;
    }
    else {
        rezultat4.innerHTML = b;
    }
}

function sumanr1() {
    var x = document.getElementById("nrN1");
    var n = x.value;
    var s = 0;
    for (i = 0; i <= n; i++) {
        s = s + i;
    }
    rezultat5.innerHTML = s;
}

function nrprim1() {
    var x = document.getElementById("nrN2");
    var n = x.value;
    var p = parseInt(n);
    if (p === 1) {
        rezultat6.innerHTML = "Numarul nu este prim.";
    }
    else if (p === 2) {
        rezultat6.innerHTML = "Numarul este prim.";
    }
    for (var i = 2; i < p; i++) {
        if (p % i === 0) {
            rezultat6.innerHTML = "Numarul nu este prim.";
            break;
        }
        else {
            rezultat6.innerHTML = "Numarul este prim.";
        }
    }
}

function textinvert() {
    var x = document.getElementById("text1");
    var n = x.value;
    var p = "";
    for (var i = n.length - 1; i >= 0; i--) {
        p = p + n[i];
    }
    rezultat7.innerHTML = p;
}

function produs1() {
    var x = document.getElementById("nrN3");
    var n = x.value;
    var p = 0;
    for (i = 0; i <= n; i++) {
        if (i % 2 != 0) {
            p = p * i;
        }
    }
    rezultat8.innerHTML = p;
}

