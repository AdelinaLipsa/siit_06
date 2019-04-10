//O functie care compara 2 valori si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea
var a= 1;
var b= 2
var c= 3;

function f (a,b,c) {
    if( a < b) {
        return -1;
    } else if (a===b) {
        return 0;
    }else if(a > b){
        return 1;
    }
}
console.log(f(a,b,c));