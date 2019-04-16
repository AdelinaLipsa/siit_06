//-----------------------------------------

var myNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var myLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var testString = "a-s?]dA{_34F'G/t,21-0h ds04";

var testArr = ["2dolphin", "5shark", "whale", "octo4pus", "je7llyfi0sh"];



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