var addButton = document.getElementById("addButton");
var inputItem = document.getElementById('input');

var list;
var index = 1;
var sorting = [];


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

function addItem() {
    var item = document.getElementById("input").value;
    var table = "<tr><td id='item" + index + "'>" + item + "</td><td><button id = 'boughtButton' onclick='bought(" + index + ")'  >Mark as bought</button></td></tr>";
    document.getElementById("thead").innerHTML = "<tr><th>Item description</th><th>Action</th></tr>";
    document.getElementById("theList").innerHTML += table;

    // count how many times we add to the list so that we can use it as an identifier later
    index++;
    sorting.push(item);
}

inputItem.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
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
    for(let i = 0; i<sorting.length; i++){
       document.getElementById("theList").innerHTML += "<tr><td id='item" + index + "'>" + sorting[i] + "</td><td><button id = 'boughtButton' onclick='bought(" + index + ")'  >Mark as bought</button></td></tr>";
       index++;
    }
   

}

function sortDesc() {
    bubbleSortDesc(sorting);
    document.getElementById("theList").innerHTML = '';
    index = 1
    for(let i = 0; i<sorting.length; i++){
       document.getElementById("theList").innerHTML += "<tr><td id='item" + index + "'>" + sorting[i] + "</td><td><button id = 'boughtButton' onclick='bought(" + index + ")'  >Mark as bought</button></td></tr>";
       index++;
    }
    //alert(sortingAsc)
}