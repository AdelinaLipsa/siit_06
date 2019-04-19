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
/*
function nrprim2() {
    var x = document.getElementById("nrN4");
    var n = x.value;
    var p = parseInt(n);
    var sum = 1;
    if (p === 1) {
        rezultat9.innerHTML = "Numarul nu este prim.";
    }
    else if (p === 2) {
        rezultat9.innerHTML = "Numarul este prim.";
    }
    for (var i = 1; i <= p; i++) {
        for (var j = 2; j <= 1000;j++) {
            
            sum = sum + sum;
            break;
        }
        else {
            rezultat9.innerHTML = "error";
        }
        rezultat9.innerHTML = sum;
    }
}*/
//"@%#$$@%^%#"

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

function arrsearch1() {
    var x = document.getElementById("nrN5");
    var n = x.value;
    var p = parseInt(n);
    var y = document.getElementById("arr1");
    var z = y.value;
    var arr = z.split(", ");
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == p) {
            rezultat10.innerHTML = "L-am gasit!";
            break;
        }
        else {
            rezultat10.innerHTML = "Nu e :(";
        }
    }
}

function arrsearch2() {
    var x = document.getElementById("arr2");
    var n = x.value;
    var arr = n.split(", ");
    var p = 0;
    for (i = 0; i < arr.length; i++) {
        var int = parseInt(arr[i]);
        if (int > p) {
            p = int;
        }
        rezultat11.innerHTML = p;
    }
}

function arrsearch3() {
    var x = document.getElementById("arr3");
    var n = x.value;
    var arr = n.split(", ");
    var p = 0;
    var q = arr[0];
    for (i = 0; i < arr.length; i++) {
        var max = parseInt(arr[i]);
        if (max > p) {
            p = max;
        }}
    for (i = 0; i < arr.length; i++) {
        var min = parseInt(arr[i]);
        if(min < q)    
        q = min;
        }
        rezultat12.innerHTML = p + q;
}

function arrsearch4() {
    var x = document.getElementById("arr4");
    var n = x.value;
    var arr = n.split(", ");
    var sorted = arr.sort();
    for (i = 0; i < sorted.length-1; i++) {
        if (sorted[i+1] == sorted[i]) {
            rezultat13.innerHTML = "Are.";
            break;
        }
        else {
            rezultat13.innerHTML = "Nu are.";
        }
    }
}

function arrsearch5() {
    var x = document.getElementById("arr5");
    var n = x.value;
    var arr = n.split(", ");
    var p = 1;
    for (i = 0; i < arr.length; i++) {
        var int = parseInt(arr[i]);
        if (int >= 0) {
            p = p*int;
        }
        }
        rezultat14.innerHTML = p;
}

function strsearch1() {
    var x = document.getElementById("arr5");
    var n = x.value;
    var arr = n.split("");
    var rev = arr.reverse();
        if (arr != rev) {
            rezultat15.innerHTML = "E palindrom.";
        }
        else {
            rezultat15.innerHTML = "Nu e palindrom.";
        }
}

