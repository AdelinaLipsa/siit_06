aRef =document.getElementById('a')
bRef =document.getElementById('b')
cRef =document.getElementById('c')
butonRef =document.getElementById('button')


butonRef.onclick = function(){
    var a = Number(aRef.value);
    var b = Number(bRef.value);
    cRef.value = a+b;
}
