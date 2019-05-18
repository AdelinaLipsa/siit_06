var tema7 = function() {
    temp=0;
    for (i=2; i<=N; i++) {
        for (a=2; a<=i; a++){
            if (i % a == 0 && i != a){
                text = false; 
                break;
            }else{
                text = true;
            }
        }if (text == true) {
            temp = temp + i;
        }
    }
    console.log("temp");
}