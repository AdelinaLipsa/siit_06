let cart;
initCart();
checkStock();
drawCart();
document.querySelector('table').addEventListener('click', modifyQty);
document.querySelector('#backBtn').addEventListener('click', function () {
    location.assign('../index.html');
});

function initCart() {
    if (localStorage.getItem('cart'))
        cart = JSON.parse(localStorage.getItem('cart'));
    else
        cart = {};
}

function modifyQty() {
    if (event.target.classList.contains('increaseBtn')) {
        let id = event.target.dataset.id;
        cart[id].qty++;
        localStorage.setItem('cart', JSON.stringify(cart));
        drawCart();
    }
    if (event.target.classList.contains('decreaseBtn')) {
        let id = event.target.dataset.id;
        if (cart[id].qty > 1) {
            cart[id].qty--;
            localStorage.setItem('cart', JSON.stringify(cart));
            drawCart();
        }
    }
    if (event.target.classList.contains('removeBtn')) {
        let id = event.target.dataset.id;
        delete cart[id];
        localStorage.setItem('cart', JSON.stringify(cart));
        drawCart();
    }
}

function drawCart() {
    if (Object.keys(cart).length > 0) {
        let html = '';
        let totalProducts = 0;
        let totalPrice = 0;
        for (let key in cart) {
            let subtotal = cart[key].price * cart[key].qty;
            html += `
                <tr>
                    <td><a href="../pages/details.html?id=${key}">${cart[key].name}</a></td>
                    <td>${cart[key].price} euro</td>
                    <td>
                        <button class ="decreaseBtn"  data-id = "${key}">-</button>
                        <input class ="qtyInput" type="text" value="${cart[key].qty}" disabled>
                        <button class ="increaseBtn"  data-id = "${key}">+</button>
                    </td>
                    <td>${subtotal} euro</td>
                    <td><button data-id = "${key}" class ="removeBtn">Remove</button></td>
                </tr>    
            `;
            totalProducts += cart[key].qty;
            totalPrice += subtotal;
        }
        document.querySelector('table tbody').innerHTML = html;
        html = `
            <p>Products in cart: ${totalProducts}</p>
            <p>Taxes: 0 %</p>
            <p>Shipping: 0 euro</p>
            <p><b>Total price: ${totalPrice} euro</b></p>
            <button id="orderBtn">Place order</Button>
        `;
        document.querySelector('.cartDetails').innerHTML = html;
        document.querySelector('#orderBtn').addEventListener('click', placeOrder);
    } else {
        document.querySelector('table').innerHTML = 'Shopping cart is empty!';
        document.querySelector('.cartDetails').innerHTML = '';
    }
}

function placeOrder() {}

function checkStock() {
    if (Object.keys(cart).length > 0) {
        fetch(`https://my-online-store-2bdc4.firebaseio.com/my_products/.json`)
            .then(function (response) {
                return response.json();
            }).then(function (database) {
                for (let key in cart) {
                    if (cart[key].qty > database[key].stock) {
                        console.log(`${cart[key].name} - Not enough stock!`);
                    } else {
                        console.log(`${cart[key].name} - Ok!`);
                    }
                }

            })
    }
}