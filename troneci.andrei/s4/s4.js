var a = ["a", "b", "c", 1, 2, 3, "d", "e", "f", 4, 5, 6];
var b = [[1, 2, 3, 4], ["a", "b", "c", "d"], [5, 6, 7, 8], ["e", "f", "g", "h"]];
var nr = 5;
var divA = 12;
var divB = 42;


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

function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
 }
 
 function lcm_two_numbers(x, y) {
   x = Math.abs(x);
   y = Math.abs(y);
   while(y) {
     var t = y;
     y = x % y;
     x = t;
   }
   return x;
 }
 console.log("9. Calculeaza cel mai mic multiplu comun al 2 numere");
console.log("");
 console.log(lcm_two_numbers(3,15));
 console.log(lcm_two_numbers(10,15));

 function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
     palindrome("121, 1234321");

  console.log("11.O functie care verifica daca un numar este palindrom ")
