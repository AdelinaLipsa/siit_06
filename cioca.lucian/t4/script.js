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