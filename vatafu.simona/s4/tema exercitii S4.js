temajs.js
// 1. O functie care primeste un sir de caractere si returneaza cifrele din sirul respective
function myFunction() {
    var str = "123456789abcfd";
    var numere = /[1-4]/g;
    var result = str.match(numere);
    console.log(result);
}

myFunction();

// 2. O functie care primeste un sir de caractere si returneaza doar literele din sirul respectiv
function myFunction() {
    var str = "123456789abcfd";
    var litere = /[a-z]/g;
    var result = str.match(litere);
    console.log(result);
}

myFunction();

//3. O functie care primeste un sir de caractere si returneaza primele 5 litere(daca exista)
function myFunction() {
    var str = "abcdefg1234";
    console.log(str.substr(0, 5));
}
myFunction();

//4. O functie care primeste o lista de siruri de caractere si returneaza sirurile concatenate
function myFunction() {
    var str = ["ABC"];
    var concat = str += ["EDF"];
    console.log(concat);

}
myFunction();


//5. O functie care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile

var str = [
    ["a1"],
    ["b2"],
    ["c3"],
    ["d4"]
];

function returnNum(str) {
    var numere = str.toString('').match(/[0-9]/g);
    return numere.toString().split().join();
}
console.log(returnNum(str));



//6.O functie care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate
function reverseString(str) {
    let revstr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revstr = revstr + str[i];
    }
    return revstr;
}
console.log(reverseString("abc"));


//7.Calculeaza factorialul unui numar
function factorial(x) {

    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);

}
console.log(factorial(5));


//8.Calculeaza cel mai mare divizor comun al 2 numere
function divizorComun(x, y) {
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

console.log(divizorComun(12, 13));
console.log(divizorComun(9, 3));


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
console.log(lcm_two_numbers(3, 21));
console.log(lcm_two_numbers(10, 20));

//10.Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32])
function numFactors(num) {
    let factors = [];
    for (let i = 0; i <= num; i++) {
        if (num % i == 0 && !factors.includes(i)) {
            let div = num / i;
            factors.push(i);

            if (div != i) {
                factors.push(div);
            }
        }
    }
    return factors.sort((a, b) => a - b);
}
console.log(numFactors(120));


//11.O functie care verifica daca un numar este palindrom (ex: 121, 1234321)
function isPalindrome() {
    var num = 123211;
    var str = "" + num;
    for (var i = 0; i < str.length / 2; i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
            console.log("Not Palindrome");
            return;
        }
    }
    console.log("palindrome");


    //12.O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var evens = [];
    var odds = [];

    var evenNumbers = function (nums) {
        for (var i = 0; i < nums.length; i++) {

            if ((nums[i] % 2) != 1) {
                evens.push(nums[i]);
                console.log(evens);
            }
            else {
                odds.push(nums[i]);
                console.log(odds);
            }
        }

    };

    evenNumbers(nums);
    alert(evens);
    alert(odds);


    //13.O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca paramertru.
    let x = [1, 2, 3, 4, 5];
    let odds = x.filter((a) => a % 2 !== 0).sort((a, b) => b - a);
    let even = x.filter((a) => a % 2 == 0).sort((a, b) => a - b);
    let sorted = even.concat(odds);
    console.log(sorted)

    //14.  functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array.
    var arr = [1, 2, 3, 4, 5];
    var x = 3;

