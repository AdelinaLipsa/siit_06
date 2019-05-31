//Single line function for getting faster elements
var getElement = (element) => document.getElementsByClassName(element);

/*Tema 1
O functie care primeste un sir de caractere si returneaza cifrele din sirul respectiv*/
function sirNr(string) {
  let x = '';

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < 10; j++) {
      if (string[i] == j) {
        x += string[i] + ' ';
      }
    }
  }
  return x;
}
/*DOM T1*/
var tema1 = getElement("button")[0].onclick = function() {
  let inputValue = getElement("inputValue")[0].value;
  getElement("result")[0].innerText = sirNr(inputValue);
}

/*Tema 2
O functie care primeste un sir de caractere si returneaza doar literele din sirul respectiv*/
function sirLit(numbers) {
  let litere = /[A-Za-z]/,
    x = '';

  for (let index = 0; index < numbers.length; index++) {
    if (litere.test(numbers[index])) {
      x += numbers[index];
    }
  }
  return x;
}

/*DOM T2*/
var tema2 = getElement("button")[1].onclick = function() {
  let inputValue = getElement("inputValue")[1].value;
  getElement("result")[1].innerText = sirLit(inputValue);
}

/*Tema 3
O functie care primeste un sir de caractere si returneaza primele 5 litere(daca exista)*/
function sirDe5litere(y) {

  y = sirLit(y);
  if (y.length >= 5) {
    return y.slice(0, 5);
  } else {
    return;
  }
}

/*DOM T3*/
var tema3 = getElement("button")[2].onclick = function() {
  let inputValue = getElement("inputValue")[2].value;
  getElement("result")[2].innerText = sirDe5litere(inputValue);
}

/*Tema 4
O functie care primeste o lista de siruri de caractere si returneaza sirurile concatenate*/
function listSir(sirList) {
  var sir = '';

  for (var i = 0; i < sirList.length; i++) {
    sir += sirList[i];
  }
  return sir;
}

/*DOM T4*/
var tema4 = getElement("button")[3].onclick = function() {
  let inputValue = getElement("inputValue")[3].value;
  inputValue = inputValue.split(",");
  getElement("result")[3].innerText = listSir(inputValue);
}

/*Tema 5
O functie care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile*/
function listCifre(lista) {
  var sir = '';
  for (let i = 0; i < lista.length; i++) {
    sir += sirNr(lista[i]);
  }
  return sir;
}

/*DOM T5*/
var tema5 = getElement("button")[4].onclick = function() {
  let inputValue = getElement("inputValue")[4].value;
  inputValue = inputValue.split(",");
  getElement("result")[4].innerText = listCifre(inputValue);
}

/*Tema 6
O functie care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate*/
function reverseArray(list) {
  var arr = [];
  for (let i = list.length - 1; i >= 0; i--) {
    var element = list[i];
    var invert = '';
    for (let j = element.length - 1; j >= 0; j--) {
      invert += element[j];
    }
    arr.push(invert)
  }
  return arr;
}

/*DOM T6*/
var tema6 = getElement("button")[5].onclick = function() {
  let inputValue = getElement("inputValue")[5].value;
  inputValue = inputValue.split(",");
  getElement("result")[5].innerText = reverseArray(inputValue);
}

/*Tema 7
Calculeaza factorialul unui numar*/
var factorial = (fact) => (fact == 1) ? fact : (fact * factorial(fact - 1));

/*DOM T7*/
var tema7 = getElement("button")[6].onclick = function() {
  let fact = getElement("inputValue")[6].value;
  getElement("result")[6].innerText = factorial(fact);
}

/*Tema 8
Calculeaza cel mai mare divizor comun al 2 numere*/
function cmmdc(x, z) {

  do {
    var rest = x % z;
    x = z;
    z = rest;
  } while (z != 0);
  return x;
}

/*DOM T8*/
var tema8 = getElement("button")[7].onclick = function() {
  let nr1 = getElement("inputValue")[7].value;
  let nr2 = getElement("inputValue")[8].value;
  getElement("result")[7].innerText = cmmdc(nr1, nr2);
}

