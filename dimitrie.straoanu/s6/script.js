var aRef = document.getElementById("a");
var bRef = document.getElementById("b");
var cRef = document.getElementById("c");
var buttonRef = document.getElementById("button");

function sum(a, b) {
    return a + b;
}

buttonRef.onclick = function(){
    var a = aRef.value;
    a = Number(a);
    var b = bRef.value;
    b = Number(b);
    var s = sum(a,b);
    cRef.value = s;
}