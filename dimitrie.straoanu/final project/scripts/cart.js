drawCart();

document.querySelector('#backBtn').addEventListener('click', function () {
    location.assign('../index.html');
});


function drawCart() {
    let cart;

    if (localStorage.getItem('cart'))
        cart = JSON.parse(localStorage.getItem('cart'));
    else
        cart = {};

    if (Object.keys(cart).length > 0) {
        let html = '';
        let totalProducts = 0;
        let totalPrice = 0;
        for (let key in cart) {
            let subtotal = cart[key].price * cart[key].qty;
            html += `
                <tr>
                    <td>${cart[key].name}</td>
                    <td>${cart[key].price} euro</td>
                    <td>
                        <button data-id = "${key}">-</button>
                        <input type="text" value="${cart[key].qty}">
                        <button data-id = "${key}">+</button>
                    </td>
                    <td>${subtotal} euro</td>
                    <td><button data-id = "${key}">Remove</button></td>
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
            <button id="orderBtn">Order</Button>
        `;
        document.querySelector('.cartDetails').innerHTML = html;
    }
}