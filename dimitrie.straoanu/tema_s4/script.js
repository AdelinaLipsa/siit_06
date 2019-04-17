//-----------------------------------------
// required for some functions!

var myNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var myLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// 01 --------------------------------------
// needs function validate to work!

function findNumbers(string) {

    var outputString = "";

    for (var i = 0; i < string.length; i++) {

        if (validate(myNumbers, string[i])) {

            outputString += string[i];

        }
    }

    return outputString;

}

findNumbers("a-s?]dA{_34F'G/t,21-0h ds04");

// 02 --------------------------------------
// needs function validate to work!

function findLetters(string) {

    var outputString = "";

    for (var i = 0; i < string.length; i++) {

        if (validate(myLetters, string[i])) {

            outputString += string[i];
        }
    }

    return outputString;

}

findLetters("a-s?]dA{_34F'G/t,21-0h ds04");

// 03 --------------------------------------
// needs function validate to work!

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

findFirstNLetters("a-s?]dA{_34F'G/t,21-0h ds04", 5);

// 04 --------------------------------------

function concatenate(arr) {

    var outputString = "";

    for (var i = 0; i < arr.length; i++) {

        outputString += arr[i];
    }

    return outputString;

}

concatenate(["2dolphin", "5shark", "whale", "octo4pus", "je7llyfi0sh"]);

// 05 --------------------------------------
// needs function validate to work!

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

findNumbersInArr(["2dolphin", "5shark", "whale", "octo4pus", "je7llyfi0sh"]);

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

invert(["2dolphin", "5shark", "whale", "octo4pus", "je7llyfi0sh"]);

// 07 --------------------------------------

//using a recursive function
function factorial(x) {

    if (x < 0) return false;
    else if (x === 0) return 1;
    else return x * factorial(x - 1);

}

console.log(factorial(5));

//using a for loop
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

greatestCommonDivisor(84, 196);

// 09 --------------------------------------
// needs function greatestCommonDivisor to work!

function leastCommonMultiple(x, y) {

    if (x === y) return x;
    else return x * y / greatestCommonDivisor(x, y);

}

leastCommonMultiple(84, 196);

// 10 --------------------------------------

function divisors(x) {

    var arr = [];

    for (var i = 2; i <= x / 2; i++) {

        if (x % i === 0) arr.push(i);

    }

    return arr;

}

divisors(64);

// 11 --------------------------------------

function palindrom(string) {

    for (i = 0; i < Math.floor(string.length / 2); i++) {

        if (string[i] !== string[string.length - 1 - i]) return false;

    }

    return true;

}

palindrom("1234567890987654321");

// 12 --------------------------------------
// needs function validate to work!


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

sortEvenNumbers("2507496183");

// 13 --------------------------------------

function customSort(arr) {

    var index;
    var temp;

    for (var i = 0; i < arr.length; i++) {

        for (var j = i + 1; j < arr.length; j++) {

            if (arr[i] % 2 === 0) break;
            else if (arr[j] % 2 === 0) {

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                index = i+1;
                break;

            }
        }
    }

    //console.log(arr, index);

    for (var i = 0; i < index; i++) {

        for (var j = i + 1; j < index; j++) {

            if (arr[i] > arr[j]) {

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }
    }

    //console.log(arr);

    for (var i = index; i < arr.length; i++) {

        for (var j = i + 1; j < arr.length; j++) {

            if (arr[i] < arr[j]) {

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }
    }

    return arr;
}

customSort([2, 16, 35, 1, 66, 20, 71, 4, 0, 37, 15, 8, 91, 86, 10]);

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

validate([1, 5, 8, 12, 22, 25, 31, 45, 59, 75, 83], 5);

// 15 --------------------------------------

function checkRecursion(arr, a) {

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

    validate(arr, a);
    return recursion;

}

checkRecursion([1, 5, 8, 12, 22, 25, 31, 45, 59, 75, 83], 5);