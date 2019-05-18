function reverseString() {
    var splitString ="abc".split("");
    var reverseArray = splitString.reverse();
    return join.Array;
}
reverseString();

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i>=0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString();
