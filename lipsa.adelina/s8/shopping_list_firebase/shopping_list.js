$('#item').keydown(function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    addButton.click();
  }
});


var lista = [];
var indexEdit = -1;

function ajax(url, method, body, callback, callbackError) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        if (typeof callback === "function") {
          callback(this.responseText);
        }
      } else {
        if (typeof callbackError === "function") {
          callbackError(this.responseText);
        }
      }
    }
  };
  xhttp.open(method, url, true);
  xhttp.send(body);
}

async function ajaxPromise(url, method, body) {
  return new Promise(function (resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          resolve(this.responseText);
        } else {
          reject(this);
        }
      }
    };
    xhttp.open(method, url, true);
    xhttp.send(body);
  });
}

async function getLista() {
  var responseText = await ajaxPromise("https://shopping-list-4a820.firebaseio.com/.json", "GET");
  window.lista = JSON.parse(responseText);
  draw();
}

function draw() {
  var html = "";
  for (var i in lista) {
    html += `
  <tr>
  <td class="listedItem">${lista[i].shoppings}</td>
  <td><button class="buy">Strike</button></td>
  </tr>
  `;
    document.getElementById('thead').innerHTML = "<tr><td>Item description<td>Action</td></tr>";
  }
  document.querySelector("table tbody").innerHTML = html;
}


async function add(event, form) {
  event.preventDefault();
  var obj = {
    shoppings: form.querySelector("[name=\"items\"]").value
  }
  if (indexEdit === -1) {
    await ajaxPromise("https://shopping-list-4a820.firebaseio.com/.json", "POST", JSON.stringify(obj))
  } else {
    await ajaxPromise(`https://shopping-list-4a820.firebaseio.com/${indexEdit}.json`, "PUT",
      JSON.stringify(obj))
  }
  getLista();
  form.reset();
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

document.getElementById('sort_asc').addEventListener('click', sortAsc);
document.getElementById('sort_desc').addEventListener('click', sortDesc);