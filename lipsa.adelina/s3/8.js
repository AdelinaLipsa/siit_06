// O functie care primeste un parametru de tip string si intoarce inversul acestuia (abc => cba)
var str = "abc";
function reverseString(str) {
    return str.split('').reverse('').join('');
}
console.log(reverseString(str));