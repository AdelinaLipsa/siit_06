var a = ["a", "b", "c", 1, 2, 3, "d", "e", "f", 4, 5, 6];
var b = [[1, 2, 3, 4], ["a", "b", "c", "d"], [5, 6, 7, 8], ["e", "f", "g", "h"]];
var nr = 5;
var sort = [22, 13, 14, 6, 9, 3, 8, 5, 12];
var divA = 12;
var divB = 1;
var pal = 14141;


console.log(a);
console.log("");
console.log(b);
console.log("");
function retuneazaCifre(p) {
    for (var i = 0; i < p.length; i++) {
        //     console.log(p[i]);
        //    console.log(typeof p[i]);
        if (typeof p[i] == "number") {
            console.log(p[i]);
            //            console.log("ping");
        }
    }
}
console.log("1. O functie care primeste un sir de caractere si returneaza cifrele din sirul respectiv");
console.log("");
console.log(a);
console.log("");
retuneazaCifre(a);
console.log("");

function retuneazaLitere(p) {
    for (var i = 0; i < p.length; i++) {
        //     console.log(p[i]);
        //   console.log(typeof p[i]);
        if (typeof p[i] == "string") {
            console.log(p[i]);
            //       console.log("ping");
        }
    }
}
console.log("2. O functie care primeste un sir de caractere si returneaza doar literele din sirul respectiv");
console.log("");
console.log(a);
console.log("");
retuneazaLitere(a);
console.log("");



function primeleCinciLitere(p) {
    var count = 0;
    for (var i = 0; i < p.length; i++) {
        //     console.log(p[i]);
        //   console.log(typeof p[i]);
        if (typeof p[i] == "string" && count < 5) {
            count = count + 1;
            console.log(p[i]);
            //       console.log("ping");
        }
    }
}
console.log("3. O functie care primeste un sir de caractere si returneaza primele 5 litere(daca exista)");
console.log("");
console.log(a);
console.log("");
primeleCinciLitere(a);
console.log("");


function concatenareListaSiruri(p) {
    var sirComplet = [];
    for (var i = 0; i < p.length; i++) {
        for (var j = 0; j < p[i].length; j++) {
            sirComplet.push(p[i][j]);
        }
    }
    console.log(sirComplet);
}
console.log("4. O functie care primeste o lista de siruri de caractere si returneaza sirurile concatenate");
console.log("");
console.log(b);
console.log("");
concatenareListaSiruri(b);
console.log("");


function numereListaSiruri(p) {
    for (var i = 0; i < p.length; i++) {
        retuneazaCifre(p[i]);
    }
}
console.log("5. O functie care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile");
console.log("");
console.log(b);
console.log("");
numereListaSiruri(b);
console.log("");


function inversareSir(p) {
    var sir = [];
    for (var i = p.length - 1; i >= 0; i--) {
        sir.push(p[i]);

    }

    p = sir;
    console.log(p);
}
console.log("6. O functie care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate");
console.log("");
console.log(a);
console.log("");
inversareSir(a);
console.log("");


function calculFactorial(p) {
    var f = 1;
    for (var i = 1; i < nr + 1; i++) {
        f = f * i;
    }
    console.log(f);
}
console.log("7. Calculeaza factorialul unui numar");
console.log("");
console.log("numarul este: " + nr)
console.log("");
calculFactorial(nr);
console.log("");

function celMaiMareDiv(p, n) {
    var cmmdc = 1;
    var sirP = [];
    var sirN = [];
    for (var i = 1; i <= p; i++) {
        if (p % i == 0) {
            sirP.push(i);
        }
    }
    for (var j = 1; j <= n; j++) {
        if (n % j == 0) {
            sirN.push(j);
        }
    }
    for (var p = 0; p < sirP.length; p++) {
        //     console.log(sirP[p]);
        for (var n = 0; n < sirN.length; n++) {
            //        console.log(sirN[n]);
            if (sirP[p] == sirN[n]) {
                cmmdc = sirP[p];
                break;
            }
        }
    }
    console.log("cmmdc este: " + cmmdc);
    console.log(sirP + " |||| " + sirN);
}

console.log("8. Calculeaza cel mai mare divizor comun al 2 numere");
console.log("");
console.log(" primul numar este: " + divA);
console.log(" al doilea numar este: " + divB);
console.log("");
celMaiMareDiv(divA, divB);
console.log("");

function celMaiMicMultiplu(p, n) {
    var s = 0;
    var sir = [];
    var cmmmmc = 0;
    s = p * n;
    for (var i = s; i > 0; i--) {
        if (i % p == 0 && i % n == 0) {
            sir.push(i);
        }

    }

    console.log("cmmmc este: " + sir[sir.length - 1]);

}

console.log("9. Calculeaza cel mai mic multiplu comun al 2 numere");
console.log("");
console.log(" primul numar este: " + divA);
console.log(" al doilea numar este: " + divB);
console.log("");
celMaiMicMultiplu(divA, divB);
console.log("");


function divizori(p) {
    var sir = [];

    for (var i = 2; i < p; i++) {
        if (p % i == 0) {
            sir.push(i);
        }

    }
    if (sir.length != 0) {
        console.log("divizorii sunt: " + sir);
    } else {

        console.log("Este numar prim!!!")
    }
}

console.log("10. Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32])");
console.log("");
console.log(" Numarul este: " + divA);
console.log("");
divizori(divA);
console.log("");


function chackPali(p) {
    toChar = "" + p + "";
    var suma = 0;
    for (var i = 0; i <= toChar.length - 1; i++) {
        /*      console.log(str.substr(i, 1));
              console.log(str.substr(str.length - i - 1, 1));  */
        if (toChar.substr(i, 1) != toChar.substr(toChar.length - i - 1, 1)) {
            gage = true;
        } else {
            gage = false;
        }
    }
    if (gage == true) {
        console.log("numarul NU este palindrom");
    } else {
        console.log("numarul este palindrom");
    }
}
console.log("11. O functie care verifica daca un numar este palindrom (ex: 121, 1234321)");
console.log("");
console.log(" Numarul este: " + pal);
console.log("");
chackPali(pal);
console.log("");

function sortarePar(p) {
    var sirPar = [];
    for (i = 0; i < p.length; i++) {
        if (p[i] % 2 == 0) {
            sirPar.push(p[i]);
        }
    }
    console.log(" Sirul de numere pare este: " + sirPar);
}
console.log("12. O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru.");
console.log("");
console.log("Sirul de numere este: " + sort);
console.log("");
sortarePar(sort);
console.log("");


function sorAscSir(p) {


    for (i = 0; i < p.length; i++) {



    }

}



function sortAscParDescImp(p) {
    var sirComplet = [];
    var sirImpar = [];
    var sirPar = [];
    for (i = 0; i < p.length; i++) {
        if (p[i] % 2 == 0) {
            sirPar.push(p[i]);
        }
    }
    console.log(" Sirul de numere pare este: " + sirPar);

    for (i = p.length - 1; i > 0; i--) {
        if (p[i] % 2 != 0) {
            sirImpar.push(p[i]);
        }
    }
    console.log(" Sirul de numere impare este: " + sirImpar);

    sirComplet.push(sirPar);
    sirComplet.push(sirImpar);
    concatenareListaSiruri(sirComplet);



}
console.log("13. functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru.");
console.log("");
console.log("Sirul de numere este: " + sort);
console.log("");
sortAscParDescImp(sort);
console.log("");



