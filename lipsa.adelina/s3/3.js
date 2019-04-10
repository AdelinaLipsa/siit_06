// O functie care primeste 2 valori si returneaza maximul dintre cele 2
var a = Math.max(5, 10, 7, 8);
var b = Math.max(2, 4, 9, 11);

function math(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(math(a, b));