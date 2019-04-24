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

function displayDataInTable(arr) {

    var tableBody = document.getElementById("tableBody");
    var tableData = "";

    for (var i = 0; i < arr.length; i++) {

        tableData += `<tr><td>${arr[i].nume}</td><td>${arr[i].prenume}</td><td>${arr[i].varsta}</td><td>${arr[i].telefon}</td><td id="edit">EDIT</td><td id="delete">DELETE</td></tr>`;
    }
    tableBody.innerHTML = tableData;
}
displayDataInTable(listaClienti);

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
    displayDataInTable(arr);
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

function tableClicked() {

    //table delete
    index = Number(event.target.parentElement.rowIndex - 1);

    if (event.target.id == "delete") {

        delClient(listaClienti, index);
        displayDataInTable(listaClienti);
    }

    //table edit mode
    if (event.target.id == "edit") {

        document.getElementById("numeForm").value = listaClienti[index].nume;
        document.getElementById("prenumeForm").value = listaClienti[index].prenume;
        document.getElementById("varstaForm").value = listaClienti[index].varsta;
        document.getElementById("telefonForm").value = listaClienti[index].telefon;

        document.getElementById("submit").value = "SAVE";

        rows = document.getElementsByTagName("tr");

        for (var i = 0; i < rows.length; i++) {

            rows[i].classList.remove("selectedRow");
        }
        event.target.parentElement.classList.add("selectedRow");
        editMode = true;
        document.getElementById("error").innerText = ""

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

//------------------------------------------
document.getElementById("varstaForm").addEventListener("keydown", checkInput);
document.getElementById("varstaForm").addEventListener("input", checkInput);

function checkInput(){

    if (/[^0-9]/.test(event.key) && event.keyCode !== 8) {

        event.preventDefault();
    }

}

document.getElementById("myForm").addEventListener("click", formClicked);

function formClicked() {

    //add new client or modify existing
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
                document.getElementById("submit").value = "ADD NEW CLIENT";
                editMode = false;

            } else {

                var newClient = { nume: nume, prenume: prenume, varsta: varsta, telefon: telefon }
                listaClienti.push(newClient);
            }

            //redraw the table
            displayDataInTable(listaClienti);

            //reset input fields
            document.getElementById("error").innerText = "";
            document.getElementById("numeForm").value = "";
            document.getElementById("prenumeForm").value = "";
            document.getElementById("varstaForm").value = "";
            document.getElementById("telefonForm").value = "";

        } else { document.getElementById("error").innerText = "All fields required!" }
    }
}

//------------------------------------------
//table with img
function createTable(rowsNumber, colsNumber, id, node) {

    var div = document.createElement("DIV");
    div.classList.add("content");
    var table = document.createElement("TABLE");
    table.id = id;
    var tbody = document.createElement("TBODY");
    table.appendChild(tbody);
    div.appendChild(table);
    document.querySelector(node).appendChild(div);

    for (var i = 0; i < rowsNumber; i++) {

        var tr = document.createElement("TR");
        tbody.appendChild(tr);

        for (var j = 0; j < colsNumber; j++) {

            var td = document.createElement("TD");
            tr.appendChild(td);
        }
    }
}
createTable(3, 3, "myTable2", "div");

var myTable2 = document.getElementById("myTable2");
var td = myTable2.getElementsByTagName("td");

for (var i = 0; i < td.length; i++) {

    var img = document.createElement("IMG");
    img.src = "images/initial.jpg";
    td[i].appendChild(img);
}

document.getElementById("myTable2").addEventListener("mouseover", mouseOnImage);
document.getElementById("myTable2").addEventListener("mouseout", mouseOnImage);

function mouseOnImage() {

    if (event.target.tagName == "IMG") {

        if (event.type == "mouseover") {

            event.target.src = "images/mouse_over.jpg"

        } else { event.target.src = "images/initial.jpg" }
    }
}

//-----------------------------------------------------------
document.querySelector(".content div").addEventListener("keydown", filterInput);
document.querySelector(".content div").addEventListener("input", filterInput);

function filterInput() {
    
    if (event.target.id == "input03" || event.target.id == "input04") event.preventDefault();

    if (event.target.id == "input05") {

        var input05 = document.getElementById("input05");
        var maxChar = document.getElementById("maxChar");
        maxChar.className = "";

        if (input05.value.length >= 10 && event.keyCode !== 8) {

            event.preventDefault();

            maxChar.className = "red";
            maxChar.innerText = "10 MAX"

        } else {

            maxChar.innerText = input05.value.length;
        }

    } else {

        if (/[^0-9]/.test(event.key) && event.keyCode !== 8) {

            event.preventDefault();
        }

        var input01 = document.getElementById("input01");
        var input02 = document.getElementById("input02");
        var input03 = document.getElementById("input03");
        var input04 = document.getElementById("input04");

        if (Number(input01.value) > Number(input02.value)) {

            input01.classList.add("green");
            input02.classList.remove("green");
            input03.value = input01.value;

        } else if (Number(input01.value) < Number(input02.value)) {

            input01.classList.remove("green");
            input02.classList.add("green");
            input03.value = input02.value;

        } else {

            input01.classList.add("green");
            input02.classList.add("green");
        }

        input04.value = Number(input01.value) + Number(input02.value);
    }
}

