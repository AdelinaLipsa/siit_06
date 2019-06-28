var menu = [];
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

document.querySelector('#cancelBtn').addEventListener('click', function () {
    window.open('admin.html', '_self');
});

document.querySelector("#addbtn").addEventListener("click", add);
