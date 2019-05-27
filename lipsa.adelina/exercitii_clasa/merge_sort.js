function mergeSort(arr) {

    if (arr.length == 1) {
        return arr;
    } else {
        var midIndex = Math.floor(arr.length / 2);
        var arrLeft = arr.slice(0, midIndex);
        var arrRight = arr.slice(midIndex, arr.length)    
    }
    return merge(mergeSort(arrLeft), mergeSort(arrRight));
}
