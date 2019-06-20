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
var actorFaraPremii01 = new Actor("actor cu oscar din 2018", 33, []);
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

for (i= 0; i<studioDatabase.length;i++){
    if (studioDatabase[i].filme.length >2){
       console.log(studioDatabase[i].nume)
    }
}

for (i = 0; i < studioDatabase.length; i++) {
    for (j = 0; j < studioDatabase[i].filme.length; j++) {
        for (y = 0; y < studioDatabase[i].filme[j].actori.length; y++) {
            if (studioDatabase[i].filme[j].actori[y].nume === "actor cu 2 oscaruri") {
                console.log(studioDatabase[i].nume)

            }
        }
    }
}

// 3) Folosind structurile de la punctele 1 si 2, implementati un alg de cautare pentru urmatoarele cerinte:

//     afisati numele studiourilor care au publicat mai mult de 2 filme
//     afisati numele studiourilor in care joaca actorul cu numele "actor cu 2 oscaruri"
//     afisati numele filmelor in care joca cel putin un actor cu varsta de peste 50 de ani
//
