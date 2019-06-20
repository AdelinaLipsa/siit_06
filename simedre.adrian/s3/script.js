// 1.O functie care compara 2 valori si returneaza true daca sunt egale si false daca nu sunt egale
function compara1() {
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    if ( x == y ){
        document.getElementById("demo1").innerHTML ="Rezultat:</br> "+ x+" = "+y+" TRUE";
    } else {
        document.getElementById("demo1").innerHTML ="Rezultat:</br> "+ x+" = "+y+" FALSE";
    }
}
// 2.O functie care compara 2 valori si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea
function compara2() {
    var x = document.getElementById("number3").value;
    var y = document.getElementById("number4").value;
    if ( x < y ){
        document.getElementById("demo2").innerHTML = "Rezultat:</br> "+ x+" < "+y+" = -1";
    } else if ( x == y ){
        document.getElementById("demo2").innerHTML = "Rezultat:</br> "+ x+" = "+y+" = 0";
    } else if ( x > y ) {
        document.getElementById("demo2").innerHTML = "Rezultat:</br> "+ x+" > "+y+" = 1";
    }
}
// 3.O functie care primeste 2 valori si returneaza maximul dintre cele 2
function compara3() {
    var x = document.getElementById("number5").value;
    var y = document.getElementById("number6").value;
    if ( x > y ){
        document.getElementById("demo3").innerHTML = "Rezultat:</br> "+ x+" > "+y+" = " +x;
    } else if ( x < y ){
        document.getElementById("demo3").innerHTML = "Rezultat:</br> "+ x+" < "+y+" = " +y;
    } else if ( x == y ){
        document.getElementById("demo3").innerHTML = "Rezultat:</br> "+ "Cele doua valori nu trebuie sa fie egale!";
    }
}
// 4.O functie care primeste 2 valori si returneaza minimul dintre cele 2
function compara4() {
    var x = document.getElementById("number7").value;
    var y = document.getElementById("number8").value;
    if ( x > y ){
        document.getElementById("demo4").innerHTML = "Rezultat:</br> "+ x+" > "+y+" = " +y;
    } else if ( x < y ){
        document.getElementById("demo4").innerHTML = "Rezultat:</br> "+ x+" < "+y+" = " +x;
    } else if ( x == y ){
        document.getElementById("demo4").innerHTML = "Rezultat:</br> "+ "Cele doua valori nu trebuie sa fie egale!";
    }
}
// 5.O functie care intoarce suma primelor N numere naturale pozitive
function suma1() {
    var x = document.getElementById("number9").value;
    var sum = 0;
    var y = 1;
    while ( y <= x ){
        sum = sum + y;
        y = y + 1;
    }
    document.getElementById("demo5").innerHTML = "Rezultat:</br> "+ sum;
}
// 6.O functie care verifica daca N este numar prim (restul impartirii la 1 si la N ==0)
function prim() {
    var n = document.getElementById("number10").value; 
	var divizori = 0
	var d = 1
	while (d <= n) {
		if (n % d === 0) {
			divizori++
		}
		d++
	}
	if (divizori === 2) {
        document.getElementById("demo6").innerHTML = "Rezultat:</br> "+ n + " este prim!";
	} else {
        document.getElementById("demo6").innerHTML = "Rezultat:</br> "+ n + " nu este prim!";
	}
}
// 7.O functie care intoarce suma primelor N numere prime
function sumPrimes() {
    var n = document.getElementById("number11").value; 
    let myArr = [];
    function isPrime(n) {
        for(let i = 2; i < n; i++){
            if(n % i === 0){
                return false;
            }
        }
        return n !== 1;
    }
    for(let j = 0; j<= n; j++){
        if(isPrime(j)){
            myArr.push(j);
        }
    }
    for (var x = 0; x < myArr.length; x++){
        document.getElementById("demo7").innerHTML = "Rezultat:</br> "+ "Numerele prime pana la "+n+" sumt : "+myArr;
    }
    let allSum = myArr.reduce((a,b)=> a + b);
    document.getElementById("demo8").innerHTML = "Suma numerelor este: "+allSum;
}
//8.O functie care primeste un parametru de tip string si intoarce inversul acestuia (abc => cba)
function reverseString() {
    var x = document.getElementById("text1").value;
    var y = "";
    for (var i = x.length - 1; i >= 0; i--){
        y += x[i];
    }
    document.getElementById("demo9").innerHTML = "Rezultat:</br> "+ y;
}
//9.O functie care intoarce produsul primelor N numere impare pozitive
function oddSum() {
    var x = document.getElementById("number12").value;
    var sum = 0;
    for ( var i = 0; i <= x; i++){
        if (i % 2 != 0){
            sum = sum + i;
        }
    }
    document.getElementById("demo10").innerHTML = "Rezultat:</br> "+ sum;
}
//10.O functie care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array
// adaugam valorile primite intr-un array
function ver(){
    var x2 = document.getElementById("text2").value;
    var x3 = document.getElementById("text3").value;
    var x4 = document.getElementById("text4").value;
    var x5 = document.getElementById("text5").value;
    var xArray = [];
    var x6 = document.getElementById("text6").value;
    if ( x2 > 0 ){
        xArray.push(x2);
    }
    if ( x3 > 0 ){
        xArray.push(x3);
    }
    if ( x4 > 0 ){
        xArray.push(x4);
    }
    if ( x5 > 0 ){
        xArray.push(x5);
    }
    // verificam daca valoarea noua se afla in array sau nu
    if ( xArray.includes(x6) == true ){
        document.getElementById("demo11").innerHTML = "Rezultat:</br> "+ "Valoarea "+ x6 + " se afla in array.";
    } else {
        document.getElementById("demo11").innerHTML = "Rezultat:</br> "+ "Valoarea "+ x6 + " nu se afla in array";
    }
}
//11.O functie care intoarce maximul dintr-un array primit ca parametru
// adaugam valorile primite intr-un array
function maxLenght(){
    var x7 = document.getElementById("text7").value;
    var x8 = document.getElementById("text8").value;
    var x9 = document.getElementById("text9").value;
    var x10 = document.getElementById("text10").value;
    var xArray = [];
    if ( x7 > 0 ){
        xArray.push(x7);
    }
    if ( x8 > 0 ){
        xArray.push(x8);
    }
    if ( x9 > 0 ){
        xArray.push(x9);
    }
    if ( x10 > 0 ){
        xArray.push(x10);
    }
    // afisare
    var y = Math.max(...xArray);
    document.getElementById("demo12").innerHTML = "Rezultat:</br> "+ y;
}
//12.O functie care intoarce suma dintre max si min, dintr-un array primit ca parametru
function sumMaxMin(){
    var x11 = document.getElementById("number13").value;
    var x12 = document.getElementById("number14").value;
    var x13 = document.getElementById("number15").value;
    var x14 = document.getElementById("number16").value;
    var xArray = [];
    if ( x11 > 0 ){
        xArray.push(x11);
    }
    if ( x12 > 0 ){
        xArray.push(x12);
    }
    if ( x13 > 0 ){
        xArray.push(x13);
    }
    if ( x14 > 0 ){
        xArray.push(x14);
    }
    // afisare
    var y = Math.max(...xArray);
    var z = Math.min(...xArray);
    var x = y + z;
    document.getElementById("demo13").innerHTML = "Rezultat:</br> "+ "Valoarea minima introdusa este "+z;
    document.getElementById("demo14").innerHTML = "Valoarea maxima introdusa este "+y;
    document.getElementById("demo15").innerHTML = "Suma dintre max si min este: "+x;
}
//13.O functie care verifica daca exista duplicate intr-un array primit ca parametru
function duplicate(){
    var x15 = document.getElementById("number17").value;
    var x16 = document.getElementById("number18").value;
    var x17 = document.getElementById("number19").value;
    var x18 = document.getElementById("number20").value;
    xArray = [];
    if ( x15 > 0 ){
        xArray.push(x15);
    }
    if ( x16 > 0 ){
        xArray.push(x16);
    }
    if ( x17 > 0 ){
        xArray.push(x17);
    }
    if ( x18 > 0){
        xArray.push(x18);
    }
    var sorted_xArray = xArray.slice().sort();
    var result = [];
    for ( var i = 0; i < sorted_xArray.length - 1; i++ ){
        if (sorted_xArray[ i + 1] == sorted_xArray[i]){
            result.push(sorted_xArray[i]);
        }
    }
    if ( result.length > 0 ){ 
        document.getElementById("demo16").innerHTML = "Rezultat:</br> "+ "Avem dublura / dubluri: "+result;
    } else {
        document.getElementById("demo16").innerHTML = "Rezultat:</br> "+ "Nu avem dubluri";
    }

}
//14.O functie care intoarce produsul numerelor pozitive intr-un array primit ca parametru
function myProd(){
    var x19 = document.getElementById("number21").value;
    var x20 = document.getElementById("number22").value;
    var x21 = document.getElementById("number23").value;
    var x22 = document.getElementById("number24").value;
    xArray = [];
    if ( x19 > 0 ){
        xArray.push(Number(x19));
    }

    if ( x20 > 0 ){
        xArray.push(Number(x20));
    }
    if ( x21 > 0 ){
        xArray.push(Number(x21));
    }
    if ( x22 > 0){
        xArray.push(Number(x22));
    }
    var prod = 1;
    for (var i = 0; i <= xArray.length - 1; i++) {
        prod = prod * xArray[i];
    }
    document.getElementById("demo17").innerHTML = "Rezultat:</br> "+ prod;
}
//15.O functie care verifica daca un string primit ca parametru este palindrom (inversul == originalul, ex: abcba == abcba, abca != acba
function isPalindrome (){
    var a = document.getElementById("text11").value;
    var b = /[\W_]/g;
    var lowRegA = a.toLowerCase().replace(b, '');
    var reverseA = lowRegA.split('').reverse().join('');
    if ( reverseA === lowRegA ){
        document.getElementById("demo18").innerHTML = "Rezultat:</br> "+ "Valoarea " + a + " este palindrom.";
    } else {
        document.getElementById("demo18").innerHTML = "Rezultat:</br> "+ "Valoarea " + a + " nu este palindrom.";
    }
}




function show(id){
    var x = document.getElementById(id);
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else { 
        x.className = x.className.replace("show", "hiddendiv");
    }
}