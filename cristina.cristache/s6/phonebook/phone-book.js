var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phone");
var contactList = document.getElementById("contactList").innerHTML;
var addBtn = document.getElementById("addButton");
var backBtn = document.getElementById("backBtn");
var contacts = [];
var contact;
var edit = false;
var contactIndex = 0;
var editIdentifier;




phoneInput.addEventListener("keypress", function (event) {
    if (event.which < 48 || event.which > 57) {
        event.preventDefault();
    }
    if (event.keyCode == 13) {
        event.preventDefault();
        addBtn.click();
    }
});

backBtn.addEventListener("click", goBack);


function grab(index) {
    edit = true;
    document.getElementById("name").value = contacts[index].name;
    document.getElementById("phone").value = contacts[index].phone;
    editIdentifier = index;
    addBtn.innerHTML = "Save";
    backBtn.classList.remove("toggleBack");

}
function goBack(event) {
    document.getElementById("name").value = '';
    document.getElementById("phone").value = '';
    addBtn.innerHTML = "Add Contact";
    backBtn.classList.add("toggleBack");
    edit = false;
}
function draw() {
    document.getElementById("thead").innerHTML = `<tr class="border_bottom"><th>Name</th><th>Phone</th><th></th><th></th></tr>`;
    if (contacts.length > 0) {
        for (i = 0; i < contacts.length; i++) {
            document.getElementById("contactList").innerHTML += ` <tr class="border_bottom">
        <td>${contacts[i].name}</td>
        <td>${contacts[i].phone}</td>
        <td><a  onclick = 'grab(${i})' id = ${i}>Edit</a></td>
        <td><a onclick = "removeContact(${i})">Delete</a></td>
        </tr>`;
        }
    }
}

function removeContact(index) {
    contacts.splice(index, 1);
    document.getElementById("contactList").innerHTML = '';
    draw();
}

function addContact() {
    document.getElementById("contacts-wrapper").classList.remove("toggle")
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (!edit) {
        contact = {
            name: name,
            phone: phone,
        };

        contacts.push(contact);
        document.getElementById("contactList").innerHTML = '';
        draw();
        document.getElementById("name").value = '';
        document.getElementById("phone").value = '';
        contactIndex++;
    } else {
        contacts[editIdentifier].name = name;
        contacts[editIdentifier].phone = phone;
        document.getElementById("contactList").innerHTML = '';
        draw();
        document.getElementById("name").value = '';
        document.getElementById("phone").value = '';
        addBtn.innerHTML = "Add Contact";

        edit = false;
        //addBtn.innerHTML = "Add Contact";

    }

}



