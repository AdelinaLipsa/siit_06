var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var string = [ "p", "a", "d", "v", "j", "k", "i", "9", "S", "3", "%", "^", ":3", "^-^", "cute","somethig1", "something2", "V", "i"];
var concat = [ {
    petType: "Dog",
    petName: "Tiny",
    petTrait: "Playful",
    petAge: 1,
},
{
    petType: "Cat",
    petName: "Neko",
    petTrait: "Sleepy",
    petAge: 2,
}];
function f(arr,x){
    if(arr.length == 0 || arr[0] !== x && arr.length === 1){
        return false;
    } else {
        var indexMid = Math.floor(arr.length / 2);
        var mid = arr[indexMid];
        if (mid == x) {
            return true;
        } else {
            var arr_left = [...arr].splice(0, indexMid);
            var arr_right = [...arr].splice(indexMid, arr.length-1);
            if (x < mid) {
                return f(arr_left,x);
            } else {
                return f(arr_right,x);
            }
        }
    }
}
var returnNumbers = function (string) {
    var result = "";
    for(var i = 0; i < string.length; i++){
        if(f(numbers , string[i])) {
            result += string[i] + "|";
        }
    }
    return result;
}
returnNumbers(string);
// 1 ==================================================

var returnLetters = function (string) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if(f(letters, string[i])) {
            result += string[i] + " |";
        }
    }
    return result;
}
returnLetters(string);
// 2===========================================================


var returnFirstLetters = function (string, x) {
    if (x > 0) {
        var result = "";
        for (var i = 0; i < string.length; i++){
            if(f(letters, string[i] )) {
                result += string[i] + " |";
            }
        }
        return result;
    } else {
        return "No letters found";
    }
}
returnFirstLetters(string, 5);

//3 =======================================================================

var returnConcat = function (concat) {
    var concatreturn = "";
    for ( var i = 0; i < concat.length; i++) {
        concatreturn += concat[i].petType + " " + concat[i].petName + " " + concat[i].petTrait + " ";
    }
    return concatreturn;
}
returnConcat(concat);
//4 ================================================================================================================

var returnAge = function (concat) {
    var age = "";
    for (var i = 0; i < concat.length; i++) {
        age +=concat[i].petAge + " | ";
    }
    return age;
}
returnAge(concat);
//5 ==================================================

var returnReverse = function (concat) {
    var reverse = "";
    for (var i= 0; i < concat.length; i++){
        for(var j = i + 1; j < concat.length; j++){
            if (concat[i] > concat[j]){
                var a = concat[i];
                concat[i] = concat[j];
                concat[j] = a;
            }
        }
    }
}

var returnReverse = function (concat) {
    var reverse = "";
    for (var i= 0; i < concat.length; i++){
        reverse = [...concat].reverse();
    }
    return reverse;
}
returnReverse(concat);
// 6 dunno=======================================================

var factorial = function(n) {

    if (n > 0 && n <= 1 ) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
factorial(6);
// 7=========================================================================

var divisor = function (a, b){

    result = "";
    if(a === b) {
         return a;
        } 
    for (var i = 1; i <= 0; i++) {
        if(a % i === 0 && b % i === 0){
            result = i;
        }
    }
    return result;
} 
divisor(6, 12);
// dunno 8========================================================================

var multiple = function (a, b) {
    resultab = "";
    if (a === b){
        return a;
    } else {
        result = a * b / divisor(a, b);
        return resultab;
    }
}
multiple(22, 46);
// 9 dunno============================================

var secondDivisor = function(a) {

    var arr = [];

    for (var i = 2; i <= a / 2; i++) {

        if (a % i === 0) arr.push(i);
    }

    return arr;

}

secondDivisor(64);