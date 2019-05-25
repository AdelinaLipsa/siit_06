class Premiu {
    constructor(nume, an) {
        this.nume = nume;
        this.an = an;
    }
}

class Actor {
    constructor(nume, varsta, premii) {
        this.nume = nume;
        this.varsta = varsta;
        this.premii = premii;
    }
}

class Film {
    constructor(an_aparitie, nume, actori) {
        this.an_aparitie = an_aparitie;
        this.nume = nume;
        this.actori = actori;
    }
}

class Studio {
    constructor(nume, filme) {
        this.nume = nume;
        this.filme = filme;
    }
}

var oscar1990 = new Premiu("oscar", 1990);
var oscar2000 = new Premiu("oscar", 2000);
var oscar2010 = new Premiu("oscar", 2010);
var oscar2018 = new Premiu("oscar", 2018);

var actorOscar1990 = new Actor("actor cu 2 oscaruri", 35, [oscar1990, oscar2000]);
var actorOscar2010 = new Actor("actor cu oscar din 2000", 55, [oscar2010]);
var actorOscar2018 = new Actor("actor cu oscar din 2018", 23, [oscar2018]);
var actorFaraPremii01 = new Actor("actor fara oscar 01", 33, []);
var actorFaraPremii02 = new Actor("actor fara oscar 02", 60, []);
var actorFaraPremii03 = new Actor("actor fara oscar 02", 20, []);

var film1 = new Film(1990, "film cu actori de oscar", [actorOscar1990, actorFaraPremii01]);
var film2 = new Film(2010, "film cu actori fara premii2", [actorFaraPremii01, actorFaraPremii02, actorFaraPremii03]);
var film3 = new Film(2010, "film cu actori fara premii3", [actorFaraPremii01, actorFaraPremii02, actorFaraPremii03]);
var film4 = new Film(2018, "film cu actori de oscar", [actorOscar2010, actorOscar2018, actorFaraPremii02]);
var film5 = new Film(2018, "film cu actori fara premii5", [actorFaraPremii02, actorFaraPremii03]);

var studio1 = new Studio("MGM", [film1, film2]);
var studio2 = new Studio("Disney", [film3, film4, film5]);

var studioDatabase = [studio1, studio2];

function findStudio1(nrFilme) {

    var result = [];

    for (var i = 0; i < studioDatabase.length; i++) {
        var studio = studioDatabase[i];

        if (studio.filme.length > nrFilme) {
            result.push(studio.nume);
        }
    }
    console.log(result);
}
// findStudio1(2);

function findStudio2(numeActor) {

    var result = [];

    for (var i = 0; i < studioDatabase.length; i++) {
        var studio = studioDatabase[i];

        for (var j = 0; j < studio.filme.length; j++) {
            var film = studio.filme[j];

            for (var k = 0; k < film.actori.length; k++) {
                var actor = film.actori[k];

                if (actor.nume == numeActor) {
                    result.push(studio.nume);
                }
            }
        }
    }
    console.log(result);
}
// findStudio2("actor cu 2 oscaruri");

function findStudio3(varstaActor) {

    var result = [];

    for (var i = 0; i < studioDatabase.length; i++) {
        var studio = studioDatabase[i];

        for (var j = 0; j < studio.filme.length; j++) {
            var film = studio.filme[j];

            for (var k = 0; k < film.actori.length; k++) {
                var actor = film.actori[k];

                if (actor.varsta > varstaActor) {
                    result.push(film.nume);
                }
            }
        }
    }
    console.log(result);
}
// findStudio3(50);

function search(arr, nume) {

    var result = [];

    function find(arr, nume) {

        for (var i = 0; i < arr.length; i++) {

            if (arr[i].nume == nume) {
                result.push(arr[i])

            } else {

                var newArr = Object.values(arr[i]);
                for (var j = 0; j < newArr.length; j++) {
                    if (Array.isArray(newArr[j])) {
                        find(newArr[j], nume);
                    }
                }
            }
        }
    }

    find(arr, nume);
    console.log(result);

}
search(studioDatabase, "actor fara oscar 02");


function countPairs(arr) {

    var pairs = 0;

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == 0) {
                pairs++;
            }
        }
    }
    return pairs;
}
// console.log(countPairs([3, 2, -3, 8, -2, 0]));


function merge(arrA, arrB) {

    var newArr = [];
    var i = 0;
    var j = 0;

    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] < arrB[j]) {
            newArr.push(arrA[i]);
            i++;
        } else {
            newArr.push(arrB[j]);
            j++;
        }
    }
    while (i < arrA.length) {
        newArr.push(arrA[i]);
        i++;
    }
    while (j < arrB.length) {
        newArr.push(arrB[j]);
        j++;
    }
    return newArr;
}
// console.log(merge([0, 6, 9, 45, 85], [1, 6, 12, 65]));

function mergeSort(arr) {

    if (arr.length == 1) {
        return arr;
    } else {
        var midIndex = Math.floor(arr.length / 2);
        var arrLeft = arr.slice(0, midIndex);
        var arrRight = arr.slice(midIndex, arr.length)    
    }
    return merge(mergeSort(arrLeft), mergeSort(arrRight));
}

console.log(mergeSort([10, 12, 5, 91, 20, 24, 7,0,3]));




