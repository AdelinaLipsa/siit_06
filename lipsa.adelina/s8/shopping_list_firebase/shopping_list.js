console.clear();

$('#item').keydown(function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    addButton.click();
  }
});


function addItem(e) {
  var list = document.getElementById("item").value;
  var table = "<tr><td class='listedItem'>" + list + "</td><td><button class='buy'>Mark as bought</button></td>";
  document.getElementById('thead').innerHTML = "<tr><td><b>Item description<b><td><b>Action</b></td></tr>";
  document.getElementById('tbody').innerHTML += table;
}


$(document).on('click', '.buy', function (e) {
  $(e.target).closest('tr').find('.listedItem').toggleClass('bought'); //.addClass('bought);
});



function sortAsc() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
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

function sortDesc() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
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

document.getElementById('addButton').addEventListener('click', addItem);
document.getElementById('sort_asc').addEventListener('click', sortAsc);
document.getElementById('sort_desc').addEventListener('click', sortDesc);



// --------------> firebase  realtime database
var config = {
  apiKey: "AIzaSyBxXULV9ZJ0oF2JFwXoAvPYcCKF5XXl0KY",
  authDomain: "shopping-list-4a820.firebaseapp.com",
  databaseURL: "https://shopping-list-4a820.firebaseio.com",
  projectId: "shopping-list-4a820",
  storageBucket: "shopping-list-4a820.appspot.com",
  messagingSenderId: "378312213961",
  appId: "1:378312213961:web:1c0f37ec363d300b"
};
firebase.initializeApp(config);

var rootRef = firebase.database().ref();

$('#addButton').click(function () {
  rootRef.push().set({

    shoppings: $('#item').val()
  });
});