/* 1

compare1 = function (a,b) {
  if (a == b) {
    return true;
  } else {
    return false;
  }
} 
console.log(compare1(3,3));
 */





/* 2

compare2 = function (a,b) {
    if (a < b) {
        return -1;
    } 
    else if (a == b) {
        return 0;
    } 
    else {
        return 1;
    }
}

console.log(compare2(2,1));
*/



/* 3
maxim = function (a,b) {
    if (a > b) {
        return a;
        
    } else {
        return b;
    }
    
}
console.log(maxim(3,4));
*/

/* 4
minim = function (a,b) {
    if (a < b) {
        return a;
        
    } else {
        return b;
    }
}

console.log(minim(2,3));
*/

/* 5
suma = function (N) {
    var suma = 0;
    if (N > 0) {
        for (i=1; i<=N; i++) {
            suma = suma + i;  
            
        }
    }
    return suma;
}
console.log(suma(5));


*/



/* 6
primNumber = function(N) {
    var prim = 0; 
    for (i=1; i<=N; i++) {
        if (N % i == 0) {
            prim = prim +1;
        }
    }
    if (prim == 2) {
        return 1;
    } else {
        return 0;
    }
}
// return 1 daca este prim si 0 daca nu este prim 
console.log(primNumber(7));
*/


/*  7
function primNumber (N) {
    var prim = 0; 
    for (i=1; i<=N; i++) {
        if (N % i == 0) {
            prim = prim +1;
        }
    }
    if (prim == 2) {
        return 1;
    } else {
        return 0;
    }
}
function primFunction(N){
    var sum = 0;
    var count = 0;
    var n = 2;
    var prim = 1;
    while (count < N) {
        if(primNumber(prim) == 1) {
            sum = sum + prim;
            count = count + 1;
        }
        
        prim = prim + 1;      
    }
    return sum;
}

    console.log(primFunction(4));

    */

/*  8
 inversString = function(str) {
    var invers = '';
    for (var i=str.length - 1; i>=0; i--) {
        invers = invers + str[i];

    }
    return invers;
}
console.log(inversString('abc'));

*/


/*  9
    produs = function (N) {
    var prod = 1;
    var count = 0;
    var number = 1;
    var N = 3;
    while (count < N) { 
        console.log('prod = ',prod,'count = ', count,'number = ', number);
        if (number > 0 && number % 2 != 0) {
            prod = prod * number;
            count = count + 1;
            
        }
        number = number + 1;
        console.log('prod = ', prod);
        
    }
    return prod;
}
    console.log(produs(3));

    */

    





