var tema6 = function(){
    temp=0;
    for (i=2; i<=N; i++){
        if (N % i == 0 && N != i) {
            temp = true; 
        }
    }
    if (temp == true) {
        console.log("NU ESTE NR PRIM");
    } else {
        console.log("NR ESTE PRIM");
    }
}