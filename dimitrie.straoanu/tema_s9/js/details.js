let url = new URL(document.URL);
let productId = url.searchParams.get('id');

serverRequest()
    .then(response => {
        if (response.status === 200)
            return response.json();
        else
            console.log(response.status);
    })
    .then(result => draw(result))
    .catch(err => console.log(err));

function serverRequest() {
    return fetch(`https://test-project-siit.firebaseio.com/menu/${productId}.json`)
}

function draw(obj) {
    let html = `
        <img class="foodPicDetails" src="${obj.imagine}">
        <h3>${obj.nume}</h3>
        <p><b>Ingrediente:</b> ${obj.ingrediente}</p>
        <p><b>Mod de preparare:</b> ${obj.reteta}</p>
    `;
    document.querySelector('.container').innerHTML = html;
}

document.querySelector('#menuBtn').addEventListener('click', function () {
    window.open('../index.html', '_self')

});

document.querySelector('#contactBtn').addEventListener('click', function () {
    window.open('./contact.html', '_self')

});
