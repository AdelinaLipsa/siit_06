//13. O functie care verifica daca exista duplicate intr-un array primit ca parametru
var array = [1000, 1010, 900, 56, 4342, 4543, 6565, 565, 32, 463, 77];

function checkDuplicate(array) {
    for (var i=0; i<=array.length; i++) {
        for(var j=i; j<=array.length; j++) {
            if (i!=j && array[i] == array[j]) {
                return true;
            }
        }
    }
    return false;
}
console.log (checkDuplicate (array));
