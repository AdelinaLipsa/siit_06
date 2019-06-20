var clientList = [{
  name: "Nume1",
  lastName: "Prenume1",
  phone: ["0758066000"],
  initialOrder: 1
},
{
  name: "Nume3",
  lastName: "Prenume3",
  phone: ["0758000000"],
  initialOrder: 2
},
{
  name: "Nume2",
  lastName: "Prenume2",
  phone: ["0758000000", "0758000000"],
  initialOrder: 3
},
{
  name: "Nume4",
  lastName: "Prenume4",
  phone: ["075803481"],
  initialOrder: 4
},
{
  name: "Nume5",
  lastName: "Prenume5",
  phone: ["07942990220"],
  initialOrder: 5
}
];

//drawing the table
function showDataInTable(arr) {
console.log('showDataInTable');
var tableBody = document.getElementById('tableBody');
var tableData = "";

for (var i = 0; i < arr.length; i++) {
  tableData += `
  <tr>
  <td>${clientList[i].name}</td>
  <td>${clientList[i].lastName}</td>
  <td>${clientList[i].phone}</td>
  <td id="modify">modify</td>
  <td id="delete">delete</td>
  </tr>
  `;
}
tableBody.innerHTML = tableData;
}
showDataInTable(clientList);

//writing the sorting function
function sort(arr, parameter, sortDirection) {
console.log('sort');
for (var i = 0; i < arr.length; i++) {

  for (var j = i + 1; j < arr.length; j++) {

    if (sortDirection === "up") {

      if (arr[i][parameter] > arr[j][parameter]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    } else if (sortDirection === "down") {

      if (arr[i][parameter] < arr[j][parameter]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
showDataInTable(arr);
}
//table click event
document.getElementById("table").addEventListener("click", tableClicked);

var sortDirection;
var index;
var editingTable;

function tableClicked() {
console.log('tableClicked');
//table delete
function delClient(arr, index) {
  arr.splice(index, 1);
}

index = Number(event.target.parentElement.rowIndex - 1);

if (event.target.id == "delete") {

  delClient(clientList, index);
  showDataInTable(clientList);
}
console.log(event);
// table edit
if (event.target.id == "modify") {//use target rather than currentTarget because you want to get the element the user clicked on (the button) but not the one you listen to (the table). 
  document.getElementById("nameInput").value = clientList[index].name;
  document.getElementById("lastNameInput").value = clientList[index].lastName;
  document.getElementById("phoneInput").value = clientList[index].phone;
  document.getElementById("submit").value = "SAVE";
}

//table sorting
if (event.target.tagName == "TH") {

  var headers = document.getElementsByTagName("th");

  for (var i = 0; i < headers.length; i++) {

    headers[i].classList.remove("selected");
  }

  event.target.classList.add("selected");

  if (sortDirection == "up") sortDirection = "down";
  else sortDirection = "up";

  var parameter = event.target.id;
  sort(clientList, parameter, sortDirection);

}
}

// when form is clicked
document.getElementById("myForm").addEventListener("click", formClicked);

function formClicked() {

//add client or edit existing
if (event.target.id == "submit") {

  event.preventDefault();

  var name = document.getElementById("nameInput").value;
  var lastName = document.getElementById("lastNameInput").value;
  var phone = document.getElementById("phoneInput").value;
  phone = phone.split(",");

  if (name && lastName && phone) {

    if (editingTable == true) {

      clientList[index].name = name;
      clientList[index].lastName = lastName;
      clientList[index].phone = phone;
      document.getElementById("submit").value = "ADD CONTACT";
      editingTable = false;

    } else {

      var newClient = {
        name: name,
        lastName: lastName,
        phone: phone
      }
      clientList.push(newClient);
    }

    //redraw the table
    showDataInTable(clientList);

    //reset input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("lastNameInput").value = "";
    document.getElementById("phoneInput").value = "";

  } else {
    alert("INPUT FIELDS ARE INCOMPLETE!");
  }
}
}

//make sure phoneInput gets numbers 
document.getElementById("phoneInput").addEventListener("keydown", checkInput);
document.getElementById("phoneInput").addEventListener("input", checkInput);

function checkInput() {
if (/[^0-9]/.test(event.key) && event.keyCode !== 8) {
  event.preventDefault();
}
}