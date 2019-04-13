//O functie care verifica daca un string primit ca parametru este palindrom (inversul == originalul, ex: abcba == abcba, abca != acba
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;   //RegExp to remove unwanted characters 
    str = str.toLowerCase().replace(re, '');//Lowercase the string
    var len = str.length; //length = 30
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
palindrome("A man, a plan, a canal. Panama");