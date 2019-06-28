var menu =[];
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
    <td><button data-id="${id}" class="editBtn" onclick="edit();">Editeaza</button><button data-id="${id}" class="deleteBtn">Stergere</button></td>
    </tr>
    `;
    }
    document.querySelector("table tbody").innerHTML = str;
}

document.querySelector("table tbody").addEventListener("click",function() {
    if(event.target.classList.contains("editBtn")){
    window.open(`edit.html?id=${event.target.dataset.id}`, "_self")
    } else if (event.target.classList.contains("deleteBtn")){
        window.open(`delete.html?id=${event.target.dataset.id}&name=${menu[event.target.dataset.id].nume}`, "_self")
    }
});


document.querySelector("#addBtn").addEventListener("click",function(){
    window.open("add.html","_self")
});