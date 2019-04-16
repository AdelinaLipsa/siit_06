//-----------------------------------------

var myNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var myLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var testString = "a-s?]dA{_34F'G/t,21-0h ds04";

var testArr = ["2dolphin", "5shark", "whale", "octo4pus", "je7llyfi0sh"];

// 01 --------------------------------------

function findNumbers(string) {

    var outputString = "";

    for (var i = 0; i < string.length; i++) {

        if (validate(myNumbers, string[i])) {

            outputString += string[i];
        }
    }

    return outputString;

}

console.log(findNumbers(testString));

// 02 --------------------------------------

function findLetters(string) {

    var outputString = "";

    for (var i = 0; i < string.length; i++) {

        if (validate(myLetters, string[i])) {

            outputString += string[i];
        }
    }

    return outputString;

}

console.log(findLetters(testString));

// 03 --------------------------------------

function findFirstNLetters(string, n) {

    if (n > 0) {

        var outputString = "";

        for (var i = 0; i < string.length; i++) {

            if (validate(myLetters, string[i])) {

                outputString += string[i];
                if (outputString.length === n) break;
            }
        }

        return outputString;
    } else return false;

}

console.log(findFirstNLetters(testString, 5));

// 04 --------------------------------------

function concatenate(arr) {

    var outputString = "";

    for (var i = 0; i < arr.length; i++) {

        outputString += arr[i];
    }

    return outputString;

}

console.log(concatenate(testArr));

// 05 --------------------------------------

function findNumbersInArr(arr) {

    var outputString = "";

    for (var i = 0; i < arr.length; i++) {

        var arrElement = arr[i];

        for (var j = 0; j < arrElement.length; j++) {

            if (validate(myNumbers, arrElement[j])) {

                outputString += arrElement[j];

            }
        }
    }

    return outputString;

}

console.log(findNumbersInArr(testArr));

// 06 --------------------------------------

function invert(arr) {

    var outputArr = [];

    for (var i = arr.length - 1; i >= 0; i--) {

        var arrElement = arr[i];
        var invertedElement = "";

        for (var j = arrElement.length - 1; j >= 0; j--) {

            invertedElement += arrElement[j];

        }

        outputArr.push(invertedElement);
    }

    return outputArr;

}

console.log(invert(testArr));

// 07 --------------------------------------
//using recursive function

function factorial(x) {

    if (x < 0) return false;
    else if (x === 0) return 1;
    else return x * factorial(x - 1);

}

console.log(factorial(5));

//------------------------------------------
//using for loop

function factorialV2(x) {

    if (x < 0) return false;
    else {

        var result = 1;

        for (var i = x; i > 0; i--) {

            result *= i;
        }

        return result;
    }
}

console.log(factorialV2(5));

// 08 --------------------------------------

function greatestCommonDivisor(x, y) {

    if (x === y) return x;
    else {

        var min;

        if (x < y) min = x;
        else min = y;

        var gcd;

        for (var i = 1; i <= min; i++) {
            if (x % i === 0 && y % i === 0) gcd = i;
        }
    }

    return gcd;
}

console.log(greatestCommonDivisor(84, 196));

// 09 --------------------------------------

function leastCommonMultiple(x, y) {

    if (x === y) return x;
    else return x * y / greatestCommonDivisor(x, y);

}

console.log(leastCommonMultiple(84, 196));

// 10 --------------------------------------

function divisors(x) {

    var arr = [];

    for (var i = 1; i <= x; i++) {

        if (x % i === 0) arr.push(i);
    }

    return arr;

}

console.log(divisors(64));

// 11 --------------------------------------

function palindrom(string) {

    for (i = 0; i < Math.floor(string.length / 2); i++) {

        if (string[i] != string[string.length - 1 - i]) return false;
    }

    return true;

}

console.log(palindrom("1234567890987654321"));

// 12 --------------------------------------

function sortEvenNumbers(string) {

    var arr = [];

    for (var i = 0; i < string.length; i++) {

        if (string[i] % 2 === 0 && validate(myNumbers, string[i])) arr.push(string[i]);

    }

    for (var i = 0; i < arr.length; i++) {

        for (var j = i + 1; j < arr.length; j++) {

            var max;

            if (arr[i] > arr[j]) {

                max = arr[i];
                arr[i] = arr[j];
                arr[j] = max;

            }
        }
    }

    return arr;

}

console.log(sortEvenNumbers("2507496183"));

// 13 --------------------------------------



// 14 --------------------------------------

function validate(arr, a) {

    if (arr.length === 0 || arr[0] !== a && arr.length === 1) return false;
    else {

        var midIndex = Math.floor(arr.length / 2);

        if (arr[midIndex] === a) return true;
        else {

            var leftArr = arr.slice(0, midIndex);
            var rightArr = arr.slice(midIndex);

            if (a > arr[midIndex]) return validate(rightArr, a);
            else return validate(leftArr, a);

        }
    }
}

// 15 --------------------------------------

function checkRecursion(arr,a) {

    var recursion = 0;

    function validate(arr, a) {

        recursion++;
        
        if (arr.length === 0 || arr[0] !== a && arr.length === 1) return false;
        else {

            var midIndex = Math.floor(arr.length / 2);

            if (arr[midIndex] === a) return true;
            else {

                var leftArr = arr.slice(0, midIndex);
                var rightArr = arr.slice(midIndex);

                if (a > arr[midIndex]) return validate(rightArr, a);
                else return validate(leftArr, a);

            }
        }
    }

    validate(arr,a);
    return recursion;

}

console.log(checkRecursion([1,3,4,6],3));