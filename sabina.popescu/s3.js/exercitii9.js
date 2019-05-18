function findProduct(N) {
    if (N == 0 ) {
        return 1;
    }
     else {
         produs=1;
         for (var i = 1; i <= N; i++) {
          if (i % 2 != 0) {
              produs *= i;
          }
         }
         return produs;
     }
 }
  findProduct(10)