//-----------------------------------------
// this is needed for some functions
var myNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var myLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var testString = "a-s?]dA[ 34F G/t,,,21-0h ds04"

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

function onlyNumbers(string) {

    var outputString = "";

    for (var i = 0; i < string.length; i++) {

        if (validate(myNumbers, string[i])) {

            outputString += string[i];
        }
    }

    return outputString;

}

console.log(onlyNumbers(testString));

// 02 --------------------------------------

function onlyLetters(string) {

    var outputString = "";

    for (var i = 0; i < string.length; i++) {

        if (validate(myLetters, string[i])) {

            outputString += string[i];
        }
    }

    return outputString;

}

console.log(onlyLetters(testString));

// 03 --------------------------------------

function FirstNLetters(string, n) {

    if (n > 0) {

        var outputString = "";

        for (var i = 0; i < string.length; i++) {

            if (validate(myLetters, string[i])) {

                outputString += string[i];
                if (outputString.length === n) break;
            }
        }

        return outputString;
    } else return n > 0;

}

console.log(FirstNLetters(testString,5));