var testArr = [3, 5, 6, 29, 1, 8, 9, 4, 17];

//----------------------------------------------------------

function bubbleSort(arr) {

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

console.log(bubbleSort(testArr));

//----------------------------------------------------------

function binarySearch(arr, n) {

    if (arr.length === 0 || arr[0] !== n && arr.length === 1) return false;
    else {

        var midIndex = Math.floor(arr.length / 2);

        if (n === arr[midIndex]) return true;
        else {

            var leftArr = arr.slice(0, midIndex);
            var rightArr = arr.slice(midIndex);

            if (n > arr[midIndex]) return binarySearch(rightArr, n);
            else return binarySearch(leftArr, n);

        }
    }

}

console.log(binarySearch(testArr, 17));

//----------------------------------------------------------

function power(x, n) {

    if (n === 0) return 1;
    else if (n > 0) return x * power(x, n - 1);
    else return 1 / x * power(x, n + 1); // n+1 not n-1, because the value of n will be a negative number input!!!

}

console.log(power(5, 4));

//----------------------------------------------------------

function factorial(x) {

    if (x < 0) return x > 0;
    else if (x === 0) return 1;
    else return x * factorial(x - 1);

}

console.log(factorial(15));

//----------------------------------------------------------

function fizzBuzz(x) {

    if (x > 0) {

        var output = [];

        for (var i = 1; i <= x; i++) {

            var fizzOrBuzz = "";

            if (i % 3 === 0) fizzOrBuzz = "Fizz";

            if (i % 5 === 0) fizzOrBuzz += "Buzz";

            if (fizzOrBuzz) output.push(fizzOrBuzz);
            else output.push(i);
        }

        return output;

    } else return false;
}

console.log(fizzBuzz(35));