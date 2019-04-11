//O functie care intoarce produsul numerelor pozitive intr-un array primit ca parametru

//a short way using .reduce
[1,2,3,4,5,6].reduce((a,b)=>a*b);

//function way 

var array = [1,2,3,4,5,6];

function multiply (array)  {
    var prod=1;
    for(var i=0; i<array.length; i++){
        prod*=array[i];
    }
    return prod;
}
console.log(multiply(array));