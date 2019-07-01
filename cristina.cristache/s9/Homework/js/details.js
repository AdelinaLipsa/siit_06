
var item = {};
var url = new URL(document.URL);
var key = url.searchParams.get('id');

document.querySelector("#backToMenu").addEventListener("click", () => {
    window.location.assign("../index.html");
});

fetch(`https://meniu-restaurant-b799f.firebaseio.com/menu/${key}.json`)
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(response => {
        window.item = response;
        document.querySelector("table tbody").innerHTML = `
                    <tr><img class = "img"  src = "${response.imagine}"></tr>  
                    <tr><span style="font-weight: bold;">Denumire:</span> ${response.nume}</tr>
                    <tr><span style="font-weight: bold;">Ingrediente:</span> ${response.ingrediente}</tr>
                    <tr><span style="font-weight: bold;">Reteta:</span> ${response.reteta}</tr>
                    `

    })
    .catch(error => {
        console.error(error);
    })

