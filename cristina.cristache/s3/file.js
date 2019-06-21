// Exercitiul #1//
function ifEqual(num1,num2){

	if(num1Value == num2Value){
			return true;
	} else{
			return false;
	}
}


//Exercitiul #2//
 function compare(num1, num2){
	if(num1 == num2){
		return 0;
	} else{
		if(num1 < num2){
			return -1;
		} else{
			return 1;
		}
	}
 }


 //Exercitiul #3//
function maxOf(val1, val2){
	return Math.max(val1, val2);
}


//Exercitiul #4//
function minOf(val1, val2){
	return Math.max(val1, val2);
}


//Exercitiul #5//
function sumOfFirst(n){
	var x = 1;
	var sum = 0;

	if (n>0){
		while (x <= n){
			sum += x;
			x +=1;
		}
	} else{
		console.log("Must be a positive number!")
	}
	return sum;
}


//Exercitiul #6//
function isItPrime(n){
	for (i=2; i<n; i++){
		if (n%i==0){
			return false;
		} else{
			return true;
		}
	}
}



//Exercitiul #7//
function sumOfPrime(n){
	var primes = []
	var sum;
	if(n>0){
		for(var i=2; primes.lenth>n; i++){

		}
	}
	return sum;
}


//Exercitiul #8//
function reverseString(str){
	var reversed = "";

	for (var i = str.length - 1; i>=0; i--){
		reversed += str[i];
	}
	return reversed;
}


//Exercitiul #9//
function sumOfOdds(n){
	var odds = []
	var sum = 0;
	

	for (var i = 1; odds.length<n; i+=2){
		if(i%2!=0){
			odds.push(i);
			sum += i;
		}
	}
	return sum;
}


//Exercitiul #10//
function checkArray(arr,x){
	for(var i=0; i<arr.length;i++){
		if(arr[i]==x){
			return true;
		}
	}
}


//Exercitiul #11//
function arraySort(arr){
	var max = Math.max.apply(Math, arr);
	return max;
}


//Exercitiul #12//
function minMaxSum(arr){
	var max = Math.max.apply(Math, arr);
	var min = Math.min.apply(Math, arr);
	var sum = max + min;
	return sum;
}




//Exercitiul #13//
function checkForClone(arr){
	for(var i = 0; i < arr.length-1; i++) {
        for(var j = i; j < arr.length; j++) {
            if(i != j && arr[i] == arr[j]) {
                return true;
            }
        }
    }
    return false;
}


//Exercitiul #14//
function multiply(arr){
	var result = 1;
	for(var i=0; i<arr.length; i++){
		if (arr[i]>0){
			result *= arr[i];
		}
	}
	return result;
}


//Exercitiul #15//
function checkString(str){
	var len = str.length-1;
	var revStr = "";
	for (var i=len; i>=0; i--){
		revStr += str[i];
	}
	if(revStr===str){
		return true;
	} else{
		return false;
	}	
}

