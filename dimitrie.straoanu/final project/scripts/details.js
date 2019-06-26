let url = new URL(document.URL);
let id = url.searchParams.get('id');

getData(`https://my-online-store-2bdc4.firebaseio.com/my_products/${id}.json`)
    .then(function (response) {
        return response.json();
    })
    .then(function (product) {
        draw(product);
    })

function getData(url, method, body) {
    return fetch(url, { method, body });
}

function draw(obj) {
    document.querySelector('#mainContainer').innerHTML = '';
    let html = `
            <div class="picDetails">
                <img src="${obj.pic}">
            </div>
            <div class="content">
                <p><b>${obj.name}</b></p>
                <p>${obj.desc} </p>
                <p>Price: ${obj.price} euro</p>
                <p>Available: ${obj.qty} pcs</p>
                <input type="number" value="1" autofocus>
                <button class="addBtn">Add to cart</button>
            </div>    
        `;
    document.querySelector('#mainContainer').innerHTML = html;
}