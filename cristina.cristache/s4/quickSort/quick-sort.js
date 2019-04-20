function quickSort(arr) {
    var pivot = arr.pop([arr.length - 1 / 2]);
    var left = [];
    var right = [];
    var newArray = [];


    if (arr.length <= 1) {
        return arr;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] <= pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }
    return newArray.concat(quickSort(left), pivot, quickSort(right));

}