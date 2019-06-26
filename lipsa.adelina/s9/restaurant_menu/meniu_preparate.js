function ajax(url, method, body, callback, callbackError) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                if (typeof callback === "function") {
                    callback(this.responseText);
                }
            } else {
                if (typeof callbackError === "function") {
                    callbackError(this.responseText);
                }
            }
        }
    };
    xhttp.open(method, url, true);
    xhttp.send(body);
}

async function ajaxPromise(url, method, body) {
    return new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(this.responseText);
                } else {
                    reject(this);
                }
            }
        };
        xhttp.open(method, url, true);
        xhttp.send(body);
    });
}

async function getMenu() {
    var responseText = await ajaxPromise("https://meniu-restaurant-9a3ab.firebaseio.com/menu.json", "GET");
    window.menu = JSON.parse(responseText);
    //console.log(menu);
    draw();
}


function draw() {
    var str = "";
    for (var id in menu) {
        str += `
    <tr>
    <td><img class="foodPic" src="${menu[id].imagine}"></td>
    <td><h3>${menu[id].nume.toUpperCase()}</h3><hr/><p>${menu[id].ingrediente}</p></td>
    <td><button id="${id}" class="detailsBtn">Detalii</button></td>
    </tr>
    `;
    }
    document.querySelector("table tbody").innerHTML = str;
}

function filter() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputIngrediente");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


document.querySelector("table tbody").addEventListener('click', function () {
    if (event.target.classList.contains('detailsBtn')) {
        window.open(`detalii_preparate.html?id=${event.target.id}`, '_self')
    }
});

document.querySelector('#contactBtn').addEventListener('click', function () {
    window.open('contact.html', '_self')

});