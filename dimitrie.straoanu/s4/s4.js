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

function logUsers() {

    for (i = 0; i < users.length; i++) {

        console.log(users[i].sex + " [" + users[i].firstName + "]" + " [" + users[i].height + ", " + users[i].weight + "]");

    }
}

//-----------------------------------

function femalesNumber() {

    var females = 0;

    for (i = 0; i < users.length; i++) {

        if (users[i].sex === "F") {

            females++;

        }

    }
    console.log(females);
}

//-------------------------------

function malesOver70kg() {

    var males = 0;

    for (i = 0; i < users.length; i++) {

        if (users[i].sex === "M" && users[i].weight > 70) {

            males++;

        }

    }
    console.log(males);
}

//------------------------------------

function totalWeight() {

    var tWeight = 0;

    for (i = 0; i < users.length; i++) {

        tWeight += users[i].weight;
    }

    console.log(tWeight);
}

//-----------------------------------

function averageWeight() {

    var tWeight = 0;
    var aWeight = 0;

    for (i = 0; i < users.length; i++) {

        tWeight += users[i].weight;
    }

    aWeight = tWeight / users.length;
    console.log(aWeight);
}

//----------------------------------------

function averageHeight() {

    var tHeight = 0;
    var aHeight = 0;

    for (i = 0; i < users.length; i++) {

        tHeight += users[i].height;
    }

    aHeight = tHeight / users.length;
    console.log(aHeight);
}

//------------------------------------------

function percentageMF() {

    var males = 0;
    var females = 0;

    for (i = 0; i < users.length; i++) {

        if (users[i].sex === "F") {

            females++;

        }

        if (users[i].sex === "M") {

            males++;

        }

    }

    femalesPercent = 100 / females;
    malesPercent = 100 / males;

    console.log("Females: " + femalesPercent + "%");
    console.log("Males: " + malesPercent + "%");
}