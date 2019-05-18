var array=[1,13,24,13,2,2,6];
var duplicate = 0;
for (i=0; i<array.length; i++){
    for (x=i+1; x<= array.length; x++){
        if (array[i] == array[x]){
            duplicate = duplicate + 1;
        }
    }
}
if (duplicate > 0){
    console.log("Exista duplicate");
}