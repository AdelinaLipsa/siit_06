//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Scrieti o functie JS care primeste ca parametrii doua numere si returneaza media aritmetica a acestora.
function avgTwoNumbers(a, b) {
    return (a + b) / 2;
}

// 2. Scrieti o functie JS care primeste ca parametru un array de numere si returneaza media aritmetica a acestora.
function avgMultipleNumbers(arrayNr) {
    let sum = 0;
    for (i = 0; i < arrayNr.length; i++) {
        sum += arrayNr[i];
    }
    return sum / arrayNr.length;

}

// 3. Scrieti o functie JS care primeste ca parametru un array de numere si returneaza suma numerelor impare din array.
function sumOfTheOddNumbers(arrayNr) {
    let sum = 0;
    for (i = 0; i < arrayNr.length; i++) {
        if (arrayNr[i] % 2 != 0) {
            sum += arrayNr[i];
        }
    }
    return sum;
}

// 4. Scrieti o functie JS care primeste ca parametru un string si returneaza numarul aparitiilor literei \"m\".
function noOfOccurance(str) {
    let occurance = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === "m") occurance++;
    }
    return occurance;
}

// 5. Scrieti o functie JS care primeste ca parametru un array de numere nesortate de la 1 la n si returneaza unicul numar lipsa.
function missingNumber(nr, arrayNr) {
}

// 6. Scrieti o functie JS care primeste ca parametru un string si ii dubleaza litera \"b\" si returneaza noul string.
// Exemplu: pentru stringul \"biblioteca\" va returna \"bbibblioteca\"
function doubleB(str) {
    let newStr = '';
    for (i = 0; i < str.length; i++) {
        newStr += str[i];
        if (str[i] === "b") newStr += str[i];
    }
    return newStr;
}

// 7. Scrieti o functie JS care primeste ca parametru un string si elimina toate aparitiile literelor \"a\", \"r\" si \"m\" si returneaza stringul rezultat.
//Exemplu: pentru stringul \"important\" va returna \"iportnt\"
function eliminateARM(str) {
    let newStr = "";
    remove = ["a", "r", "m"];
    for (i = 0; i < str.length; i++) {
        if (!remove.includes(str[i])) {
            newStr += str[i];
        }

    }
    return newStr;

}

// 8. Scrieti o functie JS care primeste ca parametru un numar si returneaza cifrele acestuia intr-un array.
function digitsOfNumber(nr) {
    newNr = nr.toString();
    if (newNr[0] == "-") {
        newNr.split("-");
        newNr.toString();
        result = newNr.split("")
    } else  result = newNr.split("");
    return result;
}

// 9. Scrieti o functie JS care primeste ca parametru un numar si verifica daca este palindrom.
// Va returna true sau false.
// Exemplu: \"12321\" este palindrom \"12345\" nu este palindrom
function isPalindrom(nr) {
    newNr = nr.toString()
    for (let i = 0; i < newNr.length / 2; i++) {
        if ([i] != newNr[newNr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 10. Scrieti o functie JS care primeste ca parametru un array de numere si returneaza acel array sortat descrescator.
function sortDesc(arrayNr) {
    var aux;
    for(i = 0; i<arrayNr.length-1; i++){
        for(j = 1; j<arrayNr.legth; j++){
            if(arrayNr[i]>arrayNr[j]){
                aux = arrayNr[i];
                arrayNr[i] = arrayNr[i];
                arrayNr[j] = aux;
            }
        }
    }
    return arrayNr;
}