// O functie care intoarce produsul primelor N numere impare pozitive
var number= 15;
function oddNum(number) {
    var a=1;
    for (var i=1; i<=number; i+=2) {// i+=2; pentru a folosi doar nr. impare
        a*=i;
    }
    return a;
}
console.log(oddNum(number));