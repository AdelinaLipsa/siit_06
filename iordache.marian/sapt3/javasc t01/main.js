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



    /* 7 part 2
     function primFunction(N){
    var sum = 0;                // initializare suma
    var count = 0;              // contorizeaza numere prime
    var n = 1;                  // variabila pentru test prim
    while (count < N) {         // cat timp nu am gasit N numere prime
        prim = 0;               // contorizeaza divizori
        n = n + 1;              // incrementare n pentru a parcurge valorile pana la n
        for (i=1; i<=n; i++)    
        if(n % i == 0) {        // test numere prime
            prim = prim + 1;       // incrementam divizorii
            }
        if (prim == 2) {           // daca se gasesc 2 divizori numarul este prim
            sum = sum + n;          // se aduca numarul prim n
            count = count + 1;      // se contorizeaza numerele prime
            }
            
     }
             
    
    return sum;                     // retuneaza suma
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

    

 /* 10
    arr = [1, 5, 8, 10];
     x = 8;
    findNumber = function(arr, x) {
      for (i=0; i<=arr.length -1; i++) {  // se parcurge vectorul
          if (x == arr[i]) {                // verifica pentru fiecare element al vectorului daca este egal cu x
              return true;
          }
      }

  } 
  console.log(findNumber(arr,x));   
  */

  /* 11
    arr = [2, 9, 4, 5, 3, 1 ,6];
    findMaxim = function(arr) {
        max = arr[0];
        for(i=1; i<=arr.length - 1; i++){
            if (arr[i]>max) 
            max = arr[i];
            
        } 
        return max;
    }
console.log(findMaxim(arr));
*/

/*  12
arr = [2,7,8,9];
sumMinMax = function(arr) {
    sum = 0;            
    max = arr[0];   // initializez max cu valoarea primei pozitii a arr
    min = arr[0];       // initializez min cu valoarea primei pozitii a arr
    for (i=1; i<=arr.length - 1; i++) {   // parcurgem arr
        if (arr[i]>max) {
            max = arr[i];
        }
        if (arr[i]<min) {
            min = arr[i];
        }     
    }
    sum = min + max;
    return sum;

}
console.log(sumMinMax(arr));
*/

 /* 13

  arr = [2,5,2,6,8,3];

  findDublicates = function(arr) {
      for (i=0; i<=arr.length - 1; i++) {  // parcurgem vectorul
        for (j=i+1; j<=arr.length -1; j++) {  // parcurgem vectorul cu pozitia + 1
              if (arr[i] == arr[j]) {
              return true;
          } 
      }
   }
}
  console.log(findDublicates(arr));
  */



   /* 14

  arr = [1, -3, 3, 7,-9, 4];

  produsNumere = function (arr) {
      prod = 1;
      for (i=0; i<=arr.length -1; i++) {
          if (arr[i] > 0)
          prod = prod * arr[i];
          

      }
      return prod;
  }
  
  console.log(produsNumere(arr));
  */

/*
  15 
  palindrom = function (str) {
      invers = ''; 
    for(i=str.length - 1; i>=0; i--) {
        invers = invers + str[i];
    }
    if (str==invers ){
        return true;
  } else {
        return false;
  }
}
  console.log(palindrom(str='abcba'));
  console.log(palindrom(str='pcccbb'));
  */

