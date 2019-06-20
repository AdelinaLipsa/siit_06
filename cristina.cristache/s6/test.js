/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////Rezolvati exercitiile urmatoare si salvati-le aici si la link-ul urmator: http://bit.do/buc-g6-test1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Scrieti o functie JS care returneaza suma a 2 numere primite ca parametru.
// Exemplu: pentru 2 si 4 va returna 6, iar pentru 22 si 173 va returna 195. 
function sumTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

// 2. Scrieti o functie JS care returneaza suma a N numere primite ca parametru. Hint: folositi un array. 
// Exemplu: pentru [16, 9, 3, 7, 59, 2, 78, 240, 18] va returna 432. 
function sum(arrayNr) {
    let s = 0;
    for (i = 0; i < arrayNr.length; i++) {
        s += arrayNr[i];
    }
    return s;
}

// 3. Scrieti o functie JS care primeste un sir de caractere si returneaza doar consoanele din sirul respectiv.
// Exemplu: pentru \"javascript is awesome\" va returna \"jvscrpt s wsm\"
function removeVowels(arrayStr) {
    newStr = arrayStr.replace(/a|e|i|o|u/gi, "");
    return newStr;
}

// 4. Scrieti o functie JS care returneaza valoarea maxima dintr-un sir de numere.
// Exemplu: pentru [33, 79, 2, 342, 87, 11, 99] va returna 342.
function getMaxNumber(arrayNr) {

    let greater = 0;
    for (i = 0; i < arrayNr.length; i++) {
        let no = parseInt(arrayNr[i]);
        if (no > greater) {
            greater = no;
        }
    }
    return greater;
}



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
    let factorial = 1;
    for (i = nr; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}

// 6. Scrieti o functie JS care returneaza primele 3 numere pare dintr-un sir de numere.
// Exemplu: pentru [23, 8, 13, 14, 9, 88, 19, 20, 46, 10] va returna [8, 14, 88]
function displayFirst3EvenNumbers(arrayNr) {
    let evens = [];
    for (i = 0; evens.length < 3; i++) {
        if (arrayNr[i] % 2 == 0) {
            evens.push(arrayNr[i])
        }
    }
    return evens;
}

// 7. Scrieti o functie JS care verifica daca un string este palindrom, adica inversul cuvantului este egal cu originalul.
// Functia returneaza true daca este palindrom si false daca nu este palindrom.
// Exemplu: pentru capac va returna true; pentru copac va returna false
function palindrom(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 8. Scrieti o functie JS care sa returneze numerele prime dintr-un sir de numere.
// Exemplu: pentru [13, 4, 37, 45, 55, 17, 23] va returna [13, 37, 17, 23] 

function displayPrimeNumbers(arrayNr) {
    let primes = [];

    function isPrime(num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return true;
    }
    for (i = 0; i < arrayNr.length; i++) {
        if (isPrime(arrayNr[i])) primes.push(arrayNr[i]);
    }
    return primes;
}
// 9. Scrieti o functie JS care sorteaza crescator elementele pe randurile unei matrice primite ca parametru si returneaza matricea sortata. Hint: bubble sort.
// Exemplu: pentru [[34, 12, 44], [87, 23, 56], [50, 1, 0]] va returna [[12, 34, 44], [23, 56, 87], [0, 1, 50]]
function sortAsc(matrix) {
    for(i=0;i<matrix.length;i++){
        for(j=0;j<matrix[i].length-1;j++){
           for(x=j+1;x<matrix[i].length;x++){
            let aux;
            if(matrix[i][j]>matrix[i][x]){
                aux = matrix[i][j];
                matrix[i][j] = matrix[i][x];
                matrix[i][x] = aux;
            }
           }
        }
    }
    return matrix;
}

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
    if (nr == 0) return 0;
    else if (nr == 1) return 1;
    else return fibonacci(nr - 1) + fibonacci(nr - 2);

}
