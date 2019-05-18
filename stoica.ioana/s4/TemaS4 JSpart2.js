//1.

function isNumber () {
    var string = "1e7u09";
    var stringNumbers = "";
    for (var i = 0; i< string.length; i++) {
        if ( Number.isInteger(parseInt(string[i])) ) {
         stringNumbers= stringNumbers + string[i];
                }
        }
    return stringNumbers;
    } 
    
    
    isNumber ();

//2.

function isChar (string) {
    var stringChars = "";

    for (var i = 0; i< string.length; i++) {
        if (((string[i]>="a") && (string[i] <= "z")) || ((string[i]>="A") && (string[i] <= "Z")) ) {
         stringChars= stringChars + string[i];
                }
        }
        return stringChars;
     } 
               
        isChar ("1e70@u9AmFost874LaP93Ta");

//3.

function firstChars (string) {
    var stringChars = "";
    
    for (var i = 0; i< string.length; i++) {
        if (((string[i]>="a") && (string[i] <= "z")) || ((string[i]>="A") && (string[i] <= "Z")) ) {
            
            stringChars= stringChars + string[i];
            
            if(stringChars.length==5){
                return stringChars;
            }
        }
    }
    return stringChars;
} 
    
 firstChars ("1e70@u9AmFost874LaP93Ta");

//4.

function concat (arr) {
    var concatArr = "";
    for (var i = 0; i< arr.length; i++) {
        concatArr = concatArr + arr[i];
    }
return concatArr;
}

concat (["Javascript", "e", "s00per"]);

//5.

function concat (arr) {
    var concatArr = "";
    var numbers = "";
    for (var i = 0; i< arr.length; i++) {
        concatArr = concatArr + arr[i];
    }
    for (var j = 0; j<concatArr.length; j++) {
        if ( Number.isInteger(parseInt(concatArr[j])) ) {
            numbers = numbers + concatArr[j];
        }
    }
    return numbers;
}

concat (["Ja98vascript", "6e", "s00per"]);

//6.

function reverse (arr) {
    var newArr = [];
    for (var n =arr.length - 1; n >= 0; n--) { 
        newArr.push(arr[n]);
    }
    return newArr;
}

reverse (["Ja98vascript", "6e", "s00per"]);

//7.

function factorial (n) {
    var x = 1;
    if (n == 0) {
        return 1;
    } 
    while (n>1) {
        x = x * n;
        n = n -1;
    }
    return x;
}

factorial (6);

//8.

function gcd (x, y) {
    while (y) {
        var n = y;
        y = x % y;
        x = n;
    }
    return x;
}

gcd (12, 8);

//9.

function lcm (x, y) {
    var p = x * y;
    while (y) {
        var n = y;
        y = x % y;
        x = n;
    }
    return p/x;
}

lcm (12, 8);

//10.

function divisor (n) {
    var arrayDivisors = [];
    var d = 2;
    while (d <= n/2) {
        if (n %d == 0) {
            arrayDivisors.push(d);
        }
        d = d + 1;
    }
    return arrayDivisors;
}

divisor (64);

//11.

function palindromeNumber (string) {
    var reverseNr = "";
    for (n = string.length - 1; n >=0; n--) {
         reverseNr += string[n];
    }
    if (string == reverseNr) {
        return "Numarul este palindrom.";
    }
}

palindromeNumber ("656565");

//12.

function sortEvenNrs (string) {
    var evenNrs = "";
    for (var i = 0; i< string.length; i++) {
        if (string[i] %2 ==0) {
            evenNrs += string[i];
        }
    }
    return evenNrs;
}

sortEvenNrs ("256718");

//13.

function sort (arr) {
    for ( var i = 0; i< arr.length-1; i++) {
        for ( var j = i+1; j<arr.length;j++) {
            if ( (arr[i] %2 == 0) && (arr[j] %2 ==0) && (arr[i] > arr[j]) ) {
                var aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            } else if ( (arr[i] %2 !== 0) && (arr[j] %2 !==0) && (arr[i] < arr[j]) ) {
                var aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
    return arr;
}

sort ([6, 3, 100, 57, 5, 26]);

//14. 

function binarySearch(arr, x) {
    if (arr.length == 0) {
        return false;
    } else {
        var indexMid = Math.floor(arr.length/2);
        var mid = arr[indexMid];
        if (mid == x) {
            return true;
        } else {
            var arr_left = [...arr].splice(0, indexMid);
            var arr_right = [...arr].splice(indexMid, arr.length - 1);
            if (x < mid) {
                return binarySearch(arr_left, x);
            } else {
                return binarySearch(arr_right, x);
            }
      }
    }
}

binarySearch([1, 3, 7, 9, 13], 71);

//15.

var globalCount = 0

function binarySearchLog(arr, x) {
    globalCount++;
    if (arr.length == 0) {
        return false+" - Functia s-a rulat recursiv de "+globalCount+" ori";
    } else {
        var indexMid = Math.floor(arr.length/2);
        var mid = arr[indexMid];
        if (mid == x) {
            return true+" - Functia s-a rulat recursiv de "+globalCount+" ori";
        } else {
            var arr_left = [...arr].splice(0, indexMid);
            var arr_right = [...arr].splice(indexMid, arr.length - 1);
            if (x < mid) {
                return binarySearchLog(arr_left, x);
            } else {
                return binarySearchLog(arr_right, x);
            }
      }
    }
    console.log(i);
}

binarySearchLog([1, 3, 7, 9, 13], 71);
