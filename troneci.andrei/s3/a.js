var a = 5;
var b = 8;
var N = 6;
var i = 4;

console.log("valoare initiala a=" + a);
console.log("valoare initiala b=" + b);
console.log("valoare initiala N=" + N);

console.log("");

var temaI = function () {
    if (a == b) {
        console.log("tema-punctul-1:" + " " + "true");
    } else {
        console.log("tema-punctul-1:" + " " + "false");
    }

}

temaI();


var temaII = function () {
    if (a == b) {
        console.log("tema-punctul-2:" + " " + "0");
    } else if (a < b) {
        console.log("tema-punctul-2:" + " " + "-1");
    }
    else {
        console.log("tema-punctul-2:" + " " + "1");
    }
}

temaII();


var temaIII = function () {
    if (a == b) {
        console.log("tema-punctul-3:" + " " + a);
    } else if (a < b) {
        console.log("tema-punctul-3:" + " " + b);
    }
    else {
        console.log("tema-punctul-3:" + " " + a);
    }
}

temaIII();

var temaIV = function () {
    if (a == b) {
        console.log("tema-punctul-4:" + " " + a);
    } else if (a < b) {
        console.log("tema-punctul-4:" + " " + a);
    }
    else {
        console.log("tema-punctul-4:" + " " + b);
    }
}

temaIV();

var temaV = function () {
    var temp = 0;
    for (var i = 1; i <= N; i++) {
        temp = temp + i;
    }
    console.log("tema-punctul-5:" + " " + temp);

}

temaV();

var temaVI = function () {
    temp = 0;
    for (i = 2; i <= N; i++) {
        if (N % i == 0 && N != i) {
            temp = true;
        }
    }
    if (temp == true) {
        console.log("tema-punctul-6:" + " " + N + " " + "nu este numar prim");

    } else {
        console.log("tema-punctul-6:" + " " + N + " " + "este numar prim");
    }
}
temaVI();

var temaVII = function () {
    temp = 0;
    for (i = 2; i <= N; i++) {
        /*   console.log("variabila i =" + i);  */

        for (j = 2; j <= i; j++) {

            /*    console.log("variabila j =" + j); */

            if (i % j == 0 && j != i) {
                gage = false;
                break;

            } else {
                gage = true;
            }

            /*    console.log("variabila gage =" + gage); */
        }
        if (gage == true) {
            temp = temp + i;
            /*      console.log(temp + " temp"); */

        }

    }
    console.log("tema-punctul-7:" + " " + "suma este" + " " + temp);
}
temaVII();

var name = "temaVIII"
    function reverseString(str) {
        var strArr = str.split("");
        var reverseStrArray = strArr.reverse();
        console.log(reverseStrArray)
    }
console.log(reverseString("abc")); //cba

var Tema10=function(arr,x) {
    for(a=0; a<arr.length; a++) {
    if (x==arr[a]) {
    console.log("True")}}}

var name = "temaXI"

function largestOfFour(arr){
    arr.forEach(function(arr1){
        return arr1.sort(function(a, b){
            return b - a;
        });
    });
    return arr;
}

console.log(
    largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
);

var TemaXII=function(arr){
    var min=arr[0];
    var max=arr[0];
    for (x=0; x<arr.length; x++) {
    if(arr[x]<min){
    min=arr[x];} 
    if(arr[x]>max) {
    max=arr[x];}}
    console.log(max+min);} 

var temaXIII=function(arr) {
        a=0
        for(x=0; x<arr.length; x++){
        for(a=x+1; a<arr.length; a++) {
        if (arr[x]==arr[a]) {
        console.log(arr[x])}}}}

var  TemaXIV=function(arr){ 
            var a=1;
            for (var i=0; i<arr.length; i++){
            if (arr[i]>0) {
            a=a*arr[i] }} 
            console.log(a);}
        

            for ( var i = 0; i < users.lenght; i++ ) 
    console.log(users[i].sex + "[" + users[i].firstName + users[i].lastName + "]" + " [" + users[i].height + "," + users[i].weight + "]") 

    