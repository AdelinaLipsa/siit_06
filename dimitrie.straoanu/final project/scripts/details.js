let url = new URL(document.URL);
let id = url.searchParams.get('id');

getData(`https://my-online-store-2bdc4.firebaseio.com/my_products/${id}.json`)
    .then(function (response) {
        return response.json();
    })
    .then(function (product) {
        draw(product);
        document.querySelector('#addBtn').addEventListener('click', function () {
            let qty = Number(document.querySelector('#qtyInput').value);
            console.log(qty);
            addToCart(product, qty, id);
        });

    })

document.querySelector('#cartBtn').addEventListener('click', function () {
    location.assign('./cart.html');
});

document.querySelector('#backBtn').addEventListener('click', function () {
    location.assign('../index.html');
});


function getData(url, method, body) {
    return fetch(url, {
        method,
        body
    });
}

function addToCart(product, qty, id) {
    let cart;
    if (localStorage.getItem('cart'))
        cart = JSON.parse(localStorage.getItem('cart'));
    else
        cart = {};

    if (cart.hasOwnProperty(id))
        cart[id].qty += qty;
    else {
        product.qty = qty;
        cart[id] = product;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
}


function draw(obj) {
    document.querySelector('#mainContainer').innerHTML = '';
    let html = `
            <div class="picDetails">
                <img src="${obj.pic}">
            </div>
            <div class="content">
                <p><b>${obj.name}</b></p>
                <p>${obj.desc}</p>
                <p>Price: ${obj.price} euro</p>
                <p>Stock: ${obj.stock} pcs</p>
                <input id="qtyInput" type="number" value="1" autofocus>
                <button id="addBtn">Add to cart</button>
            </div>    
        `;
    document.querySelector('#mainContainer').innerHTML = html;
}