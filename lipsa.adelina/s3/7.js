// O functie care intoarce suma primelor N numere prime
function allPrimes (num) {
    var total= 0;

    function nrPrim (n) {
        for(var i=2; i<n; i++) 
        if (n % i ===0) return false;
        return n>1;
    }

    for (var j=2; j<=num; j++) {
        if(nrPrim(j)) {
            total+=j;
        }
    }
    return total;
}
console.log(allPrimes(10));//rezultatul sumei primelor numere prime trebuie sa fie 17