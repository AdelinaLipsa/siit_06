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

]




for (var x=0; x<users.length; x++) {
    console.log(users[x].sex+ "["+ users[x].firstName + " " +  users[x].lastName + "]" + " " + "["+ users[x].height + "," + users[x].weight + "]") }






var b=0;
for ( var a=0; a<users.length; a++) {
if ( users[a].sex=="F") {
b=b+1;}}
console.log(b)


var weight=0
for ( var c=0; c<users.length; c++) {
if ( users[c].sex=="M" && users[c].weight > 70) {
weight=weight+1;}}
console.log(weight)

var weight=0;
for ( var c=0; c<users.length; c++) {
weight+=users[c].weight;}
console.log(weight)

var weight=0;
for ( var c=0; c<users.length; c++) {
weight+=users[c].weight;}
console.log(weight/users.length)