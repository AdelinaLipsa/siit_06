//1.O functie care primeste un sir de caractere si returneaza cifrele din sirul respectiv
var num = "abc3dba67a9";
var temp = num.match(/\d/g).join("");
console.log(temp);

//2.O functie care primeste un sir de caractere si returneaza doar literele din sirul respectiv
var txt = "abc3dba67a9";
var temp = txt.match(/[a-zA-Z]+/g).join("");
console.log(temp);

//3.O functie care primeste un sir de caractere si returneaza primele 5 litere(daca exista)
var str = "abc3dba67a9";
var firstFive = str.slice(0, 5);
console.log(firstFive);

//4.O functie care primeste o lista de siruri de caractere si returneaza sirurile concatenate
var str = ['14$', '54&%', '3432', '%%%', 'abc'];
var temp = str.concat('14$', '54&%', '3432', '%%%', 'abc');
console.log(temp);

//5.O functie care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile
var str = [
    ["21$$"],
    ["3ik4h32"],
    ["jk5kbjk45"],
    ["n4nj5b43"]
];

function returnNums(str) {
    var temp = str.toString('').match(/\d/g);
    return temp.toString('').split('').join('');
}
console.log(returnNums(str));

//6.O functie care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate
var str = [
    ["21$$"],
    ["3ik4h32"],
    ["jk5kbjk45"],
    ["n4nj5b43"]
];

function reverseStr(str) {
    return str.toString().split('').reverse('').join('');
}
console.log(reverseStr(str));

//7.Calculeaza factorialul unui numar
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1); //using recursive function
}
console.log(factorial(2));

//8.Calculeaza cel mai mare divizor comun al 2 numere
function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
console.log(gcd_two_numbers(9, 3));

//9.Calculeaza cel mai mic multiplu comun al 2 numere
function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
console.log(gcd_two_numbers(3, 15));

//10.Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32])
function divisors(integer) {
    var array = [];

    for (let i = 2; i < integer; i++) {
        Number.isInteger(integer / i) && array.push(i)

    }
    return array;
}
console.log(divisors(12));

//11.O functie care verifica daca un numar este palindrom (ex: 121, 1234321)
var arr = [1234321];

function palindrom(arr) {
    var removeChar = arr.toString('').replace(/[^A-Z0-9]/ig, "");
    var checkPalindrome = removeChar.split('').reverse('').join('');
    if (removeChar === checkPalindrome) {
        return (arr + " is a palindrome.")
    }
    return (arr + " is not a palindrome.")
}
console.log(palindrom(arr));

//12.O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru.
var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//using .filter function to eliminate all odd numbers
function evenOnly(n) {
    let result = n.filter(n => n % 2 == 0);
    return result;
}
console.log(evenOnly(n));

//13.O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru.

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odds = n.filter((a) => a % 2 !== 0).sort((a, b) => b - a);
let even = n.filter((a) => a % 2 == 0).sort((a, b) => a - b);
let sorted = even.concat(odds);
console.log(sorted);

//another method using .sort and ternary 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort((a, b) => (a % 2 - b % 2) || (a % 2 ? b - a : a - b))
console.log(arr); // arr.sort( compareA || compare B)


//14.O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var value = 10;

function binarySearch(numbers, value) {
    var firstIndex = 0,
        lastIndex = numbers.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (numbers[middleIndex] != value && firstIndex < lastIndex) {
        if (value < numbers[middleIndex]) {
            lastIndex = middleIndex - 1;
        } else if (value > numbers[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }
    return (numbers[middleIndex] != value) ? -1 : middleIndex;
}

console.log(binarySearch(numbers, value));

//15.O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa puteti afisa de cate ori s-a apelat functia recursiv. (hint: puteti folosi 2 functii sau variabila globala)

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var value = 10;
var myFuncCalls = 0;

function binarySearch(numbers, value) {
    myFuncCalls++;
    var firstIndex = 0,
        lastIndex = numbers.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (numbers[middleIndex] != value && firstIndex < lastIndex) {
        if (value < numbers[middleIndex]) {
            lastIndex = middleIndex - 1;
        } else if (value > numbers[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }
    return (numbers[middleIndex] != value) ? -1 : middleIndex;

}

console.log(binarySearch(numbers, value));
console.log("I have been called " + myFuncCalls + " times");