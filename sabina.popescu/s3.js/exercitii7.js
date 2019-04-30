function NrPrim(num) {
    for(var i=2; i<num; i++) {
        if(num % i == 0) {
            
        }
    }
    return true;
}
function sumPrimes(num) {
    var suma = 0;
    for (var i=2; i<=num; i++) {
        if (NrPrim(i)) {
            suma += i;
        }
    }
    return suma;
}
sumPrimes(20);