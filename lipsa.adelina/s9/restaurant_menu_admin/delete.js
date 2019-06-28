var menu = [];

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
    var responseText = await ajaxPromise("https://meniu-restaurant-9a3ab.firebaseio.com/.json", "GET");
    window.menu = JSON.parse(responseText);
}


async function del(idx) {
    if (confirm(`Are you sure you want to delete ${menu[idx].nume} ?`)) {
        await ajaxPromise(`https://meniu-restaurant-9a3ab.firebaseio.com/${idx}.json`, "DELETE");
    }
}

    document.querySelector("#cancelBtn").addEventListener("click", function(){
        window.open("admin.html", "_self")
    });

