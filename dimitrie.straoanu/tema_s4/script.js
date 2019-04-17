//-----------------------------------------
// required for some functions!

var myNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var myLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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

function findNumbers() {

    var string = document.getElementById("01_string").value;
    var outputString = "";

    for (var i = 0; i < string.length; i++) {

        if (validate(myNumbers, string[i])) {

            outputString += string[i];

        }
    }

    document.getElementById("01_result").innerText = outputString;

}

// 02 --------------------------------------

function findLetters() {

    var string = document.getElementById("02_string").value;
    var outputString = "";

    for (var i = 0; i < string.length; i++) {

        if (validate(myLetters, string[i])) {

            outputString += string[i];
        }
    }

    document.getElementById("02_result").innerText = outputString;

}

// 03 --------------------------------------

function findFirstNLetters() {

    var string = document.getElementById("03_string").value;
    var n = parseInt(document.getElementById("03_number").value);

    if (n > 0) {

        var outputString = "";

        for (var i = 0; i < string.length; i++) {

            if (validate(myLetters, string[i])) {

                outputString += string[i];
                if (outputString.length === n) break;

            }
        }

        document.getElementById("03_result").innerText = outputString;

    }
}

// 04 --------------------------------------

function concatenate() {

    var arr = document.getElementById("04_arr").value;
    arr = arr.split(",");

    var outputString = "";

    for (var i = 0; i < arr.length; i++) {

        outputString += arr[i];
    }

    document.getElementById("04_result").innerText = outputString;

}

// 05 --------------------------------------

function findNumbersInArr() {

    var arr = document.getElementById("05_arr").value;
    arr = arr.split(",");

    var outputString = "";

    for (var i = 0; i < arr.length; i++) {

        var arrElement = arr[i];

        for (var j = 0; j < arrElement.length; j++) {

            if (validate(myNumbers, arrElement[j])) {

                outputString += arrElement[j];

            }
        }
    }

    document.getElementById("05_result").innerText = outputString;

}

// 06 --------------------------------------

function invert() {

    var arr = document.getElementById("06_arr").value;
    arr = arr.split(",");

    var outputArr = [];

    for (var i = arr.length - 1; i >= 0; i--) {

        var arrElement = arr[i];
        var invertedElement = "";

        for (var j = arrElement.length - 1; j >= 0; j--) {

            invertedElement += arrElement[j];

        }

        outputArr.push(invertedElement);

    }

    document.getElementById("06_result").innerText = outputArr;

}

// 07 --------------------------------------

//using a recursive function
function factorial() {

    var x = parseInt(document.getElementById("07_number").value);

    function recursive(x) {

        if (x < 0) return false;
        else if (x === 0) return 1;
        else return x * recursive(x - 1);
    }

    document.getElementById("07_result").innerText = recursive(x);

}

//using a for loop
function factorialV2(x) {

    if (x < 0) return false;
    else {

        var result = 1;

        for (var i = x; i > 0; i--) {

            result *= i;

        }
    }

    return result;

}

// 08 --------------------------------------

function greatestCommonDivisor() {

    var x = parseInt(document.getElementById("08_number1").value);
    var y = parseInt(document.getElementById("08_number2").value);
    var result;
    var min;

    if (x === y) result = x;
    else {

        if (x < y) min = x;
        else min = y;

        for (var i = 1; i <= min; i++) {

            if (x % i === 0 && y % i === 0) result = i;

        }
    }

    document.getElementById("08_result").innerText = result;

}

// 09 --------------------------------------

function leastCommonMultiple() {

    var x = parseInt(document.getElementById("09_number1").value);
    var y = parseInt(document.getElementById("09_number2").value);
    var result;

    function gcd(x, y) {

        var min;
        var result;

        if (x === y) return x;
        else {

            if (x < y) min = x;
            else min = y;

            for (var i = 1; i <= min; i++) {

                if (x % i === 0 && y % i === 0) result = i;

            }
        }

        return result;

    }

    if (x === y) result = x;
    else result = x * y / gcd(x, y);

    document.getElementById("09_result").innerText = result;

}

// 10 --------------------------------------

function divisors() {

    var x = parseInt(document.getElementById("10_number").value);

    var arr = [];

    for (var i = 2; i <= x / 2; i++) {

        if (x % i === 0) arr.push(i);

    }

    document.getElementById("10_result").innerText = arr;

}

// 11 --------------------------------------

function palindrom() {

    var string = document.getElementById("11_string").value;
    var result = true;

    for (i = 0; i < Math.floor(string.length / 2); i++) {

        if (string[i] !== string[(string.length - 1) - i]) {

            result = false;
            break;
        }
    }

    document.getElementById("11_result").innerText = result;

}

// 12 --------------------------------------

function sortEvenNumbers() {

    var arr = document.getElementById("12_arr").value;
    arr = arr.split(",");
    arr = arr.map(Number);
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) newArr.push(arr[i]);

    }

    for (var i = 0; i < newArr.length; i++) {

        for (var j = i + 1; j < newArr.length; j++) {

            var max;

            if (newArr[i] > newArr[j]) {

                max = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = max;

            }
        }
    }

    document.getElementById("12_result").innerText = newArr;

}

// 13 --------------------------------------

function customSort() {

    var arr = document.getElementById("13_arr").value;
    arr = arr.split(",");
    arr = arr.map(Number);
    var index;
    var temp;

    for (var i = 0; i < arr.length; i++) {

        for (var j = i + 1; j < arr.length; j++) {

            if (arr[i] % 2 === 0) break;
            else if (arr[j] % 2 === 0) {

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                index = i + 1;
                break;

            }
        }
    }

    for (var i = 0; i < index; i++) {

        for (var j = i + 1; j < index; j++) {

            if (arr[i] > arr[j]) {

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }
    }

    for (var i = index; i < arr.length; i++) {

        for (var j = i + 1; j < arr.length; j++) {

            if (arr[i] < arr[j]) {

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }
    }

    document.getElementById("13_result").innerText = arr;
}

// 14 --------------------------------------

function binarySearch() {

    var arr = document.getElementById("14_arr").value;
    arr = arr.split(",");
    arr = arr.map(Number);
    var x = parseInt(document.getElementById("14_number").value);

    function recursive(arr, x) {

        if (arr.length === 0 || arr[0] !== x && arr.length === 1) return false;
        else {

            var midIndex = Math.floor(arr.length / 2);

            if (arr[midIndex] === x) return true;
            else {

                var leftArr = arr.slice(0, midIndex);
                var rightArr = arr.slice(midIndex);

                if (x > arr[midIndex]) return recursive(rightArr, x);
                else return recursive(leftArr, x);

            }
        }
    }

    document.getElementById("14_result").innerText = recursive(arr, x);
}

// 15 --------------------------------------

function checkRecursion() {

    var arr = document.getElementById("15_arr").value;
    arr = arr.split(",");
    arr = arr.map(Number);
    var x = parseInt(document.getElementById("15_number").value);
    var recursion = 0;

    function recursive(arr, x) {

        recursion++;

        if (arr.length === 0 || arr[0] !== x && arr.length === 1) return false;
        else {

            var midIndex = Math.floor(arr.length / 2);

            if (arr[midIndex] === x) return true;
            else {

                var leftArr = arr.slice(0, midIndex);
                var rightArr = arr.slice(midIndex);

                if (x > arr[midIndex]) return recursive(rightArr, x);
                else return recursive(leftArr, x);

            }
        }
    }

    recursive(arr, x);
    document.getElementById("15_result").innerText = recursion;

}