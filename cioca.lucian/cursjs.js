// curs 5
function merge(a, b) {
    var i = 0;
    var j = 0;
    var s = [];
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            s.push(a[i]);
            i++;
        } else {
            s.push(b[j]);
            j++;
        }
    }
    while (i < a.length) {
        s.push(a[i]);
        i++;
    }

    while (j < b.length) {
        s.push(b[j]);
        j++;
    }
    return s;
}


function sort(a) {
    var sorted = [];

    if (a.length > 0) {
        if (a.length == 1) {
            sorted = a;
        } else {
            var midIndex = math.floor(a.length / 2);
            var left = a.slice(0, midIndex);
            var right = a.slice(midIndex, a.length);

            var sortedLeft = sort(left);
            var sortedRight = sort(right);

            sorted = merge(sortedLeft, sortedRight);
        }
    }
    return sorted;
}
//scope
asd


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////Rezolvati exercitiile urmatoare si salvati-le aici si la link-ul urmator: http://bit.do/buc-g6-test1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Scrieti o functie JS care returneaza suma a 2 numere primite ca parametru.
// Exemplu: pentru 2 si 4 va returna 6, iar pentru 22 si 173 va returna 195. 
function sumTwoNumbers(firstNumber, secondNumber) {
    var s = 0;
    return firstNumber+secondNumber;
}

// 2. Scrieti o functie JS care returneaza suma a N numere primite ca parametru. Hint: folositi un array. 
// Exemplu: pentru [16, 9, 3, 7, 59, 2, 78, 240, 18] va returna 432. 
function sum(arrayNr) {
    s = 0;
    for ( var i=0; i<arrayNr.length; i++){
        s += arrayNr[i];
    }
    return s;
}


// 3. Scrieti o functie JS care primeste un sir de caractere si returneaza doar consoanele din sirul respectiv.
// Exemplu: pentru \"javascript is awesome\" va returna \"jvscrpt s wsm\"
function removeVowels(arrayStr) {
    var sir = "";

    for ( var i = 0; i < arrayStr.length; i++){
        if ( arrayStr[i] != 'a' && arrayStr[i] != 'e' && arrayStr[i] != 'i' && arrayStr[i] != 'o' && arrayStr[i] != 'u' ){
            sir = sir + arrayStr[i];
        }
    }
    return sir;
}

// 4. Scrieti o functie JS care returneaza valoarea maxima dintr-un sir de numere.
// Exemplu: pentru [33, 79, 2, 342, 87, 11, 99] va returna 342.
function getMaxNumber(arrayNr) {
    var max = arrayNr[0];
    for ( var i = 1; i < arrayNr.length; i++){
        if ( arrayNr[i] > max){
            max = arrayNr[i];
        }
    }
    return max;
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
    var p = 1;
    for ( var i = 1 ; i <= nr; i++){
        p = p * i;
    }
    return p;
}

// 6. Scrieti o functie JS care returneaza primele 3 numere pare dintr-un sir de numere.
// Exemplu: pentru [23, 8, 13, 14, 9, 88, 19, 20, 46, 10] va returna [8, 14, 88]
function displayFirst3EvenNumbers(arrayNr) {
    var a =[];
    var p = 0;

    for ( var i = 0; i < arrayNr.length; i++){
        if (arrayNr[i] % 2 == 0 && p < 3){
            a.push(arrayNr[i]);
            p++;

        }
    }
    return a;
}

// 7. Scrieti o functie JS care verifica daca un string este palindrom, adica inversul cuvantului este egal cu originalul.
// Functia returneaza true daca este palindrom si false daca nu este palindrom.
// Exemplu: pentru capac va returna true; pentru copac va returna false
function palindrom(str) {
    var palindrom = "";

    for (var i = str.length-1; i >= 0; i--){
        palindrom += str[i];
    }
    if ( palindrom == str){
        return true;
    }
    else {
        return false;
    }
}

// 8. Scrieti o functie JS care sa returneze numerele prime dintr-un sir de numere.
// Exemplu: pentru [13, 4, 37, 45, 55, 17, 23] va returna [13, 37, 17, 23] 
function numarPrim(n) {
	var m = 0;

	if ( n < 2 ){
		return false;
	} else if (n == 2) {
		return true;
	} else {
		for ( var i = 2; i <= n/2; i++) {
			if ( n % i ==0){
				m++;
				break;
			}
		}
		
		if (m == 0){
			return true;
		} else {
			return false;
		}
	}
}

function displayPrimeNumbers(arrayNr) {
    var a =[];

    for ( var i = 0; i < arrayNr.length; i++){
        if (numarPrim(arrayNr[i]) == true){
            a.push(arrayNr[i]);
        }
    }
    return a;
}

// 9. Scrieti o functie JS care sorteaza crescator elementele pe randurile unei matrice primite ca parametru si returneaza matricea sortata. Hint: bubble sort.
// Exemplu: pentru [[34, 12, 44], [87, 23, 56], [50, 1, 0]] va returna [[12, 34, 44], [23, 56, 87], [0, 1, 50]]
function sortAsc(matrix) {
    function sort(a){
        for ( var i = 0; i < a.length; i++){
            for ( var j =i + 1; j<a.length; j++){
                if(a[j]< a[i]){
                    var b = a[i];
                    a[i] = a[j];
                    a[j] = b;
                }
            }
    }
    return a;
    }

    for ( var i = 0; i < matrix.length; i++){
        matrix[i] = sort(matrix[i]);
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
    else if(nr <= 1) return 1;
    else return fibonacci(nr-1)+fibonacci(nr-2);
    
}
