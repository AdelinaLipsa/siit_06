//-----------1------------- 
// O functie care primeste un sir de caractere si returneaza cifrele din sirul respectiv

function tema1(str) {
    var stringRet = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] >= 0 && str[i] <= 9)
            stringRet = stringRet + str[i];
    }
    console.log(stringRet);
}
// ------------------------ 

//-----------2------------- 
//O functie care primeste un sir de caractere si returneaza doar literele din sirul respectiv

function tema2(str) {
    var stringRet = "";
    for (var i = 0; i < str.length; i++) {
        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z'))
            stringRet = stringRet + str[i];
    }
    console.log(stringRet);
}


// ------------------------ 


//-----------3------------- 
//.O functie care primeste un sir de caractere si returneaza primele 5 litere(daca exista)

function tema3(str) {
    var stringRet = "";
    var cinci = 0;
    for (var i = 0; i < str.length; i++) {
        if (cinci < 5) {
            if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
                stringRet = stringRet + str[i];
                cinci++;
            }
        }
        else
            break;
    }
    console.log(stringRet);
}

// ------------------------


//-----------4------------- 
//O functie care primeste o lista de siruri de caractere si returneaza sirurile concatenate

function tema4(list) {
    var con = "";
    for (var i = 0; i < list.length; i++)
        con = con + list[i];
    return con;
}

// ------------------------



//-----------5------------- 

//O functie care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile

function tema5(list) {
    var stringRet = "";
    for (var i = 0; i < list.length; i++) {
        var str = list[i];
        for (var j = 0; j < str.length; j++)
            if (str[j] >= 0 && str[j] <= 9)
                stringRet = stringRet + str[j];
    }

    return stringRet;
}

// ------------------------



//-----------6------------- 
//O functie care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate

function tema6(list) {
    var revList = [];
    var revSir = "";
    var sir, index = 0;
    for (var i = 0; i < list.length; i++) {
        sir = list[i];
        for (var j = 0; j < sir.length; j++)
            revSir = sir[j] + revSir;
        revList[index] = revSir;
        index++;
        revSir = "";
    }
    return revList;
}


// ------------------------



//-----------7------------- 
//Calculeaza factorialul unui numar;

function tema7(number) {
    var fact = 1;
    if (number == 0 || number == 1)
        return 1;
    for (var i = 2; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
};


// ------------------------



//-----------8------------- 

//Calculeaza cel mai mare divizor comun al 2 numere

function tema8(number1, number2) {
    if (number2 == 0)
        return number1;
    else
        var temp = number1 % number2;
    return tema8(number2, temp);
}


// ------------------------


//-----------9------------- 
//Calculeaza cel mai mic multiplu comun al 2 numere

function tema9(number1, number2) {
    var low;
    var high;
    if (number1 < number2) {
        low = number1;
        high = number2;
    }
    else {
        low = number2;
        high = number1;
    }

    var mc = high;
    while (mc % low != 0) {
        mc = mc + high;
    }
    return mc;
}

// ------------------------


//-----------10------------- 
//Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32])

function tema10(number) {
    var divs = [];
    var index = 0;
    for (var i = 2; i <= (number / 2); i++)
        if (number % i == 0) {
            divs[index] = i;
            index++;
        }
    return divs;
}

// ------------------------


//-----------11------------- 

//O functie care verifica daca un numar este palindrom (ex: 121, 1234321)

function tema11(number) {
    var revNum = 0;
    var nr = number;
    var rest;
    while (nr > 0) {
        rest = nr % 10;
        revNum = revNum * 10 + rest;
        nr = Math.floor(nr / 10);
    }
    if (number == revNum)
        console.log("Numarul este palindrom");
    else
        console.log("Numarul nu este palindrom");
}

// ------------------------


//-----------12------------- 
//O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru.

function tema12(sir) {
    var pare = [];
    var index = 0;
    var aux;
    for (var i = 0; i < sir.length; i++)
        if (sir[i] % 2 == 0) {
            pare[index] = sir[i];
            index++;
        }
    for (var j = 0; j < (pare.length - 1); j++) {
        for (var k = j + 1; k < pare.length; k++)
            if (pare[j] > pare[k]) {
                aux = pare[j];
                pare[j] = pare[k];
                pare[k] = aux;
            }
    } return pare;
}

// ------------------------


//-----------13------------- 
//O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru.

function tema13(arr) {
    var aux;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 == 0)
            for (var j = i + 1; j < arr.length; j++)
                if (arr[j] % 2 == 0)
                    if (arr[i] > arr[j]) {
                        aux = arr[i];
                        arr[i] = arr[j];
                        arr[j] = aux;
                    }
    }

    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 != 0)
            for (var j = i + 1; j < arr.length; j++)
                if (arr[j] % 2 != 0)
                    if (arr[i] < arr[j]) {
                        aux = arr[i];
                        arr[i] = arr[j];
                        arr[j] = aux;
                    }
    }
    return arr;
}
// ------------------------



//-----------14 :( ------------- 
//O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array.
// a fost facut in clasa.

function tema14(arr, x) {
    if (arr.length == 0)
        return false;
    else {
        var indxMid = Math.floor(arr.length / 2);
        var mid = arr[indxMid];
        if (mid == x)
            return true;
        else {
            if (x < mid) {
                var arr_left = [...arr].splice(0, indxMid - 1);
                return tema14(arr_left, x);
            }
            else {
                var arr_right = [...arr].splice(indxMid + 1, arr.length - 1);
                return tema14(arr_right, x);
            }
        }
    }
}

// ------------------------

// ----------15------------
//O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa puteti afisa de cate ori s-a apelat functia recursiv. (hint: puteti folosi 2 functii sau variabila globala)

var executat=0;
function tema15(arr, x) {
	if(arr.length == 0)
		return false;
     	else{
		var indxMid = Math.floor(arr.length / 2);
		var mid = arr[indxMid];
		if (mid == x)
			return true;
        	else{	
        		if (x < mid){
				var arr_left = [...arr].splice(0, indxMid);
				executat++;
				return tema15(arr_left, x);
            		} 
			else{
				var arr_right = [...arr].splice(indxMid, arr.length-1);
				executat++;
				return tema15(arr_right, x);
            		}
		    }
    	}
}
function tema15_2(tema15){
	return executat;
}