// 1. Scrieti o functie JS care returneaza suma a 2 numere primite ca parametru.
// Exemplu: pentru 2 si 4 va returna 6, iar pentru 22 si 173 va returna 195. 
function sumTwoNumbers(firstNumber, secondNumber) {
    var c = 0;
    var c = firstNumber + secondNumber

    return c;
}
sumTwoNumbers(22, 173);
console.log(sumTwoNumbers(22, 173));

// 2. Scrieti o functie JS care returneaza suma a N numere primite ca parametru. Hint: folositi un array. 
// Exemplu: pentru [16, 9, 3, 7, 59, 2, 78, 240, 18] va returna 432. 

var arrayNr = [16, 9, 3, 7, 59, 2, 78, 240, 18];
function sum(arrayNr) {

    s = 0;
    for (var i = 0; i < arrayNr.length; i++) {

        s = s + arrayNr[i]

    }

    return s;
}

sum(arrayNr);

console.log(sum(arrayNr));


// 3. Scrieti o functie JS care primeste un sir de caractere si returneaza doar consoanele din sirul respectiv.
// Exemplu: pentru \"javascript is awesome\" va returna \"jvscrpt s wsm\"
var proba = "javascript is awesome";


function removeVowels(arrayStr) {

    var strFinal = [];

    for (var i = 0; i < arrayStr.length; i++) {

        if (arrayStr[i] != "a" && arrayStr[i] != "i" && arrayStr[i] != "e" && arrayStr[i] != "u" && arrayStr[i] != "o") {

            strFinal.push(arrayStr[i]);
        }

    }

    return strFinal.join("");
}

removeVowels(proba);

console.log(removeVowels(proba));




// 4. Scrieti o functie JS care returneaza valoarea maxima dintr-un sir de numere.
// Exemplu: pentru [33, 79, 2, 342, 87, 11, 99] va returna 342.


function getMaxNumber(arrayNr) {

    var max = 0;
    for (var i = 0; i < arrayNr.length; i++) {

        if (max < arrayNr[i]) {

            max = arrayNr[i];
        }

    }
    return max;

}


getMaxNumber([33, 79, 2, 342, 87, 11, 99]);

console.log(getMaxNumber([33, 79, 2, 342, 87, 11, 99]));



// 5. Scrieti o functie JS care returneaza factorialul unui numar.
// Exemplu:
// n\tn!
// 0\t1
// 1\t1
// 2\t1*2
// 3\t1*2*3
// 4\t1*2*3*4
// 5\t1*2*3*4*5
// 6\t1*2*3*4*5*6
// 7\t1*2*3*4*5*6*7
// 8\t1*2*3*4*5*6*7*8


function factorial(nr) {

    var fact = 1;

    for (var i = 0; i < nr; i++) {

        fact = fact * (i + 1);

    }

    return fact;

}

factorial(3);

console.log(factorial(3));



// 6. Scrieti o functie JS care returneaza primele 3 numere pare dintr-un sir de numere.
// Exemplu: pentru [23, 8, 13, 14, 9, 88, 19, 20, 46, 10] va returna [8, 14, 88]

function displayFirst3EvenNumbers(arrayNr) {

    var pare = [];

    for (var i = 0; i < arrayNr.length; i++) {

        if (arrayNr[i] % 2 == 0 && pare.length < 3) {

            pare.push(arrayNr[i]);

        }

    }

    return pare;

}

displayFirst3EvenNumbers([23, 8, 13, 14, 9, 88, 19, 20, 46, 10]);


console.log(displayFirst3EvenNumbers([23, 8, 13, 14, 9, 88, 19, 20, 46, 10]));



// 7. Scrieti o functie JS care verifica daca un string este palindrom, adica inversul cuvantului este egal cu originalul.
// Functia returneaza true daca este palindrom si false daca nu este palindrom.
// Exemplu: pentru capac va returna true; pentru copac va returna false

function palindrom(str) {

    var cond = true;

    for (var i = 0; i < str.length; i++) {
        /*      console.log(str.substr(i, 1));
              console.log(str.substr(str.length - i - 1, 1));  */
        if (str.substr(i, 1) != str.substr(str.length - i - 1, 1)) {
            cond = false;
        }
    }

    return cond;
}


palindrom("acopcana");

console.log(palindrom("copac"));



// 8. Scrieti o functie JS care sa returneze numerele prime dintr-un sir de numere.
// Exemplu: pentru [13, 4, 37, 45, 55, 17, 23] va returna [13, 37, 17, 23] 
function displayPrimeNumbers(arrayNr) {

    var prime = [];

    for (var i = 0; i < arrayNr.length; i++) {

        if (arrayNr[i] % 2 != 0 && arrayNr[i] % 3 && arrayNr[i] % 5) {

            prime.push(arrayNr[i]);


        }

    }

    return prime;

}

displayPrimeNumbers([13, 4, 37, 45, 55, 17, 23]);


console.log(displayPrimeNumbers([13, 4, 37, 45, 55, 17, 23]));



// 9. Scrieti o functie JS care sorteaza crescator elementele pe randurile unei matrice primite ca parametru si returneaza matricea sortata. Hint: bubble sort.
// Exemplu: pentru [[34, 12, 44], [87, 23, 56], [50, 1, 0]] va returna [[12, 34, 44], [23, 56, 87], [0, 1, 50]]
function sortAsc(matrix) {

    function sort(a) {
        for (i = 0; i < a.length - 1; i++) {
            for (j = i + 1; j < a.length; j++) {
                if (a[i] > a[j]) {
                    var aux = a[i];
                    a[i] = a[j];
                    a[j] = aux;


                }
            }
        }
        return a;
    }

    for (var l = 0; l < matrix.length; l++) {
        matrix[l] = sort(matrix[l]);
    }
    return matrix;
}
sortAsc([[34, 12, 44], [87, 23, 56], [50, 1, 0]]);

console.log(sortAsc([[34, 12, 44], [87, 23, 56], [50, 1, 0]]));


// 10. Scrieti o functie JS care returneaza numarul din sirul lui Fibonacci pentru o valoare data nr.
// Exemplu:
// F0=0
// F1=1
// Fn = Fn-1 + Fn-2
// Pentru valoarea 5 va returna 5.
// F0=0
// F1=1
// F2 = F1 + F0 = 1 + 0 = 1
// F3 = F2 + F1 = 1 + 1 = 2
// F4 = F3 + F2 = 2 + 1 = 3 
// F5 = F4 + F3 = 3 + 2 = 5.

function fibonacci(nr) {

    if (nr <= 1) {

        return nr;
    }
    return fibonacci(nr - 1) + fibonacci(nr - 2);

}


fibonacci(1);
console.log(fibonacci(1));