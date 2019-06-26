let getUrl = new URL(document.URL);
let firebaseId = getUrl.searchParams.get('id');

serverRequest()
    .then(response => {
        if (response.status === 200)
            return response.json();
        else
            console.log(response.status);
    })
    .then(result => drawDetails(result))
    .catch(err => console.log(err));

function serverRequest() {
    return fetch(`https://restaurant-menu-v1.firebaseio.com/menu/${firebaseId}.json`)
}


function drawDetails(obj) {
    var html = `
    <h2>${obj.nume.toUpperCase()}</h2><hr/>
    <img src="${obj.imagine}">
    <p><b>Ingrediente:</b> ${obj.ingrediente}</p>
    <p><b>Mod de preparare:</b> ${obj.reteta}</p>
    `;
    document.querySelector('.container').innerHTML = html;
}

document.querySelector('#contactBtn').addEventListener('click', function () {
    window.open('contact.html', '_self')
});

document.querySelector("#menuBtn").addEventListener("click", function () {
    window.open("meniu_preparate.html", "_self")  
});