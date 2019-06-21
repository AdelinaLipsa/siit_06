document.querySelector('#addBtn').addEventListener('click', function () {

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

        fetch('https://test-project-siit.firebaseio.com/menu.json', {
            method: 'POST',
            body: JSON.stringify(newItem)
        })
            .then(() => window.open('./admin.html', '_self'))
            .catch(err => console.log(err));
    } else
        document.querySelector('#helper').innerHTML = 'Toate campurile sunt obligatorii!';
});

document.querySelector('#cancelBtn').addEventListener('click', function () {
    window.open('./admin.html', '_self');
});
