var arr = [10,13,17,28];
var x = 13;
var ok = 0;
for (n = arr.length; n>=0; n--){
    if (x == arr[n]){
        console.log("x este in arr");
        ok = 1; 
    }
}
if (ok!=1){
    console.log("x nu este in arr");
}