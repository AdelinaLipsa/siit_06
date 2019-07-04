function myFunction() {
    myVar = setTimeout(preLoader, 3000);
  }
  
var preloader = document.querySelector(".loader");
function preLoader(){
preloader.style.display = "none";
} 

let getUrl = new URL(document.URL);
let firebaseId = getUrl.searchParams.get('id');

productData()
    .then(response => {
        if (response.status === 200)
            return response.json();
        else
            console.log(response.status);
    })
    .then(function (data) {
        product = data;
        drawDetails();
    })
    .catch(err => console.log(err));

function productData() {
    return fetch(`https://proiect-final-f676e.firebaseio.com/phones/${firebaseId}.json`, {
        method: 'GET'
    });
}


function drawDetails() {
    var html = `
    <div class="card" style="width: 50rem;">
    <img src="${product.image}" class="card-img-top">
    <p id="error"></p>
    <div class="card-body">
    <h2 class="card-title">${product.name.toUpperCase()}</h2>
    <p class="card-text"><b>Description:</b>&nbsp${product.configuration}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item"><p><b>Price:</b>&nbsp${product.price}</p>
    </li>
    <li class="list-group-item"><p><b>Stock:</b>&nbsp${product.stock} items</p></li>
    </ul>
    <div class="card-body">
    <button id="decrement">-</button>
    <input id="quantity" type="text" placeholder="qty" value="0">
    <button id="increment">+</button>
    <a href="#" class="card-link"><button class="bag-btn" data-id="${product.id}" onclick="addToCart();"><i class="fas fa-shopping-cart">&nbspAdd to cart</i></button></a>
    </div>
    </div>
    `;
    document.querySelector("#content").innerHTML = html;

    document.querySelector("#decrement").addEventListener("click", () => {
        if (parseInt(document.getElementById('quantity').value, 10) > 0) {
            document.getElementById('quantity').value -= 1;
        }
    });

    document.querySelector("#increment").addEventListener("click", () => {
        var value = parseInt(document.getElementById('quantity').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('quantity').value = value;
    });

}

// function addToCart() {
//     document.querySelector(".bag-btn").addEventListener("click", () => {
//         var quantity = parseInt(document.querySelector("#quantity").value);
//         fetch(`https://proiect-final-f676e.firebaseio.com/phones/${firebaseId}.json`)
//             .then(response => {
//                 console.log(response);
//                 if (!response.ok) throw Error(response.statusText);
//                 return response.json();
//             })
//             .then(response => {
//                 console.log(response);
//                 var data = response;
//                 if (quantity > response.stock) {
//                     document.querySelector("#error").innerHTML = "Product out of stock!";
//                 } else {
//                     console.log(response);
//                     var method = "POST";
//                     var id = "";
//                     var obj = {
//                         name: data.name,
//                         image: data.image,
//                         price: data.price,
//                         itemQty: quantity
//                     }
//                     fetch("https://proiect-final-f676e.firebaseio.com/cart.json")
//                         .then(response => {
//                             return response.json();
//                         })
//                         .then(response => {
//                             for (key in response) {
//                                 if (response[key].name === data.name) {
//                                     method = "PUT";
//                                     id = key;
//                                     obj = {
//                                         name: data.name,
//                                         image: data.image,
//                                         price: data.price,
//                                         stock: data.stock-(response[key].itemQty + quantity),
//                                         itemQty: response[key].itemQty + quantity
//                                     }
//                                 }
//                             }
//                         })
//                         .then(() => {
//                             fetch(`https://proiect-final-f676e.firebaseio.com/cart/${id}.json`, {
//                                     method: method,
//                                     body: JSON.stringify(obj)
//                                 })
//                                 .then((response) => {
//                                     if (!response.ok) throw Error(response.statusText)
//                                 })
//                                 .catch(err => {
//                                     console.error()
//                                 })
//                         })
//                 }
//             })
//     });
// }