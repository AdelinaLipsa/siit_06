var url = new URL(document.URL);
var key = url.searchParams.get('id');
var itemName = url.searchParams.get('nume');




    document.querySelector("#item").innerHTML = `Numele produsului pe care doriti sa il stergeti este: ${itemName}`;
    document.querySelector("#further").innerHTML = `Sunteti sigur ca vreti sa continuati?`


    document.querySelector("#yes").addEventListener("click", () => {
        fetch(`https://meniu-restaurant-b799f.firebaseio.com/menu/${key}.json`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText)
                } else if (response.ok && response.status === 200) {
                    alert("Produs sters cu succes!");
                    window.location.assign("../pages/admin.html");
                }
                
            })
            .catch(error => {
                console.error(error)
            })
    });

    document.querySelector("#no").addEventListener("click", () => {
        window.location.assign("../pages/admin.html");
    });




