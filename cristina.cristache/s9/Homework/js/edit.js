var item;
var url = new URL(document.URL);
var key = url.searchParams.get('id');

document.querySelector("#editItem").addEventListener("click", editItem)
document.querySelector("#backToMenu").addEventListener("click", () => {
    window.location.assign("../pages/admin.html")
});

window.onload = () => {
    fetch(`https://meniu-restaurant-b799f.firebaseio.com/menu/${key}.json`)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            //console.log(response)
            window.item = response;
            document.querySelector("#itemTable").innerHTML = `
            <tr><img style = "width:500px; height:auto; margin-bottom:2em" src = "${item.imagine}"></tr>  <br>
            <tr><span style="font-weight: bold;">Denumire:</span> ${item.nume}</tr> <br>
            <tr><span style="font-weight: bold;">Ingrediente:</span> ${item.ingrediente}</tr> <br>
            <tr><span style="font-weight: bold;">Reteta:</span> ${item.reteta}</tr>
            
            `
        })
        .then(() => {
            document.querySelector("#urlImg").value = item.imagine;
            document.querySelector("#ingredients").value = item.ingrediente;
            document.querySelector("#name").value = item.nume;
            document.querySelector("#recipe").value = item.reteta;
        });
}

function editItem() {
    window.item = {
        imagine: document.querySelector("#urlImg").value,
        ingrediente: document.querySelector("#ingredients").value,
        nume: document.querySelector("#name").value,
        reteta: document.querySelector("#recipe").value,
    }

    fetch(`https://meniu-restaurant-b799f.firebaseio.com/menu/${key}.json`, {
        method: 'PUT',
        body: JSON.stringify(item)
    })
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);

            if (response.ok && response.status === 200)
                alert("Produs modificat cu succes :D");
                window.location.assign("../pages/admin.html");

        })
        .catch((err) => {
            console.log("Error");
            console.log(err)
        })
}
