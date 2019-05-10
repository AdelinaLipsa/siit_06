var aRef = document.getElementById("a");
var bRef = document.getElementById("b");
var cRef = document.getElementById("c");
var buttonRef =document.getElementById("button");

function sum(a,b){
    return a + b;
}

buttonRef.onclick = function(){
    var a = aRef.value;
    // 2nd way
    a = Number(a);
    var b = bRef.value;
    // 2nd way
    b = Number(b);
    var s = sum(a,b);
    // 1 way to convert to nr
    // var s = sum(+a,+b);
    cRef.value = s;
}



// temma comentarii si shopping list