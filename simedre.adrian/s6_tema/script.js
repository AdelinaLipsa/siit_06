// 1. Agenda
var agenda = [];
var index;
var edit;

function addContact(event){
    event.preventDefault();
    if (event.target.id == "agenda_submit"){
        var nume = document.getElementById("nume").value;
        var telefon = document.getElementById("telefon").value;
        if (nume && telefon){
            if (edit == true){
                agenda[index].nume = nume;
                agenda[index].telefon = telefon;
                document.getElementById("agenda_submit").value = "ADAUGA CONTACT";
                edit = false;
            } else {
                var newContact = {nume: nume, telefon: telefon}
                agenda.push(newContact);
                document.getElementById("agenda_error").innerHTML = "";
            }
            document.getElementById("nume").value = "";
            document.getElementById("telefon").value = "";
        } else {
            document.getElementById("agenda_error").innerHTML = "Toate campurile sunt necesare!";
        }
    }
    //console.log(agenda);
}
document.getElementById("agenda_form").addEventListener("click", addContact);

function drawAgenda(){
    if (event.target.id == "agenda_submit"){
        var show = document.getElementById("show_agenda");
        show.className = " show";
    }
        var tableAgenda = document.getElementById("table_agenda");
        var tableDataAgenda = "";
        var tableHeadAgenda = `<tr>
                            <th>Nume</th>
                            <th>Telefon</th>
                            <th></th>
                            <th></th>
                        </tr>`;
        for (var i = 0; i < agenda.length; i++){
            tableDataAgenda += `<tr>
                                <td>${agenda[i].nume}</td>
                                <td>${agenda[i].telefon}</td>
                                <td id="edit">Modifica</td>
                                <td id="delete">Sterge</td>
                            </tr>`;
            //console.log(tableData);
        }
        tableAgenda.innerHTML = tableHeadAgenda + tableDataAgenda;
}
document.getElementById("agenda_form").addEventListener("click", drawAgenda);

function delContact(){
    agenda.splice(index, 1);
}

function agendaClicked(){
    // delete contact
    index = Number(event.target.parentElement.rowIndex - 1);
    if (event.target.id == "delete"){
        delContact(agenda, index);
        drawAgenda(agenda);
    }
    //console.log(index);
    //edit contact
    if (event.target.id == "edit"){
        document.getElementById("nume").value = agenda[index].nume;
        document.getElementById("telefon").value = agenda[index].telefon;

        document.getElementById("agenda_submit").value = "SALVEAZA";

        var rows = document.getElementsByTagName("tr");
        for (var i = 0; i < rows.length; i++){
            rows[i].classList.remove("selectedRow");
        }
        event.target.parentElement.classList.add("selectedRow");
        edit = true;
        document.getElementById("agenda_error").innerHTML = "";
    }
}
document.getElementById("table_agenda").addEventListener("click", agendaClicked);

// -------------------------------------------------------
// 2. Shopping List
var shoppingList = [];
var index2;
var dir;

function addItem(event){
    event.preventDefault();
    if (event.target.id == "shopping_submit"){
        var product = document.getElementById("product").value;
        if (product){
            shoppingList.push(product);
            document.getElementById("product").value = "";
        }
    }
    //console.log(shoppingList);
}
document.getElementById("shopping_form").addEventListener("click", addItem);

function drawList(){
    if (event.target.id == "shopping_submit"){
        var show = document.getElementById("show_shoppind");
        show.className = " show";
    }
    var tableShopping = document.getElementById("table_shopping");
    var tableDataShopping = "";

    var table = document.getElementById("table_shopping");
    var rows = table.rows;
    if (event.target.id == "shopping_submit" && Number(rows.length) > 1){
        var nrRow = rows.length;
        var newRow = tableShopping.insertRow(nrRow);
        var x = newRow.insertCell(0);
        var y = newRow.insertCell(1);
        x.innerHTML = `${shoppingList[shoppingList.length-1]}`;
        y.innerHTML = `Mark as buyed`;
        y.setAttribute("id", "mark");
    } else if (event.target.id == "shopping_submit" || event.target.id == "asc" || event.target.id == "dsc"){
    var tableHeadShopping = `<tr>
                                <th>Item description</th>
                                <th>Action</th>
                            </tr>`;
    for (var i = 0; i < shoppingList.length; i++){
        tableDataShopping += `<tr>
                                <td>${shoppingList[i]}</td>
                                <td id="mark">Mark as buyed</td>
                            </tr>`;
    }
    tableShopping.innerHTML = tableHeadShopping + tableDataShopping;
}
//console.log(Number(rows.length));
}
document.getElementById("shopping_form").addEventListener("click", drawList);

