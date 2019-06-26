let database;

getData('https://my-online-store-2bdc4.firebaseio.com/my_products/.json')
    .then(function (response) {
        if (response.status === 200)
            return response.json();
        else
            console.log(response.statusText);
    })
    .then(function (data) {
        database = data;
        draw(database);
        addListeners();
    })
    .catch(function (err) {
        console.log(err)
    });

document.querySelector('#cartBtn').addEventListener('click', function () {
    location.assign('./pages/cart.html');
});

document.querySelector('#adminBtn').addEventListener('click', function () {
    location.assign('./pages/admin.html');
});

function getData(url, method, body) {
    return fetch(url, { method, body });
}

function draw(obj) {
    document.querySelector('#mainContainer').innerHTML = '';
    let html = '';
    for (let key in obj) {
        html += `
            <div class="content">
                <div class="pic">
                    <img src="${obj[key].pic}">
                </div>
                <p><b>${obj[key].name}</b></p>
                <span>${obj[key].price} lei</span>
                <button class="detailsBtn" data-id="${key}">Details</button>
            </div>    
        `;
    }
    document.querySelector('#mainContainer').innerHTML = html;
}

function addListeners() {
    let buttons = document.querySelectorAll('.detailsBtn');
    for (let element of buttons) {
        element.addEventListener('click', function () {
            location.assign(`./pages/details.html?id=${element.dataset.id}`);
        });
    }
}

class Product {
    constructor(name, pic, desc, price, qty) {
        this.name = name;
        this.pic = pic;
        this.desc = desc;
        this.price = price;
        this.qty = qty;
    }
}
