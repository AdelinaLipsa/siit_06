var T7 = function (n) {
        a = 0;
        if (n > 2) {
                for (x = 2; x < n; x++) {
                        if (n % x == 0) {
                                a = 1;
                        }
                }
        }
        return (a)
}

var SumPrimes = function (N) {
        var sum = 0;
        var x = 1;
        var i = 0;
        while (i !== N) {
                if (T7(x) == 0) {
                        sum += x;
                        i++
                }
                x++
        }
        console.log(sum)
}

// apel de functie 