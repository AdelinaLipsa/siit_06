var gHeadColoanaColorata = "";
var gCuloareCurenta = "white";
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
    }
];

function draw() {
    var tabel = document.getElementById("bodyTabelCLienti");
    var listaRowsAsHtml = '';
    for (var i = 0; i < listaClienti.length; i++) {
        var client = listaClienti[i];
        var htmlRow = `
            <tr>
                <td class="c1">${client.nume}</td>
                <td class="c2">${client.prenume}</td>
                <td class="c3">${client.varsta}</td>
                <td class="c4">${client.telefon}</td>
                <td class="c5"><button onclick="SomeDeleteRowFunction()">Delete</button></td>
            </tr>
        `;
        listaRowsAsHtml += htmlRow;
    }
    tabel.innerHTML = listaRowsAsHtml;
}

//alb -> verde -> rosu -> alb -> verde ... 
function coloreazaColoanaPeCareAmDatClick(className, culoare) {
    var elements = document.getElementsByClassName(className); //intoarce un htmlCollection
    var arr = Array.from(elements); //convert to classical array
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        element.classList.remove(gCuloareCurenta);
        element.classList.add(culoare);
    }
    gCuloareCurenta = culoare;
}

function faciTotulAlb(className) {
    var elements = document.getElementsByClassName(className); //intoarce un htmlCollection
    var arr = Array.from(elements); //convert to classical array
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        element.classList.remove(gCuloareCurenta);
    }
    gCuloareCurenta = "white";
}

function getNextColor() {
    var culoareNoua = "green";
    if (gCuloareCurenta.includes("white")) {
        culoareNoua = "green";
    } else if (gCuloareCurenta.includes("green")) {
        culoareNoua = "red";
    } else if (gCuloareCurenta.includes("red")) {
        culoareNoua = "white";
    }
    return culoareNoua;
}

function attachEventListenersOnThHeaders() {
    var arrayOfTh = document.getElementsByTagName("th");
    for (var i = 0; i < arrayOfTh.length; i++) {
        var th = arrayOfTh[i];
        th.addEventListener("click", laClickPeHeader);
    }
}

function resetCuloriCandAmDatClickPeAltaColoana(e) {
    var headColoanaPeCareAmDatClick = e.target.attributes.identificatorcoloana.value;
    if (headColoanaPeCareAmDatClick != gHeadColoanaColorata) {
        faciTotulAlb(gHeadColoanaColorata);
        gHeadColoanaColorata = headColoanaPeCareAmDatClick;
    }
}

function laClickPeHeader(e) {
    var className = e.target.className;    
    
    resetCuloriCandAmDatClickPeAltaColoana(e);
    coloreazaColoanaPeCareAmDatClick(className, getNextColor());
}

window.addEventListener("load", function () {

    draw();
    attachEventListenersOnThHeaders();
});

function SomeDeleteRowFunction() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

function stergereRand (i) {
    for (var i=0; i<listaClienti.length; i++) {
        var client = listaClienti[i];
    }
}

