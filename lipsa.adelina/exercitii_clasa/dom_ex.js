var aRef = document.getElementById("a");
var bRef = document.getElementById("b");
var cRef = document.getElementById("c");
var buttonRef = document.getElementById("button");

function sum(a, b) {
    return a + b;
}
//dau click pe buton 
buttonRef.onclick = function () {
    //preiau valoarea din a
    var a = aRef.value;
    a = Number(a);
    //preiau valoare din b
    var b = bRef.value;
    b= Number(b);
    //fac suma
    var s = sum(a, b);
    //afisez in c
    cRef.value = s;
}