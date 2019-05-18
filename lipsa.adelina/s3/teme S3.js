// 1.O functie care compara 2 valori si returneaza true daca sunt egale si false daca nu sunt egale

function equal(a,b) {
    if(a === b) {
        return true;
    }else {
        return false;
    }
}
console.log('This is ' + equal(5,4));

//2.O functie care compara 2 valori si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea
var a= 1;
var b= 2;
var c= 3;

function f (a,b,c) {
    if( a < b) {
        return ("The first number is smaller than the second number, so " + -1);
    } else if (a==b) {
        return ("They are equal, so " + 0);
    }else if(a > b){
        return 1 ("The first number is bigger than the second one, so "+ 0);
    }
}
console.log(f(a,b,c));

// 3.O functie care primeste 2 valori si returneaza maximul dintre cele 2
var a = 20
var b = 4

function max(a, b) {
  return Math.max(a,b);
}
console.log(max(a, b));

//4. O functie care primeste 2 valori si returneaza minimul dintre cele 2
var a = 100;
var b = 102

function awesome (a,b) {
    return Math.min(a,b);
}
console.log (awesome(a,b));

//5.O functie care intoarce suma primelor N numere naturale pozitive

var res = (n * (n+1)) / 2;

function input(n) {
    var sum=0;
    for (var i=1; i<=n; i++){
        sum+= i; 
    }
    return sum;
}
console.log(input(n));

//6.O functie care verifica daca N este numar prim (restul impartirii la 1 si la N ==0)
var n= 23;
function nrPrim (n) {
    for(var i=2; i<n; i++) 
    if (n % i ===0) return false;
    return n>1;
}
console.log (nrPrim(n));


//7.O functie care intoarce suma primelor N numere prime
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
console.log(allPrimes(10));

// 8.O functie care primeste un parametru de tip string si intoarce inversul acestuia (abc => cba)
var str = "abc";
function reverseString(str) {
    return str.split('').reverse('').join('');
}
console.log(reverseString(str));

// 9.O functie care intoarce produsul primelor N numere impare pozitive
var number= 15;
function oddNum(number) {
    var a=1;
    for (var i=1; i<=number; i+=2) {// i+=2; pentru a folosi doar nr. impare
        a*=i;
    }
    return a;
}
console.log(oddNum(number));

//10.O functie care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array
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

//11.O functie care intoarce maximul dintr-un array primit ca parametru
var arr= [100, 55, 34, 102, -1, -5, 10, 233]
function largestNum(arr) {
    return Math.max.apply(Math,arr); // sooo,if I don't use the .apply to call in another function the output will be NaN
}
console.log(largestNum(arr));

//12.O functie care intoarce suma dintre max si min, dintr-un array primit ca parametru

var array = [100, 55, 34, 102, -1, -5, 10, 233]

function sumMinMax(array) {
    function maxNum(array) {
        return Math.max.apply(Math, array); // sooo,if I don't use the .apply to call in another function the output will be NaN
    }

    function minNum(array) {
        return Math.min.apply(Math, array);
    }
    sum = maxNum(array) + minNum(array);
    return sum;
}
console.log(sumMinMax(array));


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


//14.O functie care intoarce produsul numerelor pozitive intr-un array primit ca parametru

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

//15.O functie care verifica daca un string primit ca parametru este palindrom (inversul == originalul, ex: abcba == abcba, abca != acba
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;   //RegExp to remove unwanted characters 
    str = str.toLowerCase().replace(re, '');//Lowercase the string
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
palindrome("A man, a plan, a canal. Panama");