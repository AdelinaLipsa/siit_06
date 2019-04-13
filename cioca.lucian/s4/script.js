function bubble(){
    var arr = [2,5,6,8,3,1];
    for ( var i = 0; i <arr.length-1; i++){
        for ( var j = i+1;j < arr.length; j++){
            if ( arr[i] < arr[j] ){
                var aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
    return arr;
}


// Data for Health Center workshop
var users = [
    {
        firstName: "John",
        lastName: "Doe",
        height: 1.8,
        weight: 90,
        sex: "M"
    },
    {
        firstName: "Marry",
        lastName: "Ane",
        height: 1.6,
        weight: 90,
        sex: "F"
    },
    {
        firstName: "Kevin",
        lastName: "Dale",
        height: 1.7,
        weight: 50,
        sex: "M"
    },
    {
        firstName: "Carren",
        lastName: "Jen",
        height: 1.7,
        weight: 65,
        sex: "F"
    }
];

function clients(){

        for ( var i = 0; i < users.length ;i++){
            console.log(users[i].sex + '[' + users[i].firstName + ' ' + users[i].lastName + ']' + ' ' + '[' + users[i].height + ' ' + users[i].weight + ']');

        }
}

function fete(){
    var f = 0;
    for ( var i = 0; i < users.length; i++){
        if ( users[i].sex == 'F'){
            f++;
            }
    }
    console.log(f);
}

function baieti(){
    var b = 0;
    for ( var i = 0; i < users.length; i++){
        if ( users[i].weight > 70 && users[i].sex == 'M' ){
            b++;
            }
    }
    console.log(b);
}

function greutate(){
    var b = 0;
    for ( var i = 0; i < users.length; i++){
        b= b + users[i].weight;
    }
    console.log(b);
    console.log(b/users.length);
}

function inaltime(){
    var b = 0;
    for ( var i = 0; i < users.length; i++){
        b= b + users[i].height;
    }
    console.log(b/users.length);
}