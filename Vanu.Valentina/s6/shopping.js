var index = 1;
var sort = [];
// var key = document.getElementById('key');
var input = document.getElementById('item').value;
                input.addEventListener("keyup", function (event){
                    if(event.keyCode === 13){
                        document.document.getElementById('key').click();
                    }
                });

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
function addItem (){
    var item = document.getElementById('item').value;
    var row = "<tr><td id='item" + index +"'>" + item + "</td><td><button class='buybtn' onclick='cross(" + index + ")'>Mark as buyed</button></td</tr>";
    document.getElementById('head').innerHTML = "<tr><th>Item description</th><th>Action</th</tr>";
    document.getElementById('body').innerHTML += row;

    index++
    // convert += item.trim("");
    sort.push(item);

}

function cross(index) {
    let selectedItem = document.getElementById('item'+ index);
    if (selectedItem.classList.contains('bought')){
        selectedItem.classList.remove('bought')
    } else {
        selectedItem.classList.add('bought')
    
    }
}

function sortAsc() {
    bubbleSortAsc(sort);
    document.getElementById('body').innerHTML = '';
    index = 1;
    for(let i = 0; i < sort.length; i++){
        document.getElementById("body").innerHTML += "<tr><td id='item" + index + "'>" + sort[i] + "</td><td><button class='buybtn' onclick='cross(" + index + ")'  >Mark as buyed </button></td></tr>"
    }
}

function sortDesc() {
    bubbleSortDesc(sort);
    document.getElementById('body').innerHTML = '';
    index = 1;
    for(let i = 0; i < sort.length; i++){
        document.getElementById("body").innerHTML += "<tr><td id='item" + index + "'>" + sort[i] + "</td><td><button class='buybtn' onclick='cross(" + index + ")'  >Mark as buyed </button></td></tr>"
    }
}