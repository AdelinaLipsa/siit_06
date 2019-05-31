"use strict";   
   
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
        nume: "Peter",
        prenume: "Parker",
        telefon: ["075803481"],
        initialOrder: 4
      },
      {
        nume: "Tony",
        prenume: "Stark",
        telefon: ["07942990220"],
        initialOrder: 5
      }
    ];

//drawing the table
function showDataInTable(arr) {
var tableBody = document.getElementById('tableBody');
var tableData = "";

for (var i=0; i<arr.length; i++){
    tableData += `
    <tr>
    <td>${listaClienti[i].nume}</td>
    <td>${listaClienti[i].prenume}</td>
    <td>${listaClienti[i].telefon}</td>
    <td id="modifica"><i class="fas fa-edit"></i></td>
    <td id="sterge"><i class="fas fa-minus-circle"></i></td>
    <tr>
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

  if (event.target.classList == "fas fa-minus-circle") {

    delClient(listaClienti, index);
    showDataInTable(listaClienti);
  }

  // table edit
  if (event.target.id == "fas fa-edit") {

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

      if (editingTable === true) {

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
document.getElementById("telefonInput").addEventListener("keydown",checkInput);
document.getElementById("telefonInput").addEventListener("input",checkInput);
function checkInput() {
  if (/[^0-9]/.test(event.key) && event.keyCode !== 8) {
    event.preventDefault();
  }
}