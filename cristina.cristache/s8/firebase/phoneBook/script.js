document.querySelector('#name').value = '';
document.querySelector('#phone').value = '';

var contacts = [];
var contact;
var editIndex = -1;

document.querySelector("#phone").addEventListener("keypress", function (event) {
    if (event.which < 48 || event.which > 57) {
        event.preventDefault();
    }
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('#addBtn').click();
    }
});

document.querySelector("#backBtn").addEventListener("click", goBack);

function grab(index) {

    document.getElementById("name").value = contacts[index].name;
    document.getElementById("phone").value = contacts[index].phone;
    document.getElementById("addBtn").innerHTML = "Save";
    document.getElementById("backBtn").classList.remove("toggle");
    editIndex = index;


}
function goBack(event) {
    document.getElementById("name").value = '';
    document.getElementById("phone").value = '';
    document.querySelector('#addBtn').innerHTML = "Add Contact";
    document.querySelector('#backBtn').classList.add("toggle");
    editIndex = -1;
}
function draw() {
    document.querySelector("#thead").innerHTML = `<tr class="border_bottom"><th>Name</th><th>Phone</th><th></th><th></th></tr>`;
    for (i in contacts) {
        document.querySelector("#contactList").innerHTML += ` <tr class="border_bottom">
        <td>${contacts[i].name}</td>
        <td>${contacts[i].phone}</td>
        <td><a  onclick = 'grab("${i}")' id = ${i}>Edit</a></td>
        <td><a onclick = "removeContact('${i}')">Delete</a></td>
        </tr>`;
    }
}

function removeContact(index) {
    if (confirm("Sure you want to delete?")) {
        fetch(`https://phonebook-abd02.firebaseio.com/${index}.json`, {
            method: 'delete',
            body: JSON.stringify(contacts[editIndex]),
        });
        document.querySelector("#contactList").innerHTML = '';
        setTimeout(getContacts, 500);
    }
}

function addContact() {
    document.querySelector("#contacts-wrapper").classList.remove("toggle");
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;

    if (editIndex === -1) {
        contact = {
            name: name,
            phone: phone,
        };

        fetch('https://phonebook-abd02.firebaseio.com/.json', {
            method: 'post',
            body: JSON.stringify(contact),
        })
            .then(response => {
                return response.json()
            })
            .then(response => {
                console.log(response);
            });
        document.getElementById("contactList").innerHTML = '';
        setTimeout(getContacts, 10)
        document.querySelector("#name").value = '';
        document.querySelector("#phone").value = '';
    } else {
        contacts[editIndex].name = name;
        contacts[editIndex].phone = phone;
        fetch(`https://phonebook-abd02.firebaseio.com/${editIndex}.json`, {
            method: 'put',
            body: JSON.stringify(contacts[editIndex]),
        });

        document.getElementById("contactList").innerHTML = '';
        setTimeout(getContacts, 700);
        document.querySelector("#name").value = '';
        document.querySelector("#phone").value = '';
        document.querySelector("#addBtn").innerHTML = "Add Contact";
    }
}

function getContacts() {
    fetch('https://phonebook-abd02.firebaseio.com/.json').then(response => {
        return response.json();
    })
        .then(response => {
            contacts = response;
        })
        .then(() => {
            if (contacts != null) {
                document.querySelector("#none").innerHTML = '';
                document.querySelector("#contacts-wrapper").classList.remove("toggle");
                draw();
            } else {
                document.querySelector("#contacts-wrapper").classList.add("toggle");
                document.querySelector("#none").innerHTML = 'No one in your contact list yet :(';
            }
        });
}
