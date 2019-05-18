var x;
var y;
console.log(x===y);

//1

var x = 10;
var y = 11;
if (x == y){
    console.log("TRUE")
}else{
    console.log("FALSE")
}

//2

var x = 1;
var y = 2;
if (x<y){
    console.log("-1")
}else if(x==y){
    console.log("0")
}else if(x>y){
    console.log("1")
}

//3

var x = [2,3];

console.log(Math.min(...x));

//4

console.log(Math.max(1,2));


//5

var tema5 = function () {
    var temp = 0;
    for (var i=1; i<=N; i++){
        temp = temp + 1;
    }
    console.log(temp);
}

//6

var tema6 = function(){
    temp=0;
    for (i=2; i<=N; i++){
        if (N % i == 0 && N != i) {
            temp = true; 
        }
    }
    if (temp == true) {
        console.log("NU ESTE NR PRIM");
    } else {
        console.log("NR ESTE PRIM");
    }
}

//7

var tema7 = function() {
    temp=0;
    for (i=2; i<=N; i++) {
        for (a=2; a<=i; a++){
            if (i % a == 0 && i != a){
                text = false; 
                break;
            }else{
                text = true;
            }
        }if (text == true) {
            temp = temp + i;
        }
    }
    console.log("temp");
}

//8

