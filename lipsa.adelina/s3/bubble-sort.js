var arr= [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function bubbleSort(arr) {
    var swapp;
    do {
        swapp= false;
        for (var i=0; i<arr.length-1; i++) {
            if (arr[i]>arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapp=true;
            }
        }
    } while(swapp);
}

bubbleSort(arr);
console.log(arr);

