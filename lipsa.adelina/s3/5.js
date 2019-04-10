//O functie care intoarce suma primelor N numere naturale pozitive
var N= 2;

function input(N) {
    var sum=0;
    for (var i=1; i<=N; i++){
        sum= sum + i; // sum+= i;
    }
    return sum;
}
console.log(input(N));