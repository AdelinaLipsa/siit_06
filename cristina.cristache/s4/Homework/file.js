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

function allD(nr) {
    var allD = [];
    for (i = nr; i > 0; i--) {
        if (i !== nr && i !== 1) {
            if (nr % i === 0) {
                allD.push(i);
            }
        }
    }
    return allD;
}

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
    var evens = [];
    var aux;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evens.push(arr[i]);
        }
    }

    for (var i = 0; i < evens.length - 1; i++) {
        for (var j = i + 1; j < evens.length; j++) {
            if (evens[i] > evens[j]) {
                aux = evens[i];
                evens[i] = evens[j];
                evens[j] = aux;
            }
        }
    }
    return evens;
}


//Exercitiul 13//
function difficultSort(arr) {
    var aux;

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                if (arr[i] % 2 === 0 && arr[j] % 2 === 0) {
                    aux = arr[i];
                    arr[i] = arr[j];
                    arr[j] = aux;
                }
            } else if (arr[i] < arr[j]) {
                if (arr[i] % 2 !== 0 && arr[j] % 2 !== 0) {
                    aux = arr[i];
                    arr[i] = arr[j];
                    arr[j] = aux;
                }
            }
        }
    }
    return arr;
}

// Really need some serious review from you, Alin, here on this one >> weird weird weird!!!!


//Exercitiul 14

function FindNo(arr, nr) {
    if (arr.length == 0) {
        return false;
    } else {
        var indxMid = arr.length / 2;
        var mid = arr[indxMid];
        if (mid == x) {
            return true;
        } else {
            var arr_left = [...arr].splice(0, indxMid); //.splice[), changes the value
            var arr_right = [...arr].splice(indxMid, arr.length - 1);
            if (x < mid) {
                return binarySearch(arr_left, x);
            } else {
                return binarySearch(arr_right, x);
            }
        }
    }
}



