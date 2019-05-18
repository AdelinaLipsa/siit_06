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

sirLit('ab23cd56');

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

sirDe5litere('ab2cde');

/*Tema 4
O functie care primeste o lista de siruri de caractere si returneaza sirurile concatenate*/
function listSir(sirList) {
  var sir = '';

  for (var i = 0; i < sirList.length; i++) {
    sir += sirList[i];
  }
  return sir;
}

listSir(['ab2cde', 'bfdgdhgh', 'ab2cde', 'bfdgdhgh']);

/*Tema 5
O functie care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile*/
function listCifre(lista) {
  var sir = '';
  for (let i = 0; i < lista.length; i++) {
    sir += sirNr(lista[i]);
  }
  return sir;
}
listCifre(['ab23', 'bc43', '43gh', '98yf']);

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

reverseArray(['abc', 'def', 'abc']);

/*Tema 7
Calculeaza factorialul unui numar*/
var factorial = (fact) => (fact == 1) ? fact : (fact * factorial(fact - 1));
factorial(3);

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

cmmdc(8, 4);

/*Tema 9
Calculeaza cel mai mic multiplu comun al 2 numere*/
var cmmmc = (x, z) => (x * z / cmmdc(x, z))
cmmmc(4, 8);

/*Tema 10
Returneaza un array care sa contina toti divizorii unui numar(ex pentru 64: trebuie sa returneze[2, 4, 8, 16, 32])*/
function divizoriiLu64(div) {

  var arr = [];
  for (var i = 1; i <= div; i++) {
    if (div % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

divizoriiLu64(64);

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

palindromNr(121);

/*Tema 12
O functie care sorteaza numerele pare dintr - un sir de numere primit ca parametru.*/
var arr = '123456789';

function evenString(arr) {

  var list = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) list.push(arr[i])
  }
  return list;
}

evenString(arr)

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

sortArray(arr);

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
      var arrLeft = arr.splice(0, indexMid);
      var arrRight = arr.splice(indexMid, arr.length - 1);
      if (x < mid) return binarySort(arrLeft, x);
      else return binarySort(arrRight, x);
    }
  }
}

/*Tema 15
O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr - un array.Dupa ce se termina executia functiei trebuie sa puteti afisa de cate ori s - a apelat functia recursiv.(hint: puteti folosi 2 functii sau variabila globala)*/
function counterBinarySort(arr, x) {
  counter = 0;
  binarySort(arr, x);
  return counter;
}

counterBinarySort(arr, 5);