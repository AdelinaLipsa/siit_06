
document.querySelector("#addBtn").addEventListener("click", () => {

    var imagine = document.querySelector("#urlImg").value;
    var ingrediente = document.querySelector("#ingredients").value;
    var nume = document.querySelector("#name").value;
    var reteta = document.querySelector("#recipe").value;

    var toPost = {
        imagine: imagine,
        ingrediente: ingrediente,
        nume: nume,
        reteta: reteta,
    }

    fetch(`https://meniu-restaurant-b799f.firebaseio.com/menu/.json`, {
        method: "POST",
        body: JSON.stringify(toPost)
    })
        .then((response) => {
            if (response.status === 200 && response.statusText === "OK") {
                alert("Preparat adaugat cu succes :D");
                window.location.assign("../pages/admin.html");
                console.log(response);
            } else if (!response.ok) throw Error(response.statusText);
        })
        .catch(error => {
            console.log(error);
        })
})