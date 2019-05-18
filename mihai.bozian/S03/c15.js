var string = "abcba";
var stringB = "";
for(n=string.length - 1; n >= 0; n--){
    stringB += string[n];
}
if (stringB == string){
    console.log("String palidrom");
}else{
    console.log("String nepalidrom");
}