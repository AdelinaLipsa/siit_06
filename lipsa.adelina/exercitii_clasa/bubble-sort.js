/*Big O Notation - simple and good for small datasets
    O(N)- linear graph, more items, more time
    O(n^2) - exponential growth in time
                more items, more operations
*/

//loop = number of array items
//for loop number
//for all items in list
//compare adjacent items
//swap
function bubbleSort(arr) {
    const loop = arr.length;
    //loop for loop length
    for (let i = 0; i < loop; i++) {
        //cycle through arr items
        for (let j = 0; j < loop; j++) {
            //compare adjacent items
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            console.log(arr);//to see the sorting
        }
    }
    return arr;
}
bubbleSort([14, 33, 27, 35, 10, 56, 101]);