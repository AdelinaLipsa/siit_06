function myFunction() {
    myVar = setTimeout(preLoader, 3000);
  }
  
var preloader = document.querySelector(".loader");
function preLoader(){
preloader.style.display = "none";
} 

var phones = {};


getPhones();

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

async function getPhones() {
    var responseText = await ajaxPromise("https://proiect-final-f676e.firebaseio.com/phones.json", "GET");
    window.phones = JSON.parse(responseText);
    draw();
    
}

function draw() {
    let html = "";
    for (var id in phones) {
        html += `
        <td>
        <img class="phonePic" src="${phones[id].image}"><br/><br/>
        <h3>${phones[id].name}</h3><br/>
        <b>PRICE:</b>&nbsp${phones[id].price}<br/>
        <b>In stock:</b> ${phones[id].stock}</br></br>
        <button id="${id}" class="detailsBtn">Details</button>
        </td>
        `;
    }
    document.querySelector("table tbody").innerHTML = html;
}

document.addEventListener('click', function (e) {
    if (e.target && e.target.classList == 'detailsBtn') {
        window.open(`phone_details.html?id=${event.target.id}`, "_self")
    }
});