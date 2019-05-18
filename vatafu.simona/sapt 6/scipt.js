var aRef=document.getElementById("a");
var bRef=document.getElementById("b");
var cRef=document.getElementById("c");
var butonRef=document.getElementById("buton")

function sum (a,b) {
    return a+b;
}

butonRef.onclick=function(){
   //dau click pe buton
//preiau valoarea din a
var a=aRef.value;
a=Number(a);
//preiau valoarea din b
var b=bRef.value;
b=Number(b);
//fac suma
var s=sum(a,b);
//afisez in c 
cRef.value=s;
}
