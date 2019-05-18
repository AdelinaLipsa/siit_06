var listaClienti=[
    {
        nume:"Nume1",
        prenume:"Prenume1",
        varsta:29,
        telefon:["0758066000"],
        initialOrder: 1
    },
    {
        nume:"Nume3",
        prenume:"Prenume3",
        varsta:31,
        telefon:["0758000000"],
        initialOrder: 2
    },
    {
        nume:"Nume2",
        prenume:"Prenume2",
        varsta:35,
        telefon:["0758000000","0758000000"],
        initialOrder: 3
    },
    {
        nume:"Nume4",
        prenume:"Prenume4",
        varsta:45,
        telefon:["0758450000"],
        initialOrder: 5
    },
    {
        nume:"Nume5",
        prenume:"Prenume5",
        varsta:19,
        telefon:["0758007900"],
        initialOrder: 4
    },       
];

var dir;
var index;
var edit;

var culoareColoana1;
var culoareColoana2;
var culoareColoana3;
var culoareColoana4;

function draw(){
    var tbody = '';

    for (var i = 0; i<listaClienti.length; i++){
        var row = `
            <tr>
                <td class='${culoareColoana1}'>${listaClienti[i].nume}</td>
                <td class='${culoareColoana2}'>${listaClienti[i].prenume}</td>
                <td class='${culoareColoana3}'>${listaClienti[i].varsta}</td>
                <td class='${culoareColoana4}'>${listaClienti[i].telefon}</td>
                <td id="edit">EDIT</td>
                <td id="delete">DELETE</td>
            </tr>
        `;
        tbody = tbody + row;
    }
    document.getElementById("clientiBody").innerHTML = tbody;
}
draw(listaClienti);

function sort(arr, parameter, dir) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (dir === "dsc") {
                if (arr[i][parameter] > arr[j][parameter]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            } else if (dir === "asc") {
                if (arr[i][parameter] < arr[j][parameter]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    //culoareColoana1 = dir == "asc"? "red": "green";
    //culoareColoana2 = dir == "asc"? "red": "green";
    //culoareColoana3 = dir == "asc"? "red": "green";
    //culoareColoana4 = dir == "asc"? "red": "green";
    draw(arr);
}
document.getElementById("clienti").addEventListener("click", tableClicked);

function tableClicked() {
    index = Number(event.target.parentElement.rowIndex - 1);
    if (event.target.id == "delete") {
        del(listaClienti, index);
        draw(listaClienti);
    }
    if (event.target.id == "edit") {
        document.getElementById("numeNew").value = listaClienti[index].nume;
        document.getElementById("prenumeNew").value = listaClienti[index].prenume;
        document.getElementById("varstaNew").value = listaClienti[index].varsta;
        document.getElementById("telefonNew").value = listaClienti[index].telefon;
        document.getElementById("submit").value = "SAVE";
        rows = document.getElementsByTagName("tr");
        for (var i = 0; i < rows.length; i++) {
            rows[i].classList.remove("selectedRow");
        }
        event.target.parentElement.classList.add("selectedRow");
        edit = true;
        document.getElementById("error").innerText = ""

    }
    if (event.target.tagName == "TH") {
        var headers = document.getElementsByTagName("th");
        for (var i = 0; i < headers.length; i++) {
            headers[i].classList.remove("selected");
        }
        event.target.classList.add("selected");
        if (dir == "asc"){
            dir = "dsc";
            culoareColoana1 = "green";
        } else{
            dir = "asc";
            culoareColoana1 = "red";
        }
        var parameter = event.target.id;
        sort(listaClienti, parameter, dir);
    }
}

function del(arr, index) {
    arr.splice(index, 1);
}

function addClient(event) {
    event.preventDefault();
    if (event.target.id == "submit") {
        event.preventDefault();
        var nume = document.getElementById("numeNew").value;
        var prenume = document.getElementById("prenumeNew").value;
        var varsta = document.getElementById("varstaNew").value;
        varsta = Number(varsta);
        var telefon = document.getElementById("telefonNew").value;
        telefon = telefon.split(",")
        if (nume && prenume && varsta && telefon) {
            if (edit == true) {
                listaClienti[index].nume = nume;
                listaClienti[index].prenume = prenume;
                listaClienti[index].varsta = varsta;
                listaClienti[index].telefon = telefon;
                document.getElementById("submit").value = "ADD NEW CLIENT";
                edit = false;
            } else {
                var newClient = { nume: nume, prenume: prenume, varsta: varsta, telefon: telefon }
                listaClienti.push(newClient);
            }
            draw(listaClienti);
            document.getElementById("error").innerText = "";
            document.getElementById("numeNew").value = "";
            document.getElementById("prenumeNew").value = "";
            document.getElementById("varstaNew").value = "";
            document.getElementById("telefonNew").value = "";
        } else { document.getElementById("error").innerText = "All fields required!" }
    }
}
document.getElementById("formClient").addEventListener("click", addClient);
