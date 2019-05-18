var array=[1,2,3,4,5];
var max=array[0];
var min=array[0];
for (i=0; i<array.length; i++){
    if(array[i]>max){
        max= array[i];
    }else if(array[i]<min)
    min= array[i];
}
console.log(max);
console.log(min);
console.log("suma dintre max si min ="+ (max+min));