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
    var table = document.getElementById("bodyTabelClienti");
    var listaRowsAsHtml = '';
    for (var i = 0; i < listaClienti.length; i++) {
        var client = listaClienti[i];
        var htmlRow = `
        <tr>
            <td identificatorColoana="c1" class="c1">${client.nume}</td>
            <td identificatorColoana="c2" class="c2">${client.prenume}</td>
            <td identificatorColoana="c3" class="c3">${client.varsta}</td>
            <td identificatorColoana="c4" class="c4">${client.telefon}</td>
        </tr>
    
    `;
        listaRowsAsHtml += htmlRow;
    }
    table.innerHTML = listaRowsAsHtml;
}
//alb -> verde -> rosu -> alb -> verde ... 
function coloreazaColoanaPeCareAmDatClick(idColoana, culoare) {
    var arr = document.querySelectorAll(`[identificatorcoloana="${idColoana}"]`);
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        element.classList.remove(gCuloareCurenta);
        element.classList.add(culoare);
    }
    gCuloareCurenta = culoare;
}

function faciTotulAlb(idColoana) {
    var arr = document.querySelectorAll(`[identificatorcoloana="${idColoana}"]`);
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

function sorteazaColoanaPeCareAmDatClick(e) {
    gColoanaDupaCareCompar = e.target.attributes.numeColoanaPtSortare.value;
    if (gCuloareCurenta == "white") {
        listaClienti.sort(asc);
    } else if (gCuloareCurenta == "green") {
        listaClienti.sort(desc);
    }
}

function laClickPeHeader(e) {
    var idColoana = e.target.attributes.identificatorcoloana.value;

    sorteazaColoanaPeCareAmDatClick(e);
    draw();

    resetCuloriCandAmDatClickPeAltaColoana(e);
    coloreazaColoanaPeCareAmDatClick(idColoana, getNextColor());
}

function asc(a, b) {
    if (a[gColoanaDupaCareCompar] > b[gColoanaDupaCareCompar]) return 1;
    else if (a[gColoanaDupaCareCompar] < b[gColoanaDupaCareCompar]) return -1;
    else return 0;
}

function desc(a, b) {
    if (a[gColoanaDupaCareCompar] > b[gColoanaDupaCareCompar]) return -1;
    else if (a[gColoanaDupaCareCompar] < b[gColoanaDupaCareCompar]) return 1;
    else return 0;
}

window.addEventListener("load", function () {

    draw();
    attachEventListenersOnThHeaders();
});