function markBuyed(){
    index2 = Number(event.target.parentElement.rowIndex - 1);
    if (event.target.id == "mark"){
        var table = document.getElementById("table_shopping");
        var rows = table.rows;
        var cell = rows[index2+1].cells[0];
        cell.className = "marked";
    }
    //console.log(shoppingList);
    //console.log(rows);
    //console.log(index2);
    //console.log(cell);
}
document.getElementById("table_shopping").addEventListener("click", markBuyed);

function sort(shoppingList, dir){
    for (var i = 0; i < shoppingList.length; i++){
        for (var j = i + 1; j < shoppingList.length; j++){
            if (dir === "dsc"){
                if (shoppingList[i] > shoppingList[j]){
                    var temp = shoppingList[i];
                    shoppingList[i] = shoppingList[j];
                    shoppingList[j] = temp;
                }
            } else if (dir === "asc"){
                if (shoppingList[i] < shoppingList[j]){
                    var temp = shoppingList[i];
                    shoppingList[i] = shoppingList[j];
                    shoppingList[j] = temp; 
                }
            }
        }
    }
    drawList(shoppingList);
}

function criteriu(){
        dir = event.target.id;
        if (dir == "asc"){
            dir = "dsc";
            culoareColoana1 = "green";
        } else{
            dir = "asc";
            culoareColoana1 = "red";
        }
        sort(shoppingList, dir);
}
document.getElementById("asc").addEventListener("click", criteriu);
document.getElementById("dsc").addEventListener("click", criteriu);

// -------------------------------------------------------
// 2. Images
var imgArray = new Array ("prize.png","goat.png","goat.png");
var closedDor = new Array ("1.png","2.png","3.png");
var cash = 100;
var sold = document.getElementById("sold");
var bet;
sold.innerHTML = "Sold: $ " + cash;


function switchImg(event){
    if (event.target.id == "img1" || event.target.id == "img2" || event.target.id == "img3"){
        var ram = Math.floor(Math.random() * imgArray.length);
        document.getElementById(event.target.id).src = imgArray[ram];
    }
    var a =  document.getElementById(event.target.id).src;
    bet  = Number(document.getElementById("bet").value);
    //console.log(bet);
    //console.log(a);
    //console.log(document.getElementById(event.target.id).src);
    if (bet > cash){
        alert (`PARIUL ESTE MAI MARE DECAT SOLDUL`);
        document.getElementById("img1").src = "1.png";
        document.getElementById("img2").src = "2.png";
        document.getElementById("img3").src = "3.png";
        return;
    } else {
        if (cash <= 0){
            alert (`SOLDUL ESTE EGAL SAU MAI MIC DECAT 0`);
            document.getElementById("img1").src = "1.png";
            document.getElementById("img2").src = "2.png";
            document.getElementById("img3").src = "3.png";
            return;
        } else {
            if ( (document.getElementById(event.target.id).src = imgArray[ram]) == (document.getElementById(event.target.id).src = imgArray[0])){
                if (bet > 0){
                    setTimeout ( function(){alert(`FELICITARI AI CASTIGAT!!!!!!\n$ ${bet*2}`);}, 500);
                    cash = cash + bet;
                    sold.innerHTML = "Sold: $ " + cash;
                }
                if (event.target.id == "img1"){
                    setTimeout ( function(){ document.getElementById(event.target.id).src = "1.png"}, 700);
                } else if (event.target.id == "img2"){
                    setTimeout ( function(){ document.getElementById(event.target.id).src = "2.png"}, 700);
                }else if (event.target.id == "img3"){
                    setTimeout ( function(){ document.getElementById(event.target.id).src = "3.png"}, 700);
                }
            } else if ( (document.getElementById(event.target.id).src = imgArray[ram]) == (document.getElementById(event.target.id).src = imgArray[1])){
                if (bet > 0){
                    setTimeout (function(){alert(`MAI INCEARCA!\n Ai pierdut $ ${bet}`);},500);
                    cash = cash - bet;
                    sold.innerHTML = "Sold: $ " + cash;
                }
                if (event.target.id == "img1"){
                    setTimeout ( function(){ document.getElementById(event.target.id).src = "1.png"}, 700);
                } else if (event.target.id == "img2"){
                    setTimeout ( function(){ document.getElementById(event.target.id).src = "2.png"}, 700);
                }else if (event.target.id == "img3"){
                    setTimeout ( function(){ document.getElementById(event.target.id).src = "3.png"}, 700);
                }
            }
        }
    }
    //console.log(bet);
}
document.getElementById("image_div").addEventListener("click", switchImg);