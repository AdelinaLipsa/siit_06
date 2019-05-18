function sort(a) {
    var sorted = [];

    if (a.length > 0) {
        if (a.length == 1) {
            sorted = a;
        } else {
            var midIndex = Math.floor(a.length / 2);
            var left = a.slice(0, midIndex);
            var right = a.slice(midIndex, a.length);

            var sortedLeft = sort(left);
            var sortedRight = sort(right);

            var sorted = merge(sortedLeft, sortedRight);
        }
    }
    return sorted;
}
console.log(sort([1,10,3,20]))