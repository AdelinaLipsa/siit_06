
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


function invers() {
  var str = document.getElementById('myString').value;
  var n = str.length;
  var newstr = '';
  for (var i = n-1; i >= 0; i--){
  	newstr =newstr + str[i];
  }
  document.getElementById('demo8').innerHTML = newstr;
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

var a = [];

function addTo() {
	   a.push(document.getElementById("userinput").value);
	   console.log(a);
	  // console.log(a)
	  document.getElementById('userinput').value = '';
	  console.log(a.length);
	  return a;
	}

function arr(a,n) {

	var n = document.getElementById('arrayN').value;
	var x = 0;

	for ( var i = 0; i < a.length; i++ ) {
		if ( a[i] == n ) {
			x++;
		}
	}

	if ( x == 0 ) {
		document.getElementById('demo10').innerHTML = 'Numarul nu se afla in array';
	} else {
		document.getElementById('demo10').innerHTML = 'Numarul se afla in array';
	}
}
 
	