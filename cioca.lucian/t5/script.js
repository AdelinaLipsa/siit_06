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

// function tabel(listaClienti) {
//     for ( var i  = 0; i < listaClienti.length; i++){
//         console.log(listaClienti[i].nume);
//         var para = document.createElement("P");
//         para.innerText = listaClienti[i].nume;
//         document.body.appendChild(para);
//     }

// }
// tabel(listaClienti);
// function table (listaClienti){
//     const table = document.createElement("table");
//     const header = document.createElement("tr");
//     const keys=Object.keys(listaClienti[0])
//     console.log(keys)
//     for(const key of keys){
//         const th=document.createElement("th");
//         th.appendChild(document.createTextNode(key));
//         header.appendChild(th);
//     }
//     table.appendChild(header);
//     const len=listaClienti.length
//     for(const row of listaClienti) {
//         const tr = document.createElement("tr");
//         for(const key of keys){
//             const td = document.createElement("td");
//             const content=row[key] ||''
//             td.appendChild(document.createTextNode(content));
//             tr.appendChild(td);
//             delete row[key]
//         }
//       /****
//       you can omit next cycle if all object have the same structor or if the first element of collection have all fields
//       ****/
//         for(const key in  row){
//             const th=document.createElement("th");
//             th.appendChild(document.createTextNode(key))
//             keys.push(key)
//             header.appendChild(th);
//             const td = document.createElement("td");
//             const content=row[key] ||''
//             td.appendChild(document.createTextNode(content));
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     return table;
// }
// table(listaClienti);

// var k = '<tbody>'
// for(i = 0;i < listaClienti.length; i++){
//     k+= '<tr>';
//     k+= '<td>' + listaClienti[i].nume + '</td>';
//     k+= '<td>' + listaClienti[i].prenume + '</td>';
//     k+= '<td>' + listaClienti[i].varsta + '</td>';
//     k+= '<td>' + listaClienti[i].telefon + '</td>';
//     k+= '</tr>';
// }
// k+='</tbody>';
// document.getElementById('tableData').innerHTML = k;
function draw() {
    var table = document.getElementById('bodyTableClienti');
    var listaRowAsHtml = '';
    for (var i = 0; i < listaClienti.length; i++) {
        var client = listaClienti[i];
        var htmlRow = `
            <tr>
                <td class="c1">${client.nume}</td>
                <td class="c2">${client.prenume}</td>
                <td class="c3">${client.varsta}</td>
                <td class="c4">${client.telefon}</td>
            </tr>
        `;
        listaRowAsHtml += htmlRow;
    }
    table.innerHTML = listaRowAsHtml;
}

function coloreaza(className, culoare) {
    var elements = document.getElementsByClassName(className);
    var arr = Array.from(elements);
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        element.classList.toggle(culoare);
    }
}

window.addEventListener("load", function () {
    draw();

    var arrayOfTh = document.getElementsByTagName("th");
    for (var i = 0; i < arrayOfTh.length; i++) {
        var th = arrayOfTh[i];
        th.addEventListener("click", function (b) {
            var className = b.target.className;
            console.log("AI DAT CLICK PE " + className);
            coloreaza(className, "red");

        })
    }
});

