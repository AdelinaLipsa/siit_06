
//O functie care verifica daca N este numar prim (restul impartirii la 1 si la N ==0)
var n= 23;
function nrPrim (n) {
    for(var i=2; i<n; i++) 
    if (n % i ===0) return false;
    return n>1;
}
console.log (nrPrim(n));

//formula matematica n(n+1)/2