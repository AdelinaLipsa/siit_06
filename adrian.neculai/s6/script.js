var aRef = document.getElementById("a");
var bRef = document.getElementById("b");
var cRef = document.getElementById("c");

var butonRef = document.getElementById("buton");

function sum(a, b) {


    return a + b;

}

butonRef.onclick = function () {


    var a = aRef.value;

    a = Number(a);
    var b = bRef.value;

    var s = sum(+a, +b);

    cRef.value = s;
}