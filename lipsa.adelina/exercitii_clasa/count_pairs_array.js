function countPairs(arr) {

    var pairs = 0;

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == 0) {
                pairs++;
            }
        }
    }
    return pairs;
}
 console.log(countPairs([3,2,-3,8,-2,0]));