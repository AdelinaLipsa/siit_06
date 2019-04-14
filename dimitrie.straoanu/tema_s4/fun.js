
var testArr = [3, 5, 6, 29, 1, 8, 9, 4, 17];

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

bubbleSort(testArr);

function binarySearch(arr, n) {

    if (arr.length === 0) return false;
    if (arr.length ===1 && n !== arr[0]) return false;

    var midIndex = Math.floor(arr.length / 2);

    if (n === arr[midIndex]) return true;

    var leftArr = arr.slice(0, midIndex);
    var rigthArr = arr.slice(midIndex);

    if (n > arr[midIndex]) {
        return binarySearch(rigthArr, n);
    } else {
        return binarySearch(leftArr, n);
    }

}

binarySearch(testArr,2);