function fizzBuzz(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]%3==0){
            arr[i]="Fizz";
        }
        if(arr[i]%5==0){
            arr[i]="Buzz";
        }
    }
    return arr;
}