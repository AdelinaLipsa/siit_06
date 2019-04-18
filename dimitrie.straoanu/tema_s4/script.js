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

function findNumbers(string) {

    var outputString = "";

    for (var i = 0; i < string.length; i++) {

        if (validate(myNumbers, string[i])) {

            outputString += string[i];
        }
    }
    return outputString;
}

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
    }
    return outputString;
}

// 04 --------------------------------------

function concatenate(arr) {

    var outputString = "";

    for (var i = 0; i < arr.length; i++) {

        outputString += arr[i];
    }
    return outputString;
}

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

// 07 --------------------------------------

//using a recursive function
function factorial(x) {

    if (x < 0) return false;
    else if (x === 0) return 1;
    else return x * factorial(x - 1);
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

function greatestCommonDivisor(x, y) {

    var result;
    var min;

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

// 09 --------------------------------------

function leastCommonMultiple(x, y) {

    if (x === y) return x;
    else return x * y / greatestCommonDivisor(x, y);
}

// 10 --------------------------------------

function divisors(x) {

    var arr = [];

    for (var i = 2; i <= x / 2; i++) {

        if (x % i === 0) arr.push(i);
    }
    return arr;
}

// 11 --------------------------------------

function palindrom(string) {

    for (i = 0; i < Math.floor(string.length / 2); i++) {

        if (string[i] !== string[(string.length - 1) - i]) {

            return false;
        }
    }
    return true;
}

// 12 --------------------------------------

function sortEvenNumbers(arr) {

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
    return newArr;
}

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
    return arr;
}

// 14 --------------------------------------

function binarySearch(arr, x) {

    if (arr.length === 0 || arr[0] !== x && arr.length === 1) return false;
    else {

        var midIndex = Math.floor(arr.length / 2);

        if (arr[midIndex] === x) return true;
        else {

            var leftArr = arr.slice(0, midIndex);
            var rightArr = arr.slice(midIndex);

            if (x > arr[midIndex]) return binarySearch(rightArr, x);
            else return binarySearch(leftArr, x);
        }
    }
}

// 15 --------------------------------------

function checkRecursion(arr,x) {

    var recursionCount = 0;

    function binarySearch(arr, x) {

        recursionCount++;

        if (arr.length === 0 || arr[0] !== x && arr.length === 1) return false;
        else {

            var midIndex = Math.floor(arr.length / 2);

            if (arr[midIndex] === x) return true;
            else {

                var leftArr = arr.slice(0, midIndex);
                var rightArr = arr.slice(midIndex);

                if (x > arr[midIndex]) return binarySearch(rightArr, x);
                else return binarySearch(leftArr, x);
            }
        }
    }
    binarySearch(arr, x);
    return recursionCount;
}

//------------------------------------------------------------------------------

function exe01() {

    var string = document.getElementById("01_string").value;
    document.getElementById("01_result").innerText = findNumbers(string);
}

function exe02() {

    var string = document.getElementById("02_string").value;
    document.getElementById("02_result").innerText = findLetters(string);
}

function exe03() {

    var string = document.getElementById("03_string").value;
    var n = Number(document.getElementById("03_number").value);
    document.getElementById("03_result").innerText = findFirstNLetters(string, n);
}

function exe04() {

    var arr = document.getElementById("04_arr").value;
    arr = arr.split(",");
    document.getElementById("04_result").innerText = concatenate(arr);
}

function exe05() {

    var arr = document.getElementById("05_arr").value;
    arr = arr.split(",");
    document.getElementById("05_result").innerText = findNumbersInArr(arr);
}

function exe06() {

    var arr = document.getElementById("06_arr").value;
    arr = arr.split(",");
    document.getElementById("06_result").innerText = invert(arr);
}

function exe07() {

    var x = Number(document.getElementById("07_number").value);
    document.getElementById("07_result").innerText = factorial(x);
}

function exe08() {

    var x = Number(document.getElementById("08_number1").value);
    var y = Number(document.getElementById("08_number2").value);
    document.getElementById("08_result").innerText = greatestCommonDivisor(x, y);
}

function exe09() {

    var x = Number(document.getElementById("09_number1").value);
    var y = Number(document.getElementById("09_number2").value);
    document.getElementById("09_result").innerText = leastCommonMultiple(x, y);
}

function exe10() {

    var x = Number(document.getElementById("10_number").value);
    document.getElementById("10_result").innerText = divisors(x);
}

function exe11() {

    var string = document.getElementById("11_string").value;
    document.getElementById("11_result").innerText = palindrom(string);
}

function exe12() {

    var arr = document.getElementById("12_arr").value;
    arr = arr.split(",");
    arr = arr.map(Number);
    document.getElementById("12_result").innerText = sortEvenNumbers(arr);
}

function exe13() {

    var arr = document.getElementById("13_arr").value;
    arr = arr.split(",");
    arr = arr.map(Number);
    document.getElementById("13_result").innerText = customSort(arr);
}

function exe14() {

    var arr = document.getElementById("14_arr").value;
    arr = arr.split(",");
    arr = arr.map(Number);
    var x = Number(document.getElementById("14_number").value);
    document.getElementById("14_result").innerText = binarySearch(arr, x);
}

function exe15() {

    var arr = document.getElementById("15_arr").value;
    arr = arr.split(",");
    arr = arr.map(Number);
    var x = Number(document.getElementById("15_number").value);
    document.getElementById("15_result").innerText = "Recursion occured " + checkRecursion(arr,x) + " times.";
}