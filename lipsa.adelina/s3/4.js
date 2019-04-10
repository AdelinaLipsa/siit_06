// O functie care primeste 2 valori si returneaza minimul dintre cele 2
var a = Math.min (-1, 2, 5, -3);
var b = Math.min (3, 0, -5, 6);

function awesome (a,b) {
    if (a<b) {
        return a;
    }else {
        return b;
    }
}
console.log (awesome(a,b));