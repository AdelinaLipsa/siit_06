function Palindrom (pal) {
    var palin = pal.split("").reverse().join("");
    if (palin === pal) {
        return true;
    } else {
        return false;
    }
}

Palindrom("Mama");
Palindrom("Madame")


  
