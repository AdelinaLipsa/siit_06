
function myFunction1() {
	var a = document.getElementById('myNumber1').value;
	var b = document.getElementById('myNumber2').value;
	
	if ( a == b ){
		document.getElementById("demo1").innerHTML = "true";
	}else {
		document.getElementById("demo1").innerHTML = "false";
	} 
}

function myFunction2() {
	var a = document.getElementById('myNumber1').value;
	var b = document.getElementById('myNumber2').value;
	
	if ( a < b ){
		document.getElementById("demo2").innerHTML = "-1";
	}else if ( a > b ){
		document.getElementById("demo2").innerHTML = "1";
	} else {
		document.getElementById("demo2").innerHTML = "0";
	}
}

function myFunction3(a, b) {
	var a = document.getElementById('myNumber1').value;
	var b = document.getElementById('myNumber2').value;
	
	if ( a > b ){
		document.getElementById("demo3").innerHTML = a ;
	}else {
		document.getElementById("demo3").innerHTML = b ;
	}
}

function myFunction4(a, b) {
	var a = document.getElementById('myNumber1').value;
	var b = document.getElementById('myNumber2').value;
	
	if ( a < b ){
		document.getElementById("demo4").innerHTML = a ;
	}else {
		document.getElementById("demo4").innerHTML = b ;
	}
}

function myFunction5() {
	var n = document.getElementById('myNumberN').value;
	var sum = 0;

	for( var i = 1; i <= n; i++){
		sum = sum + i;
	}
	
	document.getElementById('demo5').innerHTML = sum;
}

function numarPrim(n) {
	var m = 0;

	if ( n < 2 ){
		return false;
	} else if (n == 2) {
		return true;
	} else {
		for ( var i = 2; i <= n/2; i++) {
			if ( n % i ==0){
				m++;
			}
		}
		
		if (m == 0){
			return true;
		} else {
			return false;
		}
	}
}
function prim(n){
	var n = document.getElementById('myNumberN').value;
	
	if (numarPrim(n)==true){
		document.getElementById('demo6').innerHTML = 'Numarul este prim';
	} else {
		document.getElementById('demo6').innerHTML = 'Numarul nu este prim';
	}		
}

function primeSum() {
	var n = document.getElementById('myNumberN').value;
	sum1 = 0;

	for ( var i = 1; i <= n ; i++) {
		if (numarPrim(i) == true){
			sum1 = sum1 + i;
		}
	}

	document.getElementById("demo7").innerHTML = sum1;
}


function inversStr(str) {
  var n = str.length;
  var newstr = '';
  for (var i = n-1; i >= 0; i--){
  	newstr =newstr + str[i];
  }
  return newstr;
}

function invers() {
	var str = document.getElementById('myString').value;
	let x = inversStr(str);
	document.getElementById('demo8').innerHTML = x;
}


function pro() {
	var n = document.getElementById('numberN').value;
	var produs = 1;

	for ( var i = 1; i <= n; i++){
		if( i % 2 != 0){
			produs = produs * i;
		}
	}
	document.getElementById('demo9').innerHTML = produs;
}
// ex 10

function arrayCreate() {
    let txt = document.getElementById('userinput').value; 
    let p = 0;
    let np= 0;
    let a = [];
    let b = txt.length;

    for (let i = 0; i < b; i++){
        if ( txt[i] == ','|| txt[i]==' '){
            np = i;
            let t = txt.slice(p,np);
            p = np+1;
            a.push(Number(t));
        } 
    }
    let x = txt.slice(p,b);
    a.push(Number(x));
    return a;

}

function arrayFind() {
    let arr = arrayCreate();
    let n = document.getElementById('arrayN').value;
    let p = 0;
    for ( let i = 0; i < arr.length; i++){
        if ( arr[i] == n ){
            p++;
        }
    }
    if (p != 0 ){
        document.getElementById('demo10').innerHTML = 'Numarul se afla in Array!';
    } else {
        document.getElementById('demo10').innerHTML = 'Numarul nu se afla in Array!';
    }
}

//EX 11

function arrayMax () {
	let z = arrayCreate();
	let max = z[0];
	let x = z.length;
    console.log(z);
    for (	let i = 1; i < x; i++){
        if ( z[i] > max ){
            max = z[i];
		}
    }
	return max;
}
function arrayMaxx(){
	let max = arrayMax();
	document.getElementById('demo11').innerHTML = max;
}

function arrayMin () {
	let z = arrayCreate();
	let min = z[0];
	let x = z.length;
    console.log(z);
    for (	let i = 1; i < x; i++){
        if ( z[i] < min ){
            min = z[i];
		}
    }
	return min;
}
// Ex12

function sumMM(){
	let x = arrayMax();
	let y = arrayMin();
	document.getElementById('demo12').innerHTML = x+y;
}

// Ex13

function duplicate(){
	let a = arrayCreate();
	let d = 0;
	for ( let i = 0;i < a.length; i++){
		for ( let j = i+1; j < a.length; j++){
			if ( a[i] == a[j] ){
				d++;
			}
		}
	}
	if ( d == 0){
		document.getElementById('demo13').innerHTML = 'Nu exista duplicate';
	} else {
		document.getElementById('demo13').innerHTML = 'Exista duplicate';
	}
}

// Ex14

function produs(){
	let x = arrayCreate();
	let p = 1;
	for ( let i = 0; i < x.length; i++){
		if ( x[i] > 0 ) {
			p = p * x[i];
			console.log(p);
 		}
	}
	document.getElementById('demo14').innerHTML = p;
	return p;
}

// Ex15

// function palindrom(){
// 	let x = document.getElementById('palindrom').value;
// 	var n = x.length;
// 	var newstr = '';
// 		for (var i = n-1; i >= 0; i--){
// 			newstr =newstr + x[i];
// 		}
// 	if ( x == newstr ){
// 		document.getElementById('demo15').innerHTML = 'Cuvantul este palindrom';
// 	}
// }

function palindrom(t){
	let x = document.getElementById('palindrom').value;
	let p = inversStr(x);
	if ( x == p ){
		document.getElementById('demo15').innerHTML = 'Cuvantul este palindrom';	
	} else {
		document.getElementById('demo15').innerHTML = 'Cuvantul nu este palindrom';	
	}
}
