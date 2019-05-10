var index = 1;
var key = document.getElementById('key');
var input = document.getElementById('item').value;
var sort = [];

// Function to add the item on the cart
function addItem (){
    var item = document.getElementById('item').value;
    var row = "<tr><td id='item" + index +"'>" + item + "</td><td><button onclick='cross(" + index + ")'>Mark as buyed</button></td</tr>";
    document.getElementById('head').innerHTML = "<tr><th>Item description</th><th>Action</th</tr>";
    document.getElementById('body').innerHTML += row;

    index++
    // convert += item.trim("");
    sort.push(item);

}
input.addEventListener("keyup", function (event){
    if(event.keyCode === 13){
        document.key.click();
    }
});

//Crossing the item
function cross(index) {
    let selectedItem = document.getElementById('item'+ index);
    if (selectedItem.classList.contains('bought')){
        selectedItem.classList.remove('bought')
    } else {
        selectedItem.classList.add('bought')
    
    }
}

function sortAscending() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("shoppingTable");
  switching = true;

  while (switching) {

    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function sortDescending() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("shoppingTable");
  switching = true;

  while (switching) {

    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];

      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}