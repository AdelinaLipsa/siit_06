var listaClienti = [
    {
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
        nume: "Nume5",
        prenume: "Prenume5",
        varsta: 21,
        telefon: ["0758000000"],
        initialOrder: 4
    },
    {
        nume: "Nume4",
        prenume: "Prenume4",
        varsta: 44,
        telefon: ["0758000000", "0758000005"],
        initialOrder: 5
    }
];

//------------------------------------------

function makeTable(arr) {

    var tableBody = document.getElementById("tableBody");
    var tableData = "";

    for (var i = 0; i < arr.length; i++) {
        tableData += `<tr><td>${arr[i].nume}</td><td>${arr[i].prenume}</td><td>${arr[i].varsta}</td><td>${arr[i].telefon}</td><td id="edit">EDIT</td><td id="delete">DELETE</td></tr>`;
    }
    tableBody.innerHTML = tableData;
}

makeTable(listaClienti);

//------------------------------------------

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
    makeTable(arr);
}

//------------------------------------------

function delClient(arr, index) {
    arr.splice(index, 1);
}

//------------------------------------------

document.getElementById("myTable").addEventListener("click", tableClicked);

var sortDirection;
var index;
var editMode;

function tableClicked(event) {

    index = Number(event.target.parentElement.rowIndex - 1);

    if (event.target.id == "delete") {
        delClient(listaClienti, index);
        makeTable(listaClienti);
    }

    if (event.target.id == "edit") {
        document.getElementById("numeForm").value = listaClienti[index].nume;
        document.getElementById("prenumeForm").value = listaClienti[index].prenume;
        document.getElementById("varstaForm").value = listaClienti[index].varsta;
        document.getElementById("telefonForm").value = listaClienti[index].telefon;
        
        document.getElementById("submit").value = "Save";

        editMode = true;

    }

    if (event.target.tagName == "TH") {

        if (sortDirection == "up") {
            sortDirection = "down";
        } else { sortDirection = "up"; }

        var parameter = event.target.id;
        sort(listaClienti, parameter, sortDirection);

    }
}

//------------------------------------------

document.getElementById("myForm").addEventListener("click", formClicked);

function formClicked(event) {

    if (event.target.id == "submit") {

        event.preventDefault();

        var nume = document.getElementById("numeForm").value;
        var prenume = document.getElementById("prenumeForm").value;
        var varsta = document.getElementById("varstaForm").value;
        varsta = Number(varsta);
        var telefon = document.getElementById("telefonForm").value;
        telefon = telefon.split(",")

        if (nume && prenume && varsta && telefon) {

            if (editMode == true) {
                
                listaClienti[index].nume = nume;
                listaClienti[index].prenume = prenume;
                listaClienti[index].varsta = varsta;
                listaClienti[index].telefon = telefon;

                document.getElementById("submit").value = "Add client";
                editMode = false;
            } else {

                var newClient = { nume: nume, prenume: prenume, varsta: varsta, telefon: telefon }
                listaClienti.push(newClient);
            }

            //redraw the table
            makeTable(listaClienti);

            document.getElementById("error").innerText = "";
            document.getElementById("numeForm").value = "";
            document.getElementById("prenumeForm").value = "";
            document.getElementById("varstaForm").value = "";
            document.getElementById("telefonForm").value = "";

        } else { document.getElementById("error").innerText = "All fields are required!" }
    }
}

//------------------------------------------




