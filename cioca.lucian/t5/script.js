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
        varsta:30,
        telefon:["0758000000","0758000000"],
        initialOrder: 3
    }               
];

var k = '<tbody>'
for(i = 0;i < listaClienti.length; i++){
    k+= '<tr>';
    k+= '<td>' + listaClienti[i].nume + '</td>';
    k+= '<td>' + listaClienti[i].prenume + '</td>';
    k+= '<td>' + listaClienti[i].varsta + '</td>';
    k+= '<td>' + listaClienti[i].telefon + '</td>';
    k+= '</tr>';
}
k+='</tbody>';
document.getElementById('tableData').innerHTML = k;
