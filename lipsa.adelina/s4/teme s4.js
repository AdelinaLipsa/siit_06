//1.O functie care primeste un sir de caractere si returneaza cifrele din sirul respectiv
var num = "abc3dba67a9";
var temp = num.match(/\d/g);
temp = temp.join("");
console.log(temp);

//2.O functie care primeste un sir de caractere si returneaza doar literele din sirul respectiv
var txt = "abc3dba67a9";
var temp = txt.match(/[a-zA-Z]+/g);
temp = temp.join("");
console.log(temp);

//3.O functie care primeste un sir de caractere si returneaza primele 5 litere(daca exista)
var str = "abc3dba67a9";
var firstFive = str.slice(0, 5);
console.log(firstFive);

//4.O functie care primeste o lista de siruri de caractere si returneaza sirurile concatenate
var str = ['14$', '54&%', '3432', '%%%', 'abc'];
var temp = str.join('14$', '54&%', '3432', '%%%', 'abc');
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
    return num * factorial(num - 1);
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
    var removeChar = arr.toString('').replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var checkPalindrome = removeChar.split('').reverse('').join('');
    if (removeChar === checkPalindrome) {
        return (arr + " is a palindrome.")
    }
    return (arr + " is not a palindrome.")
}
console.log(palindrom(arr));

//12.O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru.
