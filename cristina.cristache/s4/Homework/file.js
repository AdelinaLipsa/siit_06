//Exercitiul 1//
function returnValue() {
    var arr = document.getElementById("f1input").value;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            newArr.push(arr[i]);
        }
    }

    document.getElementById('f1result').innerHTML = "Here you have all the numbers in the array: " + newArr;
}


//Exercitiul 2//
function ifNan() {
    var arr = document.getElementById("f2input").value;
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    document.getElementById('f2result').innerHTML = "Here you have all the letters in the array: " + newArr;
}


//Exercitiul 3//
function first5() {
    var arr = document.getElementById("f3input").value;
    var newArr = [];
    for (i = 0; newArr.length < 5; i++) {
        if (isNaN(arr[i])) {
            newArr.push(arr[i]);
        }
    }

    document.getElementById('f3result').innerHTML = "Here you have the 5 first letters, if any, in the array: " + newArr;
}

//Exercitiul 4
function concat(list) {

    var concatArrays = [];
    for (var i = 0; i < list.length; i++) {
        concatArrays += arr[i];
    }
    return concatArrays;
}//Nu am reusit sa obtiun un rezultat optim implementand-o in HTML, dar in console merge perfect


//Exercitiul 5
function returnAllNums(arr) {
    var numbers = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (!isNaN(arr[i][j])) {
                numbers += arr[i][j];
            }
        }
    }
    return numbers;
}//Same as for F5


//Exercitiul 6//
function inverted() {
    var arr = document.getElementById("f6input");
    var invertedArray = [];
    for (i = arr.length - 1; i >= 0; i--) {
        invertedArray.push(arr[i]);
    }
    document.getElementById('f6result').innerHTML = invertedArray;
}


//Exercitiul 7//
function factorial(n) {
    var result = 1;
    for (var i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}


//Exercitiul 8//
function gcd(num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    if (larger % smaller == 0) {
        return smaller;
    } else {
        return gcd(smaller, larger % smaller);
    }
}


//Exercitiul 9//
function lcm(num1, num2) {
    var gcd = function gcd(num1, num2) {

        var smaller = Math.min(num1, num2);
        var larger = Math.max(num1, num2);

        if (larger % smaller == 0) {
            return smaller;
        } else {
            return gcd(smaller, larger % smaller);
        }
    }

    return (num1 * num2) / gcd(num1, num2);
}


//Exercitiul 10

//Exercitiul 11
function palidrom(arr) {
    var revertedArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        revertedArr += arr[i];
    }
    if (arr === revertedArr) {
        return true;
    }
}


//Exercitiul 12//
function sortTheEvens(arr) {
    evens = [];
    for (i = 0; i < arr.length; i++) {
        if (arr % 2 == 0) {
            evens += arr[i];
        }
    }
    return evens;
}


//Exercitiul 13//
function difficultSort(arr) {
    var pivot = arr.pop([arr.length - 1 / 2]);
    var left = [];
    var right = [];
    weirdSorted = [];
    if (arr.length <= 1) {
        return arr;
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            if (arr[i] <= pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        if (arr[i] % 2 != 0) {
            if (arr[i] <= pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }
    return weirdSorted.concat(difficultSort(right), pivot, difficultSort(left));

} // Really need some serious review from you, Alin, here on this one >> weird weird weird!!!!