/*Tema 9
Calculeaza cel mai mic multiplu comun al 2 numere*/
var cmmmc = (x, z) => (x * z / cmmdc(x, z))

/*DOM T9*/
var tema9 = getElement("button")[8].onclick = function() {
  let nr1 = getElement("inputValue")[9].value;
  let nr2 = getElement("inputValue")[10].value;
  getElement("result")[8].innerText = cmmmc(nr1,nr2);
}

/*Tema 10
Returneaza un array care sa contina toti divizorii unui numar(ex pentru 64: trebuie sa returneze[2, 4, 8, 16, 32])*/
function divizoriiLu64(div) {

  var arr = [];
  for (var i = 1; i <= div; i++) {
    if (div % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

/*DOM T10*/
var tema10 = getElement("button")[9].onclick = function() {
  let divizor = getElement("inputValue")[11].value;
  getElement("result")[9].innerText = divizoriiLu64(divizor);
}

/*Tema 11
O functie care verifica daca un numar este palindrom(ex: 121, 1234321)*/
function palindromNr(nr) {
  var initial, value, revers = 0;
  initial = nr;

  while (nr != 0) {
    value = nr % 10;
    revers = (revers * 10) + value;
    nr = parseInt(nr / 10);
  }
  return (initial === revers) ? 'Palindrome' : 'Not palindrome';
}

/*DOM T11*/
var tema11 = getElement("button")[10].onclick = function() {
  let nr = getElement("inputValue")[12].value;
  getElement("result")[10].innerText = palindromNr(nr);
}

/*Tema 12
O functie care sorteaza numerele pare dintr - un sir de numere primit ca parametru.*/
function evenString(arr) {
  var list = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) list.push(arr[i])
  }
  return list;
}

/*DOM T12*/
var tema12 = getElement("button")[11].onclick = function() {
  let string = getElement("inputValue")[13].value;
  getElement("result")[11].innerText = evenString(string);
}

/*Tema 13
O functie care primeste ca parametru un array de numere.
Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru.*/
function sortArray(arr) {
  var list = [], odd = [], even = [];

  for (let i = 0; i <arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
      even.sort(function(a,b){return a-b});
    } else {
      odd.push(arr[i]);
      odd.sort(function(a,b){return b-a});
    }
    list = even.concat(odd);
  }  
  return list;
}

/*DOM T13*/
var tema13 = getElement("button")[12].onclick = function() {
  let array = getElement('inputValue')[14].value;
  array = array.split(",");
  getElement("result")[12].innerText = sortArray(array);
}

/*Tema 14
O functie care primeste 2 parametri(un array si un numar).Folosind binary search verificati daca numarul primit ca parametru se gaseste in array.*/
function binarySort(arr, x) {
  if (typeof counter !== 'undefined') {
    counter++;
  }
  if (arr.length == 0) return false;
  else {
    var indexMid = Math.floor(arr.length / 2);
    var mid = arr[indexMid];
    if (mid === x) return true;
    else {
      var arrLeft = arr.slice(0, indexMid);
      var arrRight = arr.slice(indexMid, arr.length - 1);
      if (x < mid) return binarySort(arrLeft, x);
      else return binarySort(arrRight, x);
    }
  }
}

/*DOM T14*/
var tema14 = getElement("button")[13].onclick = function() {
  let arr = getElement("inputValue")[15].value;
  let x = getElement("inputValue")[16].value;
  arr = arr.split(",");
  getElement("result")[13].innerText = binarySort(arr, x);
}

/*Tema 15
O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr - un array.Dupa ce se termina executia functiei trebuie sa puteti afisa de cate ori s - a apelat functia recursiv.(hint: puteti folosi 2 functii sau variabila globala)*/
function counterBinarySort(arr, x) {
  counter = 0;
  binarySort(arr, x);
  return counter;
}


/*DOM T15*/
var tema15 = getElement("button")[14].onclick = function() {
  let arr = getElement("inputValue")[17].value;
  let x = getElement("inputValue")[18].value;
  arr = arr.split(",");
  getElement("result")[14].innerText = counterBinarySort(arr, x);
}