let url = new URL(document.URL);
let productName = url.searchParams.get('name');
let productId = url.searchParams.get('id');

document.querySelector('#productName').innerHTML = productName;

document.querySelector('#deleteBtn').addEventListener('click', function () {
    fetch(`https://test-project-siit.firebaseio.com/menu/${productId}.json`, {
        method: 'DELETE'
    })
        .then(() => window.open('./admin.html', '_self'))
        .catch(err => console.log(err));
});

document.querySelector('#cancelBtn').addEventListener('click', function () {
    window.open('./admin.html', '_self');
});
