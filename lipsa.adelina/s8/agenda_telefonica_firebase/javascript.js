 var listaClienti = [{
     nume: "Nume1",
     prenume: "Prenume1",
     telefon: ["0758066000"],
     initialOrder: 1
   },
   {
     nume: "Nume3",
     prenume: "Prenume3",
     telefon: ["0758000000"],
     initialOrder: 2
   },
   {
     nume: "Nume2",
     prenume: "Prenume2",
     telefon: ["0758000000", "0758000000"],
     initialOrder: 3
   },
   {
     nume: "Nume4",
     prenume: "Prenume4",
     telefon: ["075803481"],
     initialOrder: 4
   },
   {
     nume: "Nume5",
     prenume: "Prenume5",
     telefon: ["07942990220"],
     initialOrder: 5
   }
 ];

 //drawing the table
 function showDataInTable(arr) {
   var tableBody = document.getElementById('tableBody');
   var tableData = "";

   for (var i = 0; i < arr.length; i++) {
     tableData += `
    <tr>
    <td>${listaClienti[i].nume}</td>
    <td>${listaClienti[i].prenume}</td>
    <td>${listaClienti[i].telefon}</td>
    <td id="modifica">Modifica</td>
    <td id="sterge">Sterge</td>
    </tr>
    `;
   }
   tableBody.innerHTML = tableData;
 }
 showDataInTable(listaClienti);

 //writing the sorting function
 function sort(arr, parameter, sortDirection) {

   for (var i = 0; i < arr.length; i++) {

     for (var j = i + 1; j < arr.length; j++) {

       if (sortDirection === "up") {

         if (arr[i][parameter] > arr[j][parameter]) {
           var temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
         }
       } else if (sortDirection === "down") {

         if (arr[i][parameter] < arr[j][parameter]) {
           var temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
         }
       }
     }
   }
   showDataInTable(arr);
 }
 //table click event
 document.getElementById("table").addEventListener("click", tableClicked);

 var sortDirection;
 var index;
 var editingTable;

 function tableClicked() {

   //table delete
   function delClient(arr, index) {
     arr.splice(index, 1);
   }

   index = Number(event.target.parentElement.rowIndex - 1);

   if (event.target.id == "sterge") {

     delClient(listaClienti, index);
     showDataInTable(listaClienti);
   }

   // table edit
   if (event.target.id == "modifica") {
     document.getElementById("numeInput").value = listaClienti[index].nume;
     document.getElementById("prenumeInput").value = listaClienti[index].prenume;
     document.getElementById("telefonInput").value = listaClienti[index].telefon;
     document.getElementById("submit").value = "SALVEAZA";
   }

   //table sorting
   if (event.target.tagName == "TH") {

     var headers = document.getElementsByTagName("th");

     for (var i = 0; i < headers.length; i++) {

       headers[i].classList.remove("selected");
     }

     event.target.classList.add("selected");

     if (sortDirection == "up") sortDirection = "down";
     else sortDirection = "up";

     var parameter = event.target.id;
     sort(listaClienti, parameter, sortDirection);

   }
 }

 // when form is clicked
 document.getElementById("myForm").addEventListener("click", formClicked);

 function formClicked() {

   //add client or edit existing
   if (event.target.id == "submit") {

     event.preventDefault();

     var nume = document.getElementById("numeInput").value;
     var prenume = document.getElementById("prenumeInput").value;
     var telefon = document.getElementById("telefonInput").value;
     telefon = telefon.split(",");

     if (nume && prenume && telefon) {

       if (editingTable == true) {

         listaClienti[index].nume = nume;
         listaClienti[index].prenume = prenume;
         listaClienti[index].telefon = telefon;
         document.getElementById("submit").value = "ADAUGA CONTACT";
         editingTable = false;

       } else {

         var newClient = {
           nume: nume,
           prenume: prenume,
           telefon: telefon
         }
         listaClienti.push(newClient);
       }

       //redraw the table
       showDataInTable(listaClienti);

       //reset input fields
       document.getElementById("numeInput").value = "";
       document.getElementById("prenumeInput").value = "";
       document.getElementById("telefonInput").value = "";

     } else {
       alert("CAMPURI INCOMPLETE!");
     }
   }
 }

 //make sure telefonInput gets numbers 
 document.getElementById("telefonInput").addEventListener("keydown", checkInput);
 document.getElementById("telefonInput").addEventListener("input", checkInput);

 function checkInput() {
   if (/[^0-9]/.test(event.key) && event.keyCode !== 8) {
     event.preventDefault();
   }
 }

 // ---------------------->initialize firebase
 var firebaseConfig = {
   apiKey: "AIzaSyAWtlQTGbFjhKQnKGyOtWKxLtYjPhkPbTY",
   authDomain: "testing-project-75edf.firebaseapp.com",
   databaseURL: "https://testing-project-75edf.firebaseio.com",
   projectId: "testing-project-75edf",
   storageBucket: "testing-project-75edf.appspot.com",
   messagingSenderId: "260504032711",
   appId: "1:260504032711:web:e4eccf6c85a9f9f5"
 };
 firebase.initializeApp(firebaseConfig);

 var rootRef = firebase.database().ref().child("clients");
 $('#submit').click(function () {
   rootRef.push().set({ // without push() the database is just being overwritten

     nume: $('#numeInput').val(),
     prenume: $('#prenumeInput').val(),
     telefon: $('#telefonInput').val()

   });
 })

/*
 ----------------------->load database
 firebase.database().ref('clients/').on('value', function (snapshot) {
   writeList(snapshot.val());
 });

 function writeList(rootRef) {
   for (var key in rootRef) {
     if (rootRef.hasOwnProperty(key)) {
       var str; 
       str += '<tr>';
       str += "<td>" + rootRef.nume + "</td>";
       str += "<td> " + rootRef.prenume + "</td>";
       str += "<td>" + rootRef.telefon + "</td>";
       str += '</tr>';

     }
   }
   $('#tableBody').html(str);
 }
*/
//--------------------------> LOAD DATABASE IN CONSOLE
$(function(){
  //just make a variable to keep track of the data coming from Firebase
  var data =[];
  
  //create a new connection to firebase
  var rootRef = firebase.database().ref().child("clients");
	
  //listen to data updates from firebase
  rootRef.on("value", function(snapshot){
    console.log(snapshot.val() );
    //when data updates at Firebase,it gets put in the DATA variable
    data = snapshot.val();
  })

//---------show the data in the page 
const object = document.getElementById("firebase");
rootRef.on("value", snap => {
  object.innerText = JSON.stringify(snap.val(), null, 3);
});
/*
document.getElementById("firebase").innerHTML = `
  <h1 class="app-title">Number of clients (${rootRef.length} results)</h1>
  <p class="footer">These ${rootRef.length} clients were added recently. Check back soon for updates.</p>
`;*/
});
 

