var createNode = (ele) => document.createElement(ele);

var gHeadColoanaColorata = "";
var gCuloareCurenta = "white";
var gColoanaDupaCareCompar = "";
var keysList = ['nume', 'prenume', 'varsta', 'telefon', 'initialOrder'];
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
    }
];

for (let i = 0; i < listaClienti.length - 1; i++) {
    var increment = Math.max(listaClienti[i].initialOrder, listaClienti[i + 1].initialOrder);
}

function drawForm() {
    var contentDiv = document.getElementsByClassName('content')[0];
    var form = createNode('form');
    form.id = 'myForm';
    let client = Object.keys(listaClienti[0]);
    for (let i = 0; i < client.length - 1; i++) {
        var label = createNode('label');
        label.innerHTML = `${client[i]}`;
        var input = createNode('input');
        input.setAttribute('type', 'text');
        input.id = `${client[i]}`;
        form.appendChild(label);
        form.appendChild(input);
    }
    form.setAttribute('onsubmit', 'event.preventDefault();addClient()');
    var submit = createNode('input');
    submit.setAttribute('type', 'submit');
    submit.id = 'submit';
    form.appendChild(submit);
    contentDiv.appendChild(form);
}

function draw() {
    var tabel = document.getElementById("tableBody");
    var listaRowsAsHtml = '';
    for (var i = 0; i < listaClienti.length; i++) {
        var client = listaClienti[i];
        var htmlRow = `
            <tr class="clientRow">
                <td class="nume">${client.nume}</td>
                <td class="prenume">${client.prenume}</td>
                <td class="varsta">${client.varsta}</td>
                <td class="telefon">${client.telefon}</td>
                <td class="edit" value=${i}>EDIT</td>
                <td class="delete">DELETE</td>
            </tr>
        `;
        listaRowsAsHtml += htmlRow;
    }
    tabel.innerHTML = listaRowsAsHtml;
    editMode();
    delClient();
}

//alb -> verde -> rosu -> alb -> verde ... 
function coloreazaColoanaPeCareAmDatClick(idColoana, culoare) {
    var arr = document.getElementsByClassName(`${idColoana}`);
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        element.classList.add(culoare);
        element.classList.remove(gCuloareCurenta);
    }
    gCuloareCurenta = culoare;
}

function faciTotulAlb(idColoana) {
    var arr = document.getElementsByClassName(`${idColoana}`);
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        element.classList.remove(gCuloareCurenta);
    }
    culoareCurenta = "white";
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
    for (var i = 0; i < e.target.classList.length; i++) {
        var headColoanaPeCareAmDatClick = e.target.classList[i];
    }
    if (headColoanaPeCareAmDatClick != gHeadColoanaColorata) {
        faciTotulAlb(gHeadColoanaColorata);
        gHeadColoanaColorata = headColoanaPeCareAmDatClick;
    }
}

function sorteazaColoanaPeCareAmDatClick(e) {
    for (var i = 0; i < e.target.classList.length; i++) {
        gColoanaDupaCareCompar = e.target.classList[i];
    }
    if (gCuloareCurenta == "white") {
        listaClienti.sort(asc);
    } else if (gCuloareCurenta == "green") {
        listaClienti.sort(desc);
    }
}

function laClickPeHeader(e) {
    for (var i = 0; i < e.target.classList.length; i++) {
        var idColoana = e.target.classList[i];
    }
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

function addClient() {
    var newClient = {};
    for (let i = 0; i < keysList.length - 1; i++) {
        if (keysList[i] == 'telefon') {
            var arrTelefon = document.getElementById('telefon').value.split(',');
            newClient.telefon = arrTelefon;
        } else {
            newClient[keysList[i]] = document.getElementById(`${keysList[i]}`).value;
        }
    }
    if (newClient.varsta > 17) {
        var OK = 1;
        for (let j = 0; j < newClient.telefon.length; j++) {
            if (!/07[0-9]{8}$/.test(newClient.telefon[j])) {
                OK = 0;
            }
        }
        if (OK) {
            increment++;
            newClient.initialOrder = increment;
            listaClienti.push(newClient);
        } else {
            alert('Numarul de telefon nu este unul valid.');
        }
    } else {
        alert('Varsta minima este de 18 ani.');
    }
    draw();
}

function editMode() {
    var editBtn = document.getElementsByClassName('edit');
    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener('click', function () {
            var getValueClient = listaClienti[i];
            for (let j = 0; j < keysList.length - 1; j++) {
                document.getElementById(`${keysList[j]}`).value = getValueClient[keysList[j]];
            }
            var form = document.getElementById('myForm');
            document.getElementById('submit').value = 'Edit';
            form.setAttribute('onsubmit', `event.preventDefault();editClient(${i})`);
        })
    }
}

function editClient(q) {
    var editedClient = {};
    var client = listaClienti[q];
    for (let i = 0; i < keysList.length - 1; i++) {
        if (keysList[i] == 'telefon') {
            var arrTelefon = document.getElementById('telefon').value.split(',');
            editedClient.telefon = arrTelefon;
        } else {
            editedClient[keysList[i]] = document.getElementById(`${keysList[i]}`).value;
        }
    }
    if (editedClient.varsta > 17) {
        var OK = 1;
        for (let j = 0; j < editedClient.telefon.length; j++) {
            if (!/07[0-9]{8}$/.test(editedClient.telefon[j])) {
                OK = 0;
            }
        }
        if (OK) {
            for (let i = 0; i < keysList.length - 1; i++) {
                client[keysList[i]] = editedClient[keysList[i]];
            }
        } else {
            alert('Numarul de telefon nu este unul valid.');
        }
    } else {
        alert('Varsta minima este de 18 ani.');
    }
    document.getElementById('submit').removeAttribute('value');
    var form = document.getElementById('myForm');
    form.setAttribute('onsubmit', 'event.preventDefault();addClient()');
    draw();
}

function delClient() {
    var delBtn = document.getElementsByClassName('delete');
    for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener('click', function () {
            listaClienti.splice(i, 1);
            draw();
        })
    }
}
window.addEventListener("load", function () {
    drawForm();
    draw();
    attachEventListenersOnThHeaders();
});