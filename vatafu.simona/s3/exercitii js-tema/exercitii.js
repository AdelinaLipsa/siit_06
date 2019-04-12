//exercitiul 1-O functie care compara 2 valori si returneaza true daca sunt egale si false daca nu sunt egale
function compare (a,b){
    var a;
    var b;
    if (a==b){
      console.log("true")
    }else{
      console.log("false")
      
    }
    }
      compare(1,1);
    
    
    
    
    //exercitiul 2-O functie care compara 2 valori si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea
    function numSum(n){
        var sum = 0;
          for(i = 0; i <= n; i++){
            sum += i; 
             }
        console.log(sum)
             }
    numSum(65);
    
    
    
    
    //exercitiul 3-O functie care primeste 2 valori si returneaza maximul dintre cele 2
    var Max = function(a,b){ 
    if (a>b){
      console.log(a);
    }else{
      console.log(b);
    }
    }
    
    
    Max(3,7);
    
    
    
    //exercitiul 4-O functie care primeste 2 valori si returneaza minimul dintre cele 2
    var Min = function(a,b){ 
    
    if (a<b)
    {
        console.log(a);
    }
    else
    {
        console.log(b);
    }
    }
    
    Min(3,1);
    
    
    
    
    //exercitiul 5-O functie care intoarce suma primelor N numere naturale pozitive
    function numSum(n){
        var sum = 0;
          for(i = 0; i <= n; i++){
            sum += i; 
             }
        console.log(sum)
             }
    numSum(10);
    
    
    
    //exercitiul 6-O functie care verifica daca N este numar prim (restul impartirii la 1 si la N ==0)
    function isPrime(num) {
        if (num <= 1) { 
            return false;
        } else {
            for (var i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false; 
                }
            }
            return true;
        }  
    }
    
    console.log(isPrime(3));
    
    
    
    
    //exercitiul 7-O functie care intoarce suma primelor N numere prime
    function isPrime(num) {
        if (num <= 1) { 
            return false;
        } else {
            for (var i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false; 
                }
            }
            return true;
        }  
    }
     
    function sumPrimes(num) {
      var answer = 0;
      for(var i=2; i <= num; i++){   
        if(isPrime(i)){
          answer += i;
        }
      }
      return answer;
    }
    
    sumPrimes(19); 
    
    
    
    
    //exercitiul 8-O functie care primeste un parametru de tip string si intoarce inversul acestuia (abc => cba)
    function reverseString(str){
        let revstr = "";
        for(let i = str.length-1; i>=0; i--){
            revstr = revstr+ str[i];
        }
        return revstr;
    }
    console.log(reverseString("abc"));
    
    
    
    //exercitiul 9-O functie care intoarce produsul primelor N numere impare pozitive
    var number;
    function product(number) {
        var x=1;
        for (var i=1; i<=number; i+=2){
            x*=i;
        }
       console.log (x);
    }
    product(5);
    
    
    
    //exercitiul 10-O functie care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array
    Array.prototype.contains = function(value) {
        for(var i=0; i< this.length; i++){
            if(this[i] == value)
                return true;
        }
        return false;
    }
     
    
    var arr = [1,2,3,4,5];
    if(arr.contains(5))
        console.log("5 found.");
    
    
    //exercitiul 11 -O functie care intoarce maximul dintr-un array primit ca parametru
    var array1 = [1,2,3,4,5,6,7,8,9,100];
    
    console.log(Math.max(...array1));
    
    
    
    //exerciiul 12-O functie care intoarce suma dintre max si min, dintr-un array primit ca parametru
    var array1=[1,2,3,4,5,6,7,8,9,20,30,40];
    console.log(Math.max(...array1)-Math.min(...array1));
    
    
    //exercitiul 13-O functie care verifica daca exista duplicate intr-un array primit ca parametru
    var input = [1, 2, 3, 1, 3, 1];
    
    var duplicates = input.reduce(function(acc, el, i, arr) {
      if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
    }, []);
    
    console.log(duplicates); 
    
    
    //exercitiul 14-O functie care intoarce produsul numerelor pozitive intr-un array primit ca parametru
    
    function multiply(array) {
        var sum = 1;
        for (var i = 0; i < array.length; i++) {
            sum = sum * array[i];
        }
        return sum;
    }
    
    console.log(multiply([1, 2, 9,10]));
    
    
    //exercitiul 15-O functie care verifica daca un string primit ca parametru este palindrom (inversul == originalul, ex: abcba == abcba, abca != acba
    
    function palin(name) {
    let arrName = name.split('');
    let len=arrName.length-1;
    let halfLen=Math.floor(arrName.length/2);
    let b=true;
    for (var i = 0; i < halfLen; i++) {
    if (arrName[i]!==arrName[len]) {
    b=false;
    break;
    }
    len--;
    }
    console.log(b);
    }
    palin('eye');//true
    palin('cat');//false
    
    
    
    
    