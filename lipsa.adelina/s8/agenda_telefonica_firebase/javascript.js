 var clienti = [];
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

  async function getClients(){
    var responseText = await ajaxPromise("https://testing-project-75edf.firebaseio.com/.json", "GET");
    window.clienti = JSON.parse(responseText);
    showDataInTable();
    console.log(clienti);

  }

 //drawing the table
 function showDataInTable() {
var str= "";
for( var i in clienti){
  str += `
  <tr>
  <td class="nume">${clienti[i].nume}</td>
  <td class="prenume">${clienti[i].prenume}</td>
  <td class="telefon">${clienti[i].telefon}</td>
  <td>
  <div class="editBtn" onclick="edit('${i}')"><button>Editeaza</button></div>
  </td>
  <td>
  <div class="deleteBtn" onclick="del('${i}')"><button>Sterge</button></div>
  </td>
  </tr>
  `;
} 
document.querySelector("table tbody").innerHTML = str;
}


async function addClient(event,form) {
  event.preventDefault();
  var obj = {
    nume: form.querySelector("[name=\"nume\"]").value,
    prenume: form.querySelector("[name=\"prenume\"]").value,
    telefon: form.querySelector("[name=\"telefon\"]").value
  };

  if(indexEdit === -1){
    await ajaxPromise("https://testing-project-75edf.firebaseio.com/.json", "POST", JSON.stringify(obj))
  } else {
    await ajaxPromise(`https://testing-project-75edf.firebaseio.com/${indexEdit}.json`, "PUT", JSON.stringify(obj));
  }
  getClients();
  form.reset();
}
 
function edit(idx) {
  var form = document.querySelector("#myForm");
  form.querySelector("[name=\"nume\"]").value = clienti[idx].nume;
  form.querySelector("[name=\"prenume\"]").value = clienti[idx].prenume;
  form.querySelector("[name=\"telefon\"]").value = clienti[idx].telefon;
  form.querySelector("[name=\"submit\"]").value = "SALVEAZA";
  indexEdit = idx;
}

async function del(idx) {
  if (confirm(`Are you sure you want to delete ${clienti[idx].nume} ?`)) {
    await ajaxPromise(`https://testing-project-75edf.firebaseio.com/${idx}.json`, "DELETE");
    getClients();
  }
}

document.getElementById("telefonInput").addEventListener("keydown", checkInput);
 document.getElementById("telefonInput").addEventListener("input", checkInput);
 function checkInput() {
  if (/[^0-9]/.test(event.key) && event.keyCode !== 8) {
    event.preventDefault();
  }
}

function sort(ascending, columnClassName, tableId)
		{
			var tbody = document.getElementById(tableId).getElementsByTagName("tbody")[0];
			var rows = tbody.getElementsByTagName("tr");
			
			var unsorted = true;
			
			while(unsorted)
			{
				unsorted = false
				
				for (var r = 0; r < rows.length - 1; r++)
				{
					var row = rows[r];
					var nextRow = rows[r+1];
					
					var value = row.getElementsByClassName(columnClassName)[0].innerHTML;
					var nextValue = nextRow.getElementsByClassName(columnClassName)[0].innerHTML;
					
					value = value.replace(',', ''); // in case a comma is used in float number
					nextValue = nextValue.replace(',', '');
					
					if(!isNaN(value))
					{
						value = parseFloat(value);
						nextValue = parseFloat(nextValue);
					}
					
					console.log(value);
					
					if (ascending ? value > nextValue : value < nextValue)
					{
						tbody.insertBefore(nextRow, row);
						unsorted = true;
					}
				}
			}
		};