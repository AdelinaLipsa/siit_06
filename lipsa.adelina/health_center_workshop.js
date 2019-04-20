// Data for Health Center workshop rezolvare

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

//1. display on console on each line the clients as in the following example: M [John Doe] [1.8, 90]

//2. display at the console the number of female clients

//3. display at the console the number of male clients with a weight > 70

//4. display at the console the sum of body weights from all clients

//5. display at the console the average weight of a client

//6. display at the console the average height of a client

//7. calculate and display at the console the percentage of male clients vs female clients of the health center workshop

// 1
for (var i = 0; i < users.length; i++) {
  console.log(users[i].sex + "[" + users[i].firstName + users[i].lastName + "]" + "[" + users[i].height + "," + users[i].weight + "]");
}
//2
var femNum = 0;
for (var i = 0; i < users.length; i++) {
  if (users[i].sex == "F")
    femNum++;
}
console.log(femNum);
//3 
var menWeight = 0;
for (var i = 0; i < users.length; i++) {
  if (users[i].sex == "M" && users[i].weight > 70) {
    menWeight++;
  }
}
console.log(menWeight);

//4
var sumWeight=0;
for(var i = 0; i < users.length; i++) {
  sumWeight+= users[i].weight;
}
console.log(sumWeight);

//5
var avgWeight=0;
for(var i = 0; i < users.length; i++) {
  avgWeight += users[i].weight /4;
}
console.log(avgWeight);

//6
var avgHeight=0;
for(var i = 0; i < users.length; i++) {
  avgHeight+= users[i].height /4;
}
console.log(avgHeight);

//7
var maleNum=0;
for(var i = 0; i < users.length; i++) {
  if(users[i].sex =="M"){
  maleNum++;
  }
}
var femNum=0;
for(var i = 0; i < users.length; i++) {
  if(users[i].sex=="F"){
    femNum++;
  }
}
 if(maleNum == femNum){
   console.log("50%")
 } else {
   console.log(Math.floor((maleNum/femNum)*100)+ "%");
 }
 
