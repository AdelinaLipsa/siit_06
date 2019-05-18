/*
var primFunction = function(N){
    var sum = 0;
    var count = 0;
    var n = 2;
    var prim = 0;
    while (count < N) {
        for(i=1;i<=N;i++) {
            if(n % i == 0) {
                prim = prim + 1;
            }
        }
        if(prim == 2) {
            sum = sum + n;
            count = count + 1;
        }
        n = n + 1;      
    }
    return sum;
}

    console.log(primFunction(3));
     
   /* var n = 2;
    var prim = 0;
    var count = 0;
    var sum = 0;
    var N = 3;

      while(count < N) {
        for(i=1;i<=n;i++) {
            if(n % i == 0) {
                prim = prim + 1;
            }
        }
            if(prim == 2) {
                sum = sum + n;
                count = count + 1;
            }
            n = n + 1;
        }

    console.log(sum, count,n)
    */