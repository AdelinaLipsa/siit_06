var listaClienti = [{
    nume: "Nume1",
    prenume: "Prenume1",
    varsta: 29,
    telefon: ["0758066000"],
    initialOrder: 1
  },
  {
    nume: "Nume3",
    prenume: "Prenume3",
    varsta: 31,
    telefon: ["0758000000"],
    initialOrder: 2
  },
  {
    nume: "Nume2",
    prenume: "Prenume2",
    varsta: 30,
    telefon: ["0758000000", "0758000000"],
    initialOrder: 3
  },
  {
    nume: "Nume4",
    prenume: "Prenume4",
    varsta: 30,
    telefon: ["0758000000", "0758000000"],
    initialOrder: 4
  }
];

//drawing the table
function arataDateleDinTabel(arr) {

  var tableBody = document.getElementById("tableBody");
  var tableData = "";

  for (var i = 0; i < arr.length; i++) {

    tableData += `<tr><td>${arr[i].nume}</td><td>${arr[i].prenume}</td><td>${arr[i].varsta}</td><td>${arr[i].telefon}</td><td id="edit"><b>Editeaza</b></td><td id="delete"><b>Sterge</b></td></tr>`;
  }
  tableBody.innerHTML = tableData;
}
arataDateleDinTabel(listaClienti);

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
  arataDateleDinTabel(arr);
}


//table click event
document.getElementById("myTable").addEventListener("click", tableClicked);

var sortDirection;
var index;
var editingTable;

function tableClicked() {

  //table delete
  function delClient(arr, index) {
    arr.splice(index, 1);
  }

  index = Number(event.target.parentElement.rowIndex - 1);

  if (event.target.id == "delete") {

    delClient(listaClienti, index);
    arataDateleDinTabel(listaClienti);
  }

  // table edit
  if (event.target.id == "edit") {

    document.getElementById("numeInput").value = listaClienti[index].nume;
    document.getElementById("prenumeInput").value = listaClienti[index].prenume;
    document.getElementById("varstaInput").value = listaClienti[index].varsta;
    document.getElementById("telefonInput").value = listaClienti[index].telefon;

    document.getElementById("submit").value = "SALVEAZA";

    rows = document.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {

      rows[i].classList.remove("selectedRow");
    }
    event.target.parentElement.classList.add("selectedRow");
    editingTable = true;
    document.getElementById("mesaj").innerText = ""

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

//check varstaInput and telefonInput for numbers
document.getElementById("varstaInput").addEventListener("keydown", checkInput);
document.getElementById("varstaInput").addEventListener("input", checkInput);
document.getElementById("telefonInput").addEventListener("keydown",checkInput);
document.getElementById("telefonInput").addEventListener("input",checkInput);
function checkInput() {
  if (/[^0-9]/.test(event.key) && event.keyCode !== 8) {
    event.preventDefault();
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
    var varsta = document.getElementById("varstaInput").value;
    varsta = Number(varsta);
    var telefon = document.getElementById("telefonInput").value;
    telefon = telefon.split(",")

    if (nume && prenume && varsta && telefon) {

      if (editingTable === true) {

        listaClienti[index].nume = nume;
        listaClienti[index].prenume = prenume;
        listaClienti[index].varsta = varsta;
        listaClienti[index].telefon = telefon;
        document.getElementById("submit").value = "ADAUGA CLIENT";
        editingTable = false;

      } else {

        var newClient = {
          nume: nume,
          prenume: prenume,
          varsta: varsta,
          telefon: telefon
        }
        listaClienti.push(newClient);
      }

      //redraw the table
      arataDateleDinTabel(listaClienti);

      //reset input fields
      document.getElementById("mesaj").innerText = "";
      document.getElementById("numeInput").value = "";
      document.getElementById("prenumeInput").value = "";
      document.getElementById("varstaInput").value = "";
      document.getElementById("telefonInput").value = "";

    } else {
      document.getElementById("mesaj").innerText = "CAMPURI INCORECT \n COMPLETATE!"
      document.getElementById('mesaj').style.color="red";
    }
  }
}