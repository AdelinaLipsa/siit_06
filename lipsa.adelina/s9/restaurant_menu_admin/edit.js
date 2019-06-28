/*var menu=[];
var indexEdit = -1;

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
}

function edit(idx) {
    var form = document.querySelector("#addForm");
    form.querySelector("[name=\"nume\"]").value = menu[idx].nume;
    form.querySelector("[name=\"url\"]").value= menu[idx].imagine;
    form.querySelector("[name=\"ingrediente\"]").value=menu[idx].ingrediente;
    form.querySelector("[name=\"preparare\"]").value =menu[idx].reteta;
    indexEdit = idx;
}

document.querySelector('#cancelBtn').addEventListener('click', function () {
    window.open('admin.html', '_self');
});


async function add(event, form) {
    event.preventDefault();
    var obj = {
        nume: form.querySelector("[name=\"nume\"]").value,
        imagine: form.querySelector("[name=\"url\"]").value,
        ingrediente: form.querySelector("[name=\"ingrediente\"]").value,
        reteta: form.querySelector("[name=\"preparare\"]").value
    };

    if (indexEdit === -1) {
        await ajaxPromise("https://meniu-restaurant-9a3ab.firebaseio.com/menu.json", "POST", JSON.stringify(obj))
    } else {
        await ajaxPromise(
            `https://meniu-restaurant-9a3ab.firebaseio.com/menu.json/${indexEdit}.json`,
            "PUT",
            JSON.stringify(obj));
    }
    getMenu();
    form.reset();
}
*/

let url = new URL(document.URL);
let firebaseId = url.searchParams.get('id');
var form=document.querySelector("#addForm");
document.querySelector('#cancelBtn').addEventListener('click', function () {
    window.open('admin.html', '_self');
});

fetch(`https://meniu-restaurant-9a3ab.firebaseio.com/menu/${firebaseId}.json`)
    .then(response => {
        if (response.status === 200)
            return response.json();
        else
            console.log(response.status);
    })
    .then(result => {
        form.querySelector("[name=\"nume\"]").value = result.nume;
        form.querySelector("[name=\"url\"]").value = result.imagine;
        form.querySelector("[name=\"ingrediente\"]").value = result.ingrediente;
        form.querySelector("[name=\"preparare\"]").value = result.reteta;
    })
    .catch(err => console.log(err));

document.querySelector('#saveBtn').addEventListener('click', function () {

    let nume = form.querySelector("[name=\"nume\"]").value;
    let imagine = form.querySelector("[name=\"url\"]").value;
    let ingrediente = form.querySelector("[name=\"ingrediente\"]").value;
    let reteta = form.querySelector("[name=\"preparare\"]").value;

    if (nume && imagine && ingrediente && reteta) {

        let newItem = {
            nume,
            imagine,
            ingrediente,
            reteta
        };

        fetch(`https://meniu-restaurant-9a3ab.firebaseio.com/menu/${firebaseId}.json`, {
            method: 'PUT',
            body: JSON.stringify(newItem)
        })
            .then(() => window.open('admin.html', '_self'))
            .catch(err => console.log(err));
    } else
        document.querySelector('#error').innerHTML = 'Toate campurile sunt obligatorii!';
});