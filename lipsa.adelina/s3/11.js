// O functie care intoarce maximul dintr-un array primit ca parametru
var arr= [100, 55, 34, 102, -1, -5, 10, 233]
function largestNum(arr) {
    return Math.max.apply(Math,arr); // sooo,if I don't use the .apply to call in another function the output will be NaN
}
console.log(largestNum(arr));

// method without Math.max
var array = [100, 55, 34, 102, -1, -5, 10, 233]
function findmax(array){

    var max = 0;
    var a =  array.length;
    for(var i=0; i<a; i++) {
    if (array[i]>max) {
    max=array[i];
    }
}
return max;
}
console.log(findmax(array));