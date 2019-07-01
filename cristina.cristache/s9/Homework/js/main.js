var menu;

document.querySelector('#searchBtn').addEventListener("click", filterIngredients);
document.querySelector('#contact').addEventListener("click", () => {
    window.location.assign("./pages/contact.html");

});


fetch("https://meniu-restaurant-b799f.firebaseio.com/.json")
    .then(response => {
        return response.json();
    }).then(response => {
        window.menu = response.menu;
        // console.log(response)
        draw();
    });

function filterIngredients() {
    document.querySelector("#menu").innerHTML = '';
    var searchFor = document.querySelector('input').value;
    document.querySelector("#backBtn").classList.remove("toggle");
    for (key in menu)
        if (menu[key].ingrediente.includes(searchFor))
            document.querySelector("#menu").innerHTML += `
            <tr>
                <td><img style="width:200px;height:auto" src = ${menu[key].imagine}></td>
                <td><span style="font-weight: bold;">${menu[key].nume}</span><br><p>${menu[key].ingrediente}</p></td>
                <td><button id = "detailsBtn" onclick = "getDetails('${key}')">Detalii</button></td>
            </tr>
            `

}

function draw() {
    document.querySelector("#menu").innerHTML = '';
    for (key in menu)
        document.querySelector("#menu").innerHTML += `
            <tr>
                <td><img style="width:200px;height:auto" src = ${menu[key].imagine}></td>
                <td><span style="font-weight: bold;">${menu[key].nume}</span><br><p>${menu[key].ingrediente}</p></td>
                <td><button id = "detailsBtn" onclick = "getDetails('${key}')" >Detalii</button></td>
            </tr>
            `
}

function back() {
    document.querySelector("#backBtn").classList.add("toggle");
    draw();
}

function getDetails(key) {
    window.location.assign(`pages/details.html?id=${key}`);
}
