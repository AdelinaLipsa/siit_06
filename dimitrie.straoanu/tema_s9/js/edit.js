let url = new URL(document.URL);
let productId = url.searchParams.get('id');

document.querySelector('#cancelBtn').addEventListener('click', function () {
    window.open('./admin.html', '_self');
});


fetch(`https://test-project-siit.firebaseio.com/menu/${productId}.json`)
    .then(response => {
        if (response.status === 200)
            return response.json();
        else
            console.log(response.status);
    })
    .then(result => {
        document.querySelector('#name').value = result.nume;
        document.querySelector('#image').value = result.imagine;
        document.querySelector('#ingredients').value = result.ingrediente;
        document.querySelector('#recipe').value = result.reteta;
    })
    .catch(err => console.log(err));

document.querySelector('#saveBtn').addEventListener('click', function () {

    let nume = document.querySelector('#name').value;
    let imagine = document.querySelector('#image').value;
    let ingrediente = document.querySelector('#ingredients').value;
    let reteta = document.querySelector('#recipe').value;

    if (nume && imagine && ingrediente && reteta) {

        let newItem = {
            nume,
            imagine,
            ingrediente,
            reteta
        };

        fetch(`https://test-project-siit.firebaseio.com/menu/${productId}.json`, {
            method: 'PUT',
            body: JSON.stringify(newItem)
        })
            .then(() => window.open('./admin.html', '_self'))
            .catch(err => console.log(err));
    } else
        document.querySelector('#helper').innerHTML = 'Toate campurile sunt obligatorii!';
});