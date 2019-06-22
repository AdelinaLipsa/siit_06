var list = [];
var item;
var sorting = [];

async function getList() {
    var response = await fetch("https://shoppinglist-eea00.firebaseio.com/.json");
    window.list = await response.json();
    draw();
}

function getItem() {
    let item = document.getElementById("input").value;
    let obj = {
        item: item
    }
    // list.push(item);
    window.item = obj;
    
}

function draw() {
    document.querySelector("#theList").innerHTML = '';
    document.querySelector("#thead").innerHTML = "<tr><th>Item description</th><th>Action</th></tr>";
    for (i in list) {
        document.querySelector("#theList").innerHTML += `
                <tr>
                    <td id='item${i}'>${list[i].item}</td>
                    <td><button id = 'boughtButton' onclick='bought("${i}")'  >Mark as bought</button></td>
                    <td><button id = 'deleteButton' onclick='removeItem("${i}")'>Delete</button></td>
                </tr>`;
    }
}

async function addItem() {
    getItem();
    await fetch("https://shoppinglist-eea00.firebaseio.com/.json", {
        method: "POST",
        body: JSON.stringify(window.item)
    }).then(() => {
        getList();
        draw();
    })
}

async function removeItem(index) {
    await fetch(`https://shoppinglist-eea00.firebaseio.com/${index}.json`, {
        method: "DELETE",
        body: undefined
    }).then(() => {
        getList();
        draw();
    })
}


document.querySelector("#input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.querySelector("#addButton").click();

    }
});

function bought(index) {
    let selectedItem = document.getElementById('item' + index);
    if (selectedItem.classList.contains('bought')) {
        selectedItem.classList.remove("bought")
    } else {
        selectedItem.classList.add("bought")
    }
}

function sortAsc() {
    bubbleSortAsc(sorting);
    document.getElementById("theList").innerHTML = '';
    index = 1
    for (let i = 0; i < sorting.length; i++) {
        document.getElementById("theList").innerHTML += "<tr><td id='item" + index + "'>" + sorting[i] + "</td><td><button id = 'boughtButton' onclick='bought(" + index + ")'  >Mark as bought</button></td></tr>";
        index++;
    }
}

function sortDesc() {
    bubbleSortDesc(sorting);
    document.getElementById("theList").innerHTML = '';
    index = 1
    for (let i = 0; i < sorting.length; i++) {
        document.getElementById("theList").innerHTML += "<tr><td id='item" + index + "'>" + sorting[i] + "</td><td><button id = 'boughtButton' onclick='bought(" + index + ")'  >Mark as bought</button></td></tr>";
        index++;
    }
}

function bubbleSortAsc(arr) {
    var aux;

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i][0] > arr[j][0]) {
                aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
    return arr;
}
function bubbleSortDesc(arr) {
    var aux;

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i][0] < arr[j][0]) {
                aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
    return arr;
}


