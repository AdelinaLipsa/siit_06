//01---------------------------------------------------------------------------
var compareNumbers = function () {

    var result;

    var a = prompt("Input first number:\nEx: 3");
    a = Number(a);

    var b = prompt("Input second number:\nEx: 6");
    b = Number(b);

    if (a === b) {
        result = true;
        alert(result + "\nNumbers are the equal.");
    } else {
        result = false;
        alert(result + "\nNumbers are different.");
    }

}

//02---------------------------------------------------------------------------

var compareNumbersAgain = function () {

    var result;

    var a = prompt("Input first number:\nEx: 3");
    a = Number(a);

    var b = prompt("Input second number:\nEx: 6");
    b = Number(b);

    if (a < b) {
        result = -1;
        alert(result + "\nFirst number is smaller.");

    } else if (a === b) {
        result = 0;
        alert(result + "\nNumbers are equal.");

    } else {
        result = 1;
        alert(result + "\nFirst number is bigger.");
    }

}

//03---------------------------------------------------------------------------

var returnMax = function () {

    var a = prompt("Input first number:\nEx: 3");
    a = Number(a);

    var b = prompt("Input second number:\nEx: 6");
    b = Number(b);

    if (a > b) {
        alert("Maximum is: " + a);
    } else {
        alert("Maximum is: " + b);
    }

}

//04---------------------------------------------------------------------------

var returnMin = function () {

    var a = prompt("Input first number:\nEx: 3");
    a = Number(a);

    var b = prompt("Input second number:\nEx: 6");
    b = Number(b);

    if (a < b) {
        alert("Minimum is: " + a);
    } else {
        alert("Minimum is: " + b);
    }

}

//05---------------------------------------------------------------------------

var sumNaturalNumbersN = function () {

    var a = prompt("Input limit:\nEx: 8");
    a = Number(a);

    var sum = 0;
    var natNr = 0;

    for (var i = 1; i <= a; i++) {
        natNr++;
        sum = sum + natNr;
    }

    alert("Sum of first " + a + " natural numbers is: " + sum);

}

//06---------------------------------------------------------------------------

var primeNumberCheck = function () {

    var a = prompt("Input number to check:\nEx: 7")
    a = Number(a);

    var divisor = 2;
    var isPrimeNumber = true;

    for (var i = 2; i < a; i++) {

        if ((a % divisor) === 0) {
            isPrimeNumber = false;
            break;
        } else {
            divisor++;
        }

    }

    if (a !== 0 && a !== 1 && isPrimeNumber === true) {
        alert("Number " + a + " is prime.")
    } else {
        alert("Nope! " + a + " not a prime number.")
    }

}

//07---------------------------------------------------------------------------

var sumPrimeNumbersN = function () {

    var a = prompt("Input limit:\nEx: 15");
    a = Number(a);

    var number = 2;
    var divisor = 2;
    var primeNumbersFound = 0;
    var isPrimeNumber = true;
    var sum = 0;

    while (primeNumbersFound < a) {

        for (var i = 2; i < number; i++) {

            if ((number % divisor) === 0) {
                isPrimeNumber = false;
                break;
            } 
            divisor++;
            
        }

        if (isPrimeNumber === true) {
            primeNumbersFound++;
            sum = sum + number;
        }

        number++;
        divisor = 2;
        isPrimeNumber = true;
    }

    alert("Suma primelor " + a + " numere prime este: " + sum);
}




//08---------------------------------------------------------------------------

var reverseString = function () {

    var string = prompt("Input string:\nEx: abcdef");
    string = Array.from(string);

    var stringReversed = [];
    var lastElement = [];


    while (string.length > 0) {
        lastElement = string[string.length - 1];
        stringReversed.push(lastElement);
        string.pop();
    }


    alert("Reversed string: " + stringReversed.join(""));

}

//09---------------------------------------------------------------------------

var sumOddNumbersN = function () {

    var a = prompt("Input limit:\nEx: 12");
    a = Number(a);

    var number = 0;
    var oddNumbersFound = 0;
    var sum = 0;

    while (oddNumbersFound < Number(a)) {

        if (number % 2 !== 0) {

            oddNumbersFound++;
            sum += number;
        }

        number++;

    }

    alert("Sum of first " + a + " positive odd numbers is: " + sum);

}

//10---------------------------------------------------------------------------

var findInArray = function () {

    var arr = prompt("Input array of numbers:\nEx: 1,8,14,5,27");
    arr = arr.split(",");
    arr = arr.map(Number);

    var x = prompt("Input number to find in array:\nEx: 5");
    x = Number(x);

    var isInArr;
    var duplicates = 0;

    for (var i = 0; i < arr.length; i++) {

        if (x === arr[i]) {
            isInArr = true;
            duplicates++;
        }
    }

    if (isInArr === true) {
        alert("Number " + x + " is in array " + duplicates + " times.")

    } else {
        alert("Nope, not in array.")
    }

}

//11---------------------------------------------------------------------------

var maxInArray = function () {

    var arr = prompt("Input array of numbers:\nEx: 1,8,14,5,27");
    arr = arr.split(",");
    arr = arr.map(Number);

    var max = 0;

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }

    }

    alert("Maximum number in array is: " + max);


}

//12---------------------------------------------------------------------------


var sumMaxMinArray = function () {

    var arr = prompt("Input array of numbers:\nEx: 1,8,14,5,27");
    arr = arr.split(",");
    arr = arr.map(Number);

    var max = arr[0];
    var min = arr[0];
    var sum;


    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }

    }

    sum = min + max;

    alert("Maximum number in array is: " + max + "\nMinimum number in array is: " + min + "\nSum is: " + sum);

}

//13---------------------------------------------------------------------------


var duplicateCheckArray = function () {

    var arr = prompt("Input array of numbers:\nEx: 1,8,14,5,27");
    arr = arr.split(",");
    arr = arr.map(Number);

    var x = 0;
    var duplicates = 0;

    while (x < arr.length) {

        for (var i = 0; i < arr.length; i++) {

            if (arr[i] === arr[x]) {
                duplicates++;
            }

        }

        x++;

    }

    if (duplicates > arr.length) {

        alert("Array has duplicates");
    } else {
        alert("Nope, no duplicates found");
    }

}

//14---------------------------------------------------------------------------


var multiplyPosNumArray = function () {

    var arr = prompt("Input array of numbers:\nEx: 1,-8,14,5,-27");
    arr = arr.split(",");
    arr = arr.map(Number);
    product = 1;

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {

            product *= arr[i];

        }
    }

    alert("Product of positive numbers in array is: " + product);

}

//15---------------------------------------------------------------------------

var palindromeCheck = function () {

    var arr = prompt("Input string:\nEx: abcdcba");
    arr = Array.from(arr);

    var firstElement = [];
    var lastElement = [];
    var isPalindrome = true;

    while (arr.length > 1 && isPalindrome === true) {
        firstElement = arr[0];
        lastElement = arr[arr.length - 1];

        if (firstElement === lastElement) {
            arr.shift();
            arr.pop();
        } else {
            isPalindrome = false;
        }
    }
    if (isPalindrome === true) {
        alert("String is palindrome.");
    } else {
        alert("Nope, not a palindrome.");
    }
}