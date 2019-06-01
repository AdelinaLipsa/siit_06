//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Scrieti o functie JS care primeste ca parametrii doua numere si returneaza media aritmetica a acestora.
function avgTwoNumbers(a, b) {
    return (a + b) / 2;
}

// 2. Scrieti o functie JS care primeste ca parametru un array de numere si returneaza media aritmetica a acestora.
function avgMultipleNumbers(arrayNr) {
    let sum = 0;
    for (let i = 0; i < arrayNr.length; i++) {
        sum += parseInt(arrayNr[i], 10);
    }
    let avg = sum / arrayNr.length;
    return avg;
}

// 3. Scrieti o functie JS care primeste ca parametru un array de numere si returneaza suma numerelor impare din array.
function sumOfTheOddNumbers(arrayNr) {
    let sum = 0;
    for (let i = 0; i < arrayNr.length; i++) {
        if (arrayNr[i] % 2 !== 0) {
            sum += parseInt(arrayNr[i], 10);
        }
    }
    return sum;
}

// 4. Scrieti o functie JS care primeste ca parametru un string si returneaza numarul aparitiilor literei \"m\".
function noOfOccurance(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "m") {
            count++;
        }
    }
    return count;
}

// 5. Scrieti o functie JS care primeste ca parametru un array de numere nesortate de la 1 la n si returneaza unicul numar lipsa.
function missingNumber(nr, arrayNr) {
    var newArr = [],
        min = Math.min.apply('', arrayNr),
        max = Math.max.apply('', arrayNr);
    while (min < max) {
        if (arrayNr.indexOf(++min) == -1) newArr.push(min);
    }
    return newArr;
}

// 6. Scrieti o functie JS care primeste ca parametru un string si ii dubleaza litera \"b\" si returneaza noul string.
// Exemplu: pentru stringul \"biblioteca\" va returna \"bbibblioteca\"
function doubleB(str) {
    var str = str.replace(/b/g, 'bb');
    return str;
}

// 7. Scrieti o functie JS care primeste ca parametru un string si elimina toate aparitiile literelor \"a\", \"r\" si \"m\" si returneaza stringul rezultat.
//Exemplu: pentru stringul \"important\" va returna \"iportnt\"
function eliminateARM(str) {
    newString = str.replace(/a|r|m/g, "");
    return newString;
}

// 8. Scrieti o functie JS care primeste ca parametru un numar si returneaza cifrele acestuia intr-un array.
function digitsOfNumber(nr) {
    arr = String(nr).split("").reverse().map(Number);
    return arr;
}

// 9. Scrieti o functie JS care primeste ca parametru un numar si verifica daca este palindrom.
// Va returna true sau false.
// Exemplu: \"12321\" este palindrom \"12345\" nu este palindrom
function isPalindrom(nr) {
    var num = nr;
    var reversedNr = 0;
    while (num > 0) {
        var rightDigit = Math.floor(num % 10);
        reversedNr = reversedNr * 10 + rightDigit;
        num = Math.floor(num / 10);
    }
    if (nr == reversedNr)
        return true;
    else
        return false;
}

// 10. Scrieti o functie JS care primeste ca parametru un array de numere si returneaza acel array sortat descrescator.
function sortDesc(arrayNr) {
    function sortNumbers(a, b) {
        return b - a;
    }
    var x = arrayNr.sort(sortNumbers);
    return x;
}