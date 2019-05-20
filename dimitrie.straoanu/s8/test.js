//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Scrieti o functie JS care primeste ca parametrii doua numere si returneaza media aritmetica a acestora.
function avgTwoNumbers(a, b) {
    return (a + b) / 2;
}

// 2. Scrieti o functie JS care primeste ca parametru un array de numere si returneaza media aritmetica a acestora.
function avgMultipleNumbers(arrayNr) {
    var sum = 0;
    for (var i = 0; i < arrayNr.length; i++) {
        sum += arrayNr[i];
    }
    return sum / arrayNr.length;
}

// 3. Scrieti o functie JS care primeste ca parametru un array de numere si returneaza suma numerelor impare din array.
function sumOfTheOddNumbers(arrayNr) {
    var sum = 0;
    for (var i = 0; i < arrayNr.length; i++) {
        if (arrayNr[i] % 2 !== 0)
            sum += arrayNr[i];
    }
    return sum;
}

// 4. Scrieti o functie JS care primeste ca parametru un string si returneaza numarul aparitiilor literei \"m\".
function noOfOccurance(str) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "m")
            counter++
    }
    return counter;
}

// 5. Scrieti o functie JS care primeste ca parametru un array de numere nesortate de la 1 la n si returneaza unicul numar lipsa.
function missingNumber(nr, arrayNr) {
    for (var i = 1; i <= nr; i++) {
        var numberInArr = false;
        for (var j = 0; j < arrayNr.length; j++) {
            if (arrayNr[j] === i)
                numberInArr = true;
        }
        if (numberInArr === false)
            return i;
    }
}

// 6. Scrieti o functie JS care primeste ca parametru un string si ii dubleaza litera \"b\" si returneaza noul string.
// Exemplu: pentru stringul \"biblioteca\" va returna \"bbibblioteca\"
function doubleB(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "b")
            newStr += str[i] + "b";
        else
            newStr += str[i];
    }
    return newStr;
}

// 7. Scrieti o functie JS care primeste ca parametru un string si elimina toate aparitiile literelor \"a\", \"r\" si \"m\" si returneaza stringul rezultat.
//Exemplu: pentru stringul \"important\" va returna \"iportnt\"
function eliminateARM(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "r" || str[i] === "m")
            continue;
        newStr += str[i];
    }
    return newStr;
}

// 8. Scrieti o functie JS care primeste ca parametru un numar si returneaza cifrele acestuia intr-un array.
function digitsOfNumber(nr) {
    if (nr) {
        var strFromNr = nr + "";
        var newArr = [];
        for (var i = 0; i < strFromNr.length; i++) {
            if (strFromNr[i] === "-")
                continue;
            else
                newArr.push(Number(strFromNr[i]));
        }
        return newArr;
    }
}

// 9. Scrieti o functie JS care primeste ca parametru un numar si verifica daca este palindrom.
// Va returna true sau false.
// Exemplu: \"12321\" este palindrom \"12345\" nu este palindrom
function isPalindrom(nr) {
    if (nr || nr === 0) {
        var strFromNr = nr + "";
        if (strFromNr[0] === "-")
            strFromNr += "-";
        for (var i = 0; i < strFromNr.length / 2; i++) {

            if (strFromNr[i] != strFromNr[strFromNr.length - 1 - i])
                return false;
        }
        return true;
    }
}

// 10. Scrieti o functie JS care primeste ca parametru un array de numere si returneaza acel array sortat descrescator.
function sortDesc(arrayNr) {
    for (var i = 0; i < arrayNr.length; i++) {
        for (var j = 0; j < arrayNr.length; j++) {
            if (arrayNr[i] > arrayNr[j]) {
                var temp = arrayNr[i];
                arrayNr[i] = arrayNr[j];
                arrayNr[j] = temp;
            }
        }
    }
    return arrayNr;
}