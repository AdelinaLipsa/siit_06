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


$(function () {
    drawTable(listaClienti);

});



function drawTable(data) {
    let clients_data = "";
    //let btn = document.createElement("button");
    $.each(data, function (index, value) {
        clients_data += "<tr>";
        clients_data += "<th scope='row'>" + value.initialOrder + "</th>";
        clients_data += "<td>" + value.nume + "</td>";
        clients_data += "<td>" + value.prenume + "</td>";
        clients_data += "<td>" + value.varsta + "</td>";
        clients_data += "<td>" + value.telefon + "</td>";
        clients_data += "<td>" + "<button onclick='deleteRow(" + index + ")' class='btn btn-danger'>DELETE</button>" + "</td>"
        clients_data += "</tr>";
    });
    $("#table").html(clients_data);
};

function sortByKeyDesc(element, column) {
    if ($(element).attr('dir') === 'desc') {
        sortByKeyAsc(element, column)
    } else {
        $(element).attr('dir', 'desc');
        let sorted = listaClienti.sort(function (a, b) {
            var x = a[column];
            var y = b[column];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });

        drawTable(sorted);
    }
};


function sortByKeyAsc(element, column) {

    if ($(element).attr('dir') === 'asc') {
        sortByKeyDesc(element, column)
    } else {
        $(element).attr('dir', 'asc');
        let sorted = listaClienti.sort(function (a, b) {
            var x = a[column];
            var y = b[column];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });

        drawTable(sorted);
    }
};

function deleteRow(index) {
    listaClienti.splice(index, 1);
    drawTable(listaClienti);
};

/*function verifyForm(){
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let age = document.getElementById("age");
    let phone = document.getElementById("phone");

    if (name != null && surname != null && age != null && phone != null){
        let nameVal = name.value;
        let surnameVal = surname.value;
        let ageVal = age.value;
        let phoneVal = phone.value;
        let phoneno = /^\d{10}$/;
        if (!(isNaN(nameVal))){
            document.getElementById("verifyName").innerHTML = "This field should contain letter characters!"
        }
        if (!(isNaN(surnameVal))){
            document.getElementById("verifySurname").innerHTML = "This field should contain letter characters!"
        }
        if(isNaN(ageVal)){
            document.getElementById("verifyAge").innerHTML = "This field should contain numbers! "
        }
        if(function(){
           return phoneVal.match(phoneno);
        }) 
            document.getElementById("verifyAge").innerHTML = "This field should contain numbers! "
        }
    }
};*/


