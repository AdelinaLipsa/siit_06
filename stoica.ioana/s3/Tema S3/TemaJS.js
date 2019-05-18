//1. 

var x;
var y;
console.log(x===y);

//2.

var x;
var y;
if (x==y) {
    console.log("0");
} else if (x<y) {
    console.log("-1");
} else {
    console.log("1");
}

//3.

var x;
var y;
if (x>y) {
    console.log(x);
} else {
    console.log(y);
}

//4.

var x;
var y;
if (x<y) {
    console.log(x);
} else {
    console.log(y);
}

//5.

var n; 
var s = 0;
for (i = 0; i <= n; i++) {
s= s + i;
}
console.log(s);

//6.

var n;
var prim = 0;
for (i = 2; i < n; i++) {
	if (n %i == 0) { 
        console.log("n nu este numar prim");
        prim = 1;
        break;
    } 
}

if(prim != 1){
    console.log("n este numar prim")
}

//7.

var n; 
var sum = 0;

for (i=2; i<n; i++){

    var prim = 0;
    for (j=2; j<i; j++){
        if(i%j === 0){
            prim = 1;
        }
    }

    if(prim != 1){
        sum +=i ;
    }

}
console.log(sum);

//8.

var string;
var stringNou = "";
for (n = string.length - 1; n >= 0; n--) {
    stringNou += string[n];
}

//9.

var n;
var p = 1;
for (i = 0; i <= n; i++) {
	if (i%2 != 0) { 
		p = p * i;
	} 
}

//10.

var array = [3, 6, 11, 89];
var x  = 6;
var contor = 0;
for (n = array.length - 1; n >= 0; n--) {
    if (x == array[n]) {
        console.log("x exista in array.");
        contor = 1;
    } 
}

if (contor!= 1) {
    console.log("x nu exista in array.");
}

//11.

var array = [98, 3, 657, 11, 89];
var max = 0;

for (i = 0; i <= array.length -1; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max);

//12.

var array = [98, 3, 657, 11, 89];
var max = array[0];
var min = array[0];

for (i = 1; i <= array.length -1; i++) {
    if (array[i] > max) {
        max = array[i];
    } else if (array[i] < min) {
        min = array[i];
    }   
}
console.log("Maximul este" +" " + max);
console.log("Minimul este"+ " " + min);
console.log("Suma este" + " " + (max + min));

//13.

var array = [7, "abc", 6, 7, "gh", "abc", 0, 9, 9, "abc"];
var contor = 0;
for (i = 0; i <= array.length -1; i++) {
    for (j = i +1; j <= array.length - 1; j++) {
        if (array[i] == array[j]) {
            contor = contor + 1;
        }
    }
}
if (contor >0) {
    console.log("Exista duplicate.");
}

//14.

var array = [1, -3, 2, -2, -89, 3];
var p = 1;

for (i = 0; i<=array.length - 1; i++) {
    if (array[i] >= 0) {
        p = p * array[i];
    }
} console.log(p);

//15.

var string = "abcba";
var stringNou = "";
for (n = string.length - 1; n >=0; n--) {
    stringNou += string[n];
}
if (stringNou == string) {
    console.log("String-ul este palindrom.");
} else {
    console.log("string-ul NU este palindrom.");
}
