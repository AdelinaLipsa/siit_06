//O functie care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array
var arr = [1,2,3,4,5];
var x = 5;
function contain(arr,x) {
    for (var i=0; i<arr.length; i++ ) {
        if(arr[i] ===x) {
            return true;
        }
    }
    return false;
}
console.log(contain(arr,x));

//short way of doing it 
[1,2,3,4,5].includes(5);