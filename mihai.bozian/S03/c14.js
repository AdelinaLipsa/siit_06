var array = [2,6,19,20,48];
var produs = [1];
for (i = 0; i <= array.length; i++){
    if (array[i] >= 0){
        produs = produs * array[i];
    }
} console.log(produs);