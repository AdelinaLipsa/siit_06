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

// ex clasa 

function bubbleSort(arr){
	var aux;
	for(let i=0; i<arr.length-1; i++){
		for(var j=i+1; j<arr.length; j++){
			if(arr[i]<arr[j]]){
				arr[i] = aux;
				arr[i] = arr[j];
				arr[j] = aux;
			}
		}
	}
