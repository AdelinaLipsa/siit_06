var numeRef = document.getElementById("nume");
var telefonRef = document.getElementById("telefon");
var butonRef = document.getElementById("buton");

var agendaObj = [{ nume: "nume", numar: "telefon" }];

var tabel = document.createElement("table");
tabel.id = "tabelId";
var header = tabel.createTHead();
var rowh = header.insertRow(0);
rowh.id = "header";
var cellh1 = rowh.insertCell(0);
var cellh2 = rowh.insertCell(1);

cellh1.innerHTML = agendaObj[0].nume;
cellh2.innerHTML = agendaObj[0].numar;

function apasaEnter(event) {
    if (event.keyCode === 13) {
        butonRef.click();
    }
};
telefonRef.addEventListener("keypress", apasaEnter);

main();

function main() {
    butonRef.onclick = function crap() {

        if (numeRef.value != "" && telefonRef.value != "") {

            let temp = {};
            temp.nume = numeRef.value;
            temp.numar = telefonRef.value;
            agendaObj.push(temp);

            if (agendaObj.length <= 2) {
                var div = document.createElement("div");
                div.id = "outPut";
                div.className = "outZone";
                div.style.paddingBottom = "100 px";
                document.getElementById("body").appendChild(div);
            }

            var row = tabel.insertRow(tabel.rows.length);
            row.id = tabel.rows.length - 1;
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            var modifica = "<u id=" + row.id + " onclick='myModify(" + row.id + ")'>Modifica</u>";
            var sterge = "<u id=" + row.id + "   onclick='myDeleteFunction(" + row.id + ")'>Sterge</u>";

            cell1.innerHTML = agendaObj[agendaObj.length - 1].nume;
            cell2.innerHTML = agendaObj[agendaObj.length - 1].numar;
            cell3.innerHTML = modifica;
            cell4.innerHTML = sterge;

            tabel.className = "tableAlign";

            document.getElementById("outPut").appendChild(tabel);

            numeRef.value = "";
            telefonRef.value = "";
        }
    }
}

function myDeleteFunction(a) {
    var child = document.getElementById(a);
    child.parentNode.removeChild(child);
}


function myModify(a) {

    butonRef.innerHTML = "MODIFICA";
    numeRef.value = agendaObj[a].nume;
    telefonRef.value = agendaObj[a].numar;

    butonRef.onclick = function whaat() {

        document.getElementById(a).cells[0].innerHTML = numeRef.value;
        document.getElementById(a).cells[1].innerHTML = telefonRef.value;

        agendaObj[a].nume = numeRef.value;
        agendaObj[a].numar = telefonRef.value;
        butonRef.innerHTML = "ADAUGA CONTACT";

        main();
    }

}
