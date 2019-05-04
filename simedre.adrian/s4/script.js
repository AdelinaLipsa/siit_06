// 1.O functie care primeste un sir de caractere si returneaza cifrele din sirul respectiv
function extractNumber(){
    var x = document.getElementById("text1").value;
    var numbers = x.match(/\d+/g).map(Number);
    document.getElementById("demo1").innerHTML = numbers;
}
function extractNumber2(){
    var x = document.getElementById("text1").value;
    var xArr = x.split('');
    var numbers = [];
    for (var i = 0; i < xArr.length; i++){
        var y = xArr[i];
        if (isNaN(y)){
        } else {
            numbers.push(y);
        }
    }
    document.getElementById("demo2").innerHTML = numbers;
}
//2.O functie care primeste un sir de caractere si returneaza doar literele din sirul respectiv
function extractLetters(){
    var x = document.getElementById("text2").value;
    var xArr = x.split('');
    var numbers = [];
    for (var i = 0; i < xArr.length; i++){
        var y = xArr[i];
        if (isNaN(y)){
            numbers.push(y);
        }
    }
    document.getElementById("demo3").innerHTML = numbers;
}
//3.O functie care primeste un sir de caractere si returneaza primele 5 litere(daca exista)
function extractFirst5Letters(){
    var x = document.getElementById("text3").value;
    var xArr = x.split('');
    var numbers = [];
    for (var i = 0; i < xArr.length; i++){
        var y = xArr[i];
        if (isNaN(y)){
            numbers.push(y);
        }
    }
    document.getElementById("demo4").innerHTML = numbers.slice(0,5);
}
//4.O functie care primeste o lista de siruri de caractere si returneaza sirurile concatenate
function concatenate(){
    var a = document.getElementById("text4").value;
    var b = document.getElementById("text5").value;
    var c = document.getElementById("text6").value;
    var d = document.getElementById("text7").value;
    document.getElementById("demo5").innerHTML = a + b + c +d;
}
function concatenate2(){
    var e = document.getElementsByClassName("concatenate");
    var f ='';
    for ( var i = 0; i < e.length; i++){
        f += e[i].value;
    }
    document.getElementById("demo6").innerHTML = f;
}
//5.O functie care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile
function numList(){
    var e = document.getElementsByClassName("numList");
    var f ='';
    for ( var i = 0; i < e.length; i++){
        f += e[i].value;
    }
    var fArr = f.split('');
    var numbers = [];
    for (var i = 0; i < fArr.length; i++){
        var y = fArr[i];
        if (isNaN(y)){
        } else {
            numbers.push(y);
        }
    }
    document.getElementById("demo7").innerHTML = numbers;
}
//6.O functie care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate
function strListRev(){
    var e = document.getElementsByClassName("strListRev");
    var f =[];
    for ( var i = 0; i < e.length; i++){
        g = e[i].value;
        h = g.split('').reverse().join('');
        f.push(h);
    }
    document.getElementById("demo8").innerHTML = f;
}
// 7.Calculeaza factorialul unui numar
function factorial(){
    var e = document.getElementById("num1").value;
    var prod = 1;
    var x = 1;
    while ( x <= e){
        prod = prod * x;
        x = x + 1;
    }
    document.getElementById("demo9").innerHTML = prod;
}
// 8.Calculeaza cel mai mare divizor comun al 2 numere
function div() {
    var a = document.getElementById("num2").value;
    var b = document.getElementById("num3").value;
    var R ;
    while ((a % b) > 0){
        R = a % b;
        a = b;
        b = R;
    }
    document.getElementById("demo10").innerHTML = b;
}
// 9.Calculeaza cel mai mic multiplu comun al 2 numere
function lcm_two_numbers() {
    var x = document.getElementById("num4").value;
    var y = document.getElementById("num5").value;
    if ((typeof Number(x) !== 'number') || (typeof Number(y) !== 'number')) {
        return false;
    } else {
        document.getElementById("demo11").innerHTML = (!x || !y) ? 0 : Math.abs((x * y) / div2());
    }
 }
 
 function div2() {
    var x = document.getElementById("num4").value;
    var y = document.getElementById("num5").value;
   x = Math.abs(x);
   y = Math.abs(y); 
   while(y) {
     var t = y;
     y = x % y;
     x = t;
   }
   return x;
 }
 // 10.Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32])
 function allDiv() {
    var x = document.getElementById("num6").value;
	if (x < 1)
		alert = "Argument error";
	var small = [];
	var large = [];
	var end = Math.floor(Math.sqrt(x));
	for (var i = 1; i <= end; i++) {
		if (x % i == 0) {
			small.push(i);
			if (i * i != x)
				large.push(x / i);
		}
	}
	large.reverse();
    document.getElementById("demo12").innerHTML = small.concat(large);
}
// 11.O functie care verifica daca un numar este palindrom (ex: 121, 1234321)
function isPalindrome (){
    var a = document.getElementById("num7").value;
    var reverseA = a.split('').reverse().join('');
    if ( reverseA === a ){
        document.getElementById("demo13").innerHTML = "Rezultat:</br> "+ "Valoarea " + a + " este palindrom.";
    } else {
        document.getElementById("demo13").innerHTML = "Rezultat:</br> "+ "Valoarea " + a + " nu este palindrom.";
    }
}
// 12.O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru.
function par() {
    var x = document.getElementById("num8").value;
    var y = x.split('');
    var par=[] ;
    for ( var i = 0; i < y.length; i++){
        if (y[i] % 2 == 0){
            par.push(y[i]);
        }
    }
    document.getElementById("demo14").innerHTML = "Rezultat:</br> "+ par;
}
// 13.O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru.
// acelasi array?
function sortAZ(){
    var a = document.getElementById("num9").value;
    var b = document.getElementById("num10").value;
    var c = document.getElementById("num11").value;
    var d = document.getElementById("num12").value;
    var e = document.getElementById("num13").value;
    var f = document.getElementById("num14").value;
    var g = document.getElementById("num15").value;
    var h = document.getElementById("num16").value;
    var y = [a, b, c, d, e, f, g, h];
    var par = [];
    var impar = [];
    for ( var i = 0 ; i <= y.length ; i++){
        if ( y[i] % 2 == 0 ){
            par.push(y[i]);
        } else {
            impar.push(y[i]);
        }
    }
    function numberAs(m,n) {
        return m-n;
    }
    impar.sort(numberAs);
    document.getElementById("demo15").innerHTML = "Rezultat:</br> "+ par.sort(numberAs) + "si" + impar.reverse();
}
// 14.O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. 
function binar(){
    var a = document.getElementById("num17").value;
    var b = document.getElementById("num18").value;
    var c = document.getElementById("num19").value;
    var d = document.getElementById("num20").value;
    var e = document.getElementById("num21").value;
    var f = document.getElementById("num22").value;
    var g = document.getElementById("num23").value;
    var arr = [a, b, c, d, e, f, g];
    var x = document.getElementById("num24").value;
    function numberAs(m,n) {
        return m-n;
    }
    arr.sort(numberAs);    
    function transformToNr(a) {
        for(var i=0;i<a.length;i++) {
            a[i] = Number(a[i]);
        }
    }
    transformToNr(arr);
    document.getElementById("demo16").innerHTML = arr;
    function binary_Search(arr, x){
        var right = arr.length - 1;
        var left = 0;
        var mid = 0;
        while (left <= right){
            mid = Math.floor((right + left) / 2);
            if ( arr[mid] == x){
                return arr[mid];
            } else if (x > arr[mid]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
    if (binary_Search(arr, x) < 0){
        document.getElementById("demo17").innerHTML = "negasit";
    } else {
        document.getElementById("demo17").innerHTML = "gasit";
    }
}
// 15. O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa puteti afisa de cate ori s-a apelat functia recursiv. (hint: puteti folosi 2 functii sau variabila globala)
function binarShow(){
    var a = document.getElementById("num32").value;
    var b = document.getElementById("num25").value;
    var c = document.getElementById("num26").value;
    var d = document.getElementById("num27").value;
    var e = document.getElementById("num28").value;
    var f = document.getElementById("num29").value;
    var g = document.getElementById("num30").value;
    var arr = [a, b, c, d, e, f, g];
    var x = document.getElementById("num31").value;
    var k = 0;
    function numberAs(m,n) {
        return m-n;
    }
    arr.sort(numberAs);
    document.getElementById("demo19").innerHTML = arr;
    function transformToNr(a) {
        for(var i=0;i<a.length;i++) {
            a[i] = Number(a[i]);
        }
    }
    function transformToNr(a) {
        for(var i=0;i<a.length;i++) {
            a[i] = Number(a[i]);
        }
    }
    transformToNr(arr);
    function binary_Search(arr, x){
        console.log(arr);
        var right = arr.length - 1;
        var left = 0;
        var mid = 0;
        while (left <= right){
            k++;
            mid = Math.floor((right + left) / 2);
            if ( arr[mid] == x){
                return arr[mid];
            } else if (x > arr[mid]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
    if (binary_Search(arr, x) < 0){
        document.getElementById("demo18").innerHTML = "Valoare negasita.</br>Apelarea functiei de: "+ k +" ori";
    } else {
        document.getElementById("demo18").innerHTML = "Valoare gasita.</br>Apelarea functiei de: "+ k +" ori";
    }
}