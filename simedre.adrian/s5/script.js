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
function draw(){
    for (var i = 0; i<listaClienti.length; i++){
        var table = document.getElementById("clienti");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        cell1.setAttribute("class", "cell1");
        var cell2 = row.insertCell(1);
        cell2.setAttribute("class", "cell2");
        var cell3 = row.insertCell(2);
        cell3.setAttribute("class", "cell3");
        var cell4 = row.insertCell(3);
        cell4.setAttribute("class", "cell4");
        var cell5 = row.insertCell(4);
        cell5.setAttribute("class", "cell5");
        cell1.innerHTML = listaClienti[i].nume;
        cell2.innerHTML = listaClienti[i].prenume;
        cell3.innerHTML = listaClienti[i].varsta;
        cell4.innerHTML = listaClienti[i].telefon;
        cell5.innerHTML = "<button onclick=erase("+ i +"),deleteRow(this)>Erase</button>";
    }
}
draw(listaClienti);

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("clienti");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    //Make a loop that will continue until no switching has been done:
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        //Loop through all table rows (except the first, which contains table headers):
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            //Get the two elements you want to compare, one from current row and one from the next:
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            //check if the two rows should switch place, based on the direction, asc or desc:
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch= true;
                break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
                }
            }
        }
        if (shouldSwitch) {
            //If a switch has been marked, make the switch and mark that a switch has been done:
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;      
        } else {
            //If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }   
}
function erase(i){
    listaClienti.splice(i, 1);
}
function deleteRow(r) {
    var j = r.parentNode.parentNode.rowIndex;
    document.getElementById("clienti").deleteRow(j);
}

function addClient(event) {
    event.preventDefault();
    if (event.target.id == "submit") {
        var nume = document.getElementById("nume").value;
        var prenume = document.getElementById("prenume").value;
        var varsta = document.getElementById("varsta").value;
        varsta = Number(varsta);
        var telefon = document.getElementById("telefon").value;
        telefon = telefon.split(",")
        if (nume && prenume && varsta && telefon) {
            var newClient = { nume: nume, prenume: prenume, varsta: varsta, telefon: telefon }
            listaClienti.push(newClient);
            draw(listaClienti);
            document.getElementById("error").innerText = "";
        } else { document.getElementById("error").innerText = "Toate campurile sunt obligatorii!" }
    }
}
document.getElementById("formClient").addEventListener("click", addClient);
