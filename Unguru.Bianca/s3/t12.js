var Tema12=function(arr){
    var min=arr[0];
    var max=arr[0];
    for (x=0; x<arr.length; x++) {
    if(arr[x]<min){
    min=arr[x];} 
    if(arr[x]>max) {
    max=arr[x];}}
    console.log(max+min);}