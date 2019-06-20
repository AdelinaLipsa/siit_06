function cifre() {
	var x = document.getElementById('text1').value;
	var z = '';
	for ( var i = 0; i < x.length; i++) {
		if (x[i] >= 0 && x[i] <=9 ){
			z = z + x[i];
		}
	}
	document.getElementById('demo1').innerHTML = z;
}

function litere() {
	var x = document.getElementById('text2').value;
	var z = '';
	for ( var i = 0; i < x.length; i++) {
		if (x[i] >= 'a' && x[i] <='z' || x[i] >= 'A' && x[i] <='Z'  ){
			z = z + x[i];
		}
	}
	document.getElementById('demo2').innerHTML = z;
}

function litere5() {
	var x = document.getElementById('text3').value;
	var z = '';
	var p = 0 ;
	for ( var i = 0; i < x.length; i++) {
		if (x[i] >= 'a' && x[i] <='z' || x[i] >= 'A' && x[i] <='Z'  ){
			z = z + x[i];
			p++
		}
		if ( p == 5){
			break;
		}
	}
	document.getElementById('demo3').innerHTML = z;
}

function sirConcatenat() {
	var x = document.getElementById('text4').value;
	var z = x.split(" ");
	var p = '';
	for ( var i = 0; i < z.length; i++){
		p = p + z[i];
	}
	document.getElementById('demo4').innerHTML = p;
}

function cifreSir() {
	var x = document.getElementById('text5').value;
	var z = x.split(" ");
	var p = '';
	for ( var i = 0; i < z.length; i++){
		for ( var j = 0; j < z[i].length; j++) {
			if (z[i][j] >= 0 && z[i][j] <=9 ){
				p = p + z[i][j];
			}
		}
	}
	document.getElementById('demo5').innerHTML = p;
}

function inversSir() {
	var x = document.getElementById('text6').value;
	var z = x.split(" ");
	var p = '';
	var a = [];
	for ( var i = 0; i < z.length; i++){
		for ( var j = z[i].length-1; j >= 0; j--) {
			p = p + z[i][j];
		}
		a.push(p);
		p = '';
	}	
	document.getElementById('demo6').innerHTML = a;
}
function factorial() {
	var n = document.getElementById('num7').value;
	var produs = 1;

	for ( var i = 1; i <= n; i++){
		produs = produs * i;
		
	}
	document.getElementById('demo7').innerHTML = produs;
}

function cmmdc() {
	var x = document.getElementById('num8').value;
	var z = document.getElementById('num88').value;

	do {
		var r = x % z;
		x = z;
		z = r;
	} while (z != 0);
	document.getElementById('demo8').innerHTML = x;
}
function cmmmc() {
	var a = document.getElementById('num9').value;
	var b = document.getElementById('num99').value;
	var x = a;
	var z = b;

	do {
		var r = x % z;
		x = z;
		z = r;
	} while (z != 0);

	var p = a * b;
	document.getElementById('demo9').innerHTML = p/x;
}

function divizori() {
	var x = document.getElementById('num10').value;
	var a = [];
	for ( var i = 2; i <= x/2; i++) {
		if (x % i ==0){
			a.push(i);
		}
	}
	document.getElementById('demo10').innerHTML = a;
}

function palindroM() {
	var x =document.getElementById('num11').value;
	var a = x;
	var p = 0;
	console.log(x);
	do {
		var i = x % 10;
		p = p * 10 + i;
		x= Math.floor(x / 10);
	} while (x != 0);

	if ( a == p){
		document.getElementById('demo11').innerHTML = 'Cuvantul este palindrom';
	} else {
		document.getElementById('demo11').innerHTML = 'Cuvantul nu este palindrom';
	}

}

function arrayCreate(t) {
	
    let txt = document.getElementById(t).value; 
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

function primeNumbers() {
	var x = arrayCreate('text12');
	var prime = [];

	for ( var i = 0; i < x.length; i++ ){
		if ( x[i] % 2 == 0 ){
			prime.push(x[i]);
		}
	}
	document.getElementById('demo12').innerHTML = prime;
}

function arraySort (x) {
	for ( var i = 0; i < x.length; i++ ) {
		for ( var j = i+1; j < x.length; j++ ){
			if ( x[i] % 2 != 0) {
				var z = x[i];
				x[i] = x[j];
				x[j] = z;
			}
		}
	}
}

function midIndex(x) {
	var p = 0;
	for ( i = 0; i < x.length; i++ ){
		if ( x[i] % 2 == 0 ) {
			p++;
		} else {
			break;
		}
	}
	return p;
}

function numbersSort(x) {
	var x = arrayCreate('text13');
	console.log(x);
	arraySort(x);
	var p = midIndex(x);
	console.log(p);
	
	for ( var i = 0; i < p; i++ ) {
		for ( var j = i+1; j < p; j++ ){
			if ( x[i] > x[j]) {
				var z = x[i];
				x[i] = x[j];
				x[j] = z;
			}
		}
	}

	for ( var i = p; i < x.length; i++ ) {
		for ( var j = i+1; j <x.length; j++ ){
			if ( x[i] < x[j]) {
				var z = x[i];
				x[i] = x[j];
				x[j] = z;
			}
		}
	}
	document.getElementById('demo13').innerHTML = x;
}
var binaryTimes = 0; 

function binaryY(x, t) {
	binaryTimes++;

	if(x.length == 0) {
		return false;
    } else {
		var indxMid = Math.floor(x.length / 2);
		var mid = x[indxMid];		
		if (mid == t) {
			return true;
        } else {
			var arr_left = [...x].splice(0, indxMid);
			var arr_right = [...x].splice(indxMid, x.length-1);
        	if (t < mid) {
				return binaryY(arr_left, t);
            } else {
				return binaryY(arr_right, t);
            }
		}
    }
}

function searchNum() {
	var x = arrayCreate('text14');
	var t = document.getElementById('num14').value;
	var z = binaryY(x,t);

	if ( z == true){
		document.getElementById('demo14').innerHTML = 'Numarul se afla in array';
	} else {
		document.getElementById('demo14').innerHTML = 'Numarul nu se afla in array';
	}

}

function searchPoz() {
	var x = arrayCreate('text15');
	var t = document.getElementById('num15').value;
	var z = binaryY(x,t);

	if ( z == true){
		document.getElementById('demo15').innerHTML = binaryTimes;
		binaryTimes = 0;
	} else {
		document.getElementById('demo15').innerHTML = 'Numarul nu se afla in array';
	}

}
