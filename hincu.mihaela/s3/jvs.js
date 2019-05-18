//-----------1------------- 



function compare(number1,number2){
number1=document.getElementById("option1.1").value;
number2=document.getElementById("option1.2").value;

	if(number1 == number2) 
        document.getElementById("answer1").value= ("true");
 	else 
        document.getElementById("answer1").value= ("false");
};



//-----------2------------- 

function compare2(number1,number2) {
number1=document.getElementById("option2.1").value;
number2=document.getElementById("option2.2").value;
	if (number1 < number2) 
        document.getElementById("answer2").value= ("-1");  
	else if (number1 == number2) 
        document.getElementById("answer2").value= ("0"); 
	else
        document.getElementById("answer2").value= ("1"); 
};




//-----------3------------- 

function compare3(number1,number2) {
number1=document.getElementById("option3.1").value;
number2=document.getElementById("option3.2").value;
	if (number1 < number2)
    document.getElementById("answer3").value= (number2);
	else
	document.getElementById("answer3").value= (number1);
};

// ------------------------


//-----------4------------- 

function compare4(number1,number2) {
number1=document.getElementById("option4.1").value;
number2=document.getElementById("option4.2").value;
	if (number1 < number2)
    	document.getElementById("answer4").value= (number1);
	else 
	    document.getElementById("answer4").value= (number2);
};

// ------------------------



//-----------5------------- 

function sum(number) { 
    number=document.getElementById("option5.1").value;
    var sum=0; 
       for(var i=1; i <=number; i++){ 
        sum=sum+i; 
       } 
       
       document.getElementById("answer5").value= (sum); 
       return sum;
    };
// ------------------------



//-----------6------------- 

function prim(number) {
    number=document.getElementById("option6.1").value;
    var estePrim=true;
        for(var i=2; i<=(number/2); i++) {
            if (number%i==0)
            estePrim=false;
        }
    
    if (estePrim==true)
     
        document.getElementById("answer6").value= ("E prim!");
    else  
     
        document.getElementById("answer6").value= ("Nu e prim!");
    };


// ------------------------



//-----------7------------- 

function sumP(n){
    n=document.getElementById("option7.1").value;
var sum=0;
var isPrim;
    for(var i=1;i<=n;i++){
        isPrim=true;
        for(var j=2; j<=(i/2); j++) {
            if (i%j==0)
                isPrim=false;
        }
        if(isPrim==true)
            sum=sum+i;        
    }
    document.getElementById("answer7").value= (sum);
}
    

// ------------------------



//-----------8------------- 

function reverseString(str) {
str=document.getElementById("option8.1").value;
var stringRev="";
	for(var i = 0; i<str.length; i++) {
		stringRev=str[i]+stringRev;
    }
document.getElementById("answer8").value= (stringRev);
}

// ------------------------


//-----------9------------- 

function prodImp(N){
N=document.getElementById("option9.1").value;
    var prod=1;
        for(var i=1;i<=N;i=i+2){
            prod = prod * i;
        }
document.getElementById("answer9").value= (prod);
    }

// ------------------------


//-----------10------------- 

function verify(arr,x) { 
var exista=false;
x=document.getElementById("option10.2").value;
arr=document.getElementById("option10.1").value;
	for (var i=0; i<arr.length; i++)
		if (arr[i]==x)
            exista=true;

	if (exista==true)
    document.getElementById("answer10").value= ("Exista");
	else
	document.getElementById("answer10").value= ("Nu exista");
};

// ------------------------


//-----------11------------- 

function maxArr(arr){
    arr=document.getElementById("option11.1").value;
    var max=arr[0];
        for(var i=1;i<arr.length;i++){
            if(max<arr[i])
                max=arr[i];
        };
        document.getElementById("answer11").value= (max);
    };

// ------------------------


//-----------12------------- 

function sumMM(arr){
    arr=document.getElementById("option12.1").value;
    var min = arr[0];
    var max = arr[0];
    var sum;
    
        for(var i=1;i<arr.length;i++){
            if(min>arr[i])
                min=arr[i];
            if(max<arr[i])
                max=arr[i];
        }
    sum = min+max;
    document.getElementById("answer12").value= (sum);
    }

// ------------------------



//-----------13------------- 

function dup(arr){
 
    var exista = false;
    arr=document.getElementById("option13.1").value;
        for(var i=0;i<arr.length-1;i++)
            for(var j=i+1;j<arr.length;j++)
                if(arr[i]==arr[j])
                    exista=true;
    if(exista == true)
    document.getElementById("answer13").value= ("Exista duplicate");  
    else
    document.getElementById("answer13").value= ("Nu exista duplicate");   
    }

// ------------------------



//-----------14------------- 

function prod(arr){
    arr=document.getElementById("option14.1").value;
    var prod = 1;  
         for (i = 0; i < arr.length; i++) {
            if(arr[i]>0){ 
            prod = prod * arr[i];
            } 
        }
    document.getElementById("answer14").value= (prod);  
    }

// ------------------------



//-----------15------------- 


function isPalindrom(str) {
    var stringRev="";
    str=document.getElementById("option15.1").value;
        for(var i = 0; i<str.length; i++) {
            stringRev=str[i]+stringRev;
        }
    if(stringRev==str)
    document.getElementById("answer15").value= ("Este palindrom");
    else
    document.getElementById("answer15").value= ("Nu e palindrom"); 
    }
// ------------------------