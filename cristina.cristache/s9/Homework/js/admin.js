
document.querySelector("#add").addEventListener("click", () => {
    window.location.assign("../pages/add.html")
})

fetch("https://meniu-restaurant-b799f.firebaseio.com/.json")
    .then(response => {
        return response.json()
    })
    .then((response) => {
        window.menu = response.menu;
        for (key in menu)
            document.querySelector("table tbody").innerHTML += `
                <tr>
                    <td><img style="width:200px;height:auto" src = ${menu[key].imagine}></td>
                    <td><span style="font-weight: bold;">${menu[key].nume}</span><br><p>${menu[key].ingrediente}</p></td>
                    <td><button onclick = "edit('${key}')" >Editeaza</button></td>
                    <td><button onclick = "del('${key}')" >Sterge</button></td>
                </tr>
                `
    });

function edit(key) {
    window.location.assign(`edit.html?id=${key}`)
}

function del(key) {
    window.location.assign(`delete.html?id=${key}&nume=${menu[key].nume}`)
}



