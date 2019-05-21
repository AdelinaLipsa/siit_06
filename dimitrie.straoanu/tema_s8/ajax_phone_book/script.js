"use strict";

window.addEventListener("DOMContentLoaded", function () {

    var name = document.getElementById("name");
    var mobile = document.getElementById("mobile");
    var addBtn = document.getElementById("addBtn");
    var helper = document.getElementById("helper");
    var cancelBtn = document.getElementById("cancelBtn");
    var phoneBook = document.querySelector(".phoneBook");
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tbody);
    phoneBook.appendChild(table);
    thead.innerHTML = `<tr><th><span id="sortByName">Name</span></th><th><span id="sortByMobile">Mobile</span></th><th><span>Edit data</span></th></tr>`;

    addBtn.addEventListener("click", addContact);
    cancelBtn.addEventListener("click", cancel);
    mobile.addEventListener("keyup", addContact);
    mobile.addEventListener("keydown", checkInput);
    name.addEventListener("keyup", addContact);
    name.addEventListener("keydown", checkInput);
    table.addEventListener("click", editTable);
    table.addEventListener("click", sortPhoneBook);

    cancelBtn.style.display = "none"
    table.style.display = "none"

    var phoneBookData = [{
        name: "John",
        mobile: "0722533633"
    }, {
        name: "Elsa",
        mobile: "0722133233"
    }, {
        name: "Kurt",
        mobile: "0722033833"
    }];
    var editMode;
    var contactIndex;
    var sortDir = "ascending";
    var sortPar = "name";
    sort(phoneBookData, sortDir, sortPar);

    var nameArrow = document.getElementById("sortByName");
    var mobileArrow = document.getElementById("sortByMobile");
    nameArrow.classList.add("arrowUp");


    function checkInput(event) {

        if (event.target.id == "mobile") {
            if (!/[0-9\s]/.test(event.key) && event.keyCode != 8 && event.keyCode != 46) {
                event.preventDefault();
            }
        }
        if (event.target.id == "name") {
            if (!/[a-zA-Z\s]/.test(event.key) && event.keyCode != 8 && event.keyCode != 46) {
                event.preventDefault();
            }
        }
    }

    function addContact(event) {

        if (name.value && mobile.value && (event.key == "Enter" || event.type == "click")) {

            if (editMode == true) {
                phoneBookData[contactIndex].name = name.value;
                phoneBookData[contactIndex].mobile = mobile.value;
                name.value = "";
                mobile.value = "";
                addBtn.innerText = "Add contact";
                editMode = false;
                cancelBtn.style.display = "none"
                sort(phoneBookData, sortDir, sortPar);

            } else {

                var contact = {
                    name: name.value.trim(),
                    mobile: mobile.value.trim()
                }
                phoneBookData.push(contact);
                name.value = "";
                mobile.value = "";
                sort(phoneBookData, sortDir, sortPar);
            }
        } else if (event.key == "Enter" || event.type == "click") {
            name.placeholder = "Input name!";
            mobile.placeholder = "Input mobile!";
        }
    }


    function drawTable(arr) {

        table.style.display = "table";
        tbody.innerHTML = "";

        for (var i = 0; i < arr.length; i++) {

            tbody.innerHTML += `<tr>            
            <td>${arr[i].name}</td>
            <td>${arr[i].mobile}</td>
            <td><button data-index ="${i}" data-type ="modify">Modify</button>
            <button data-index ="${i}" data-type ="delete">Delete</button></td>
            </tr>`;
        }
        if (arr.length == 1) {
            helper.innerText = `You have ${i} contact in phone book.`;
        } else {
            helper.innerText = `You have ${i} contacts in phone book.`;
        }
        name.placeholder = "";
        mobile.placeholder = "";

    }

    function editTable(event) {
        console.log(event.target);

        var type = event.target.dataset.type;

        if (type == "delete") {

            var index = Number(event.target.dataset.index);
            phoneBookData.splice(index, 1);
            if (editMode == true) {
                name.value = "";
                mobile.value = "";
                addBtn.innerText = "Add contact";
                editMode = false;
                cancelBtn.style.display = "none"
            }
            sort(phoneBookData, sortDir, sortPar);

            if (phoneBookData.length == 0) {
                tbody.innerHTML = "";
                helper.innerText = "Phone book is empty!";
                table.style.display = "none"
            }
        }

        if (type == "modify") {
            var index = Number(event.target.dataset.index);
            name.value = phoneBookData[index].name;
            mobile.value = phoneBookData[index].mobile;
            addBtn.innerText = "Save";
            cancelBtn.style.display = "initial"
            editMode = true;
            contactIndex = index;

            var tableRows = table.querySelectorAll("tr");
            for (var i = 0; i < tableRows.length; i++) {
                tableRows[i].classList.remove("editMode");
            }
            var selectedRow = event.target.parentElement.parentElement;
            selectedRow.classList.add("editMode");
        }

    }

    function cancel() {
        name.value = "";
        mobile.value = "";
        addBtn.innerText = "Add contact";
        editMode = false;
        cancelBtn.style.display = "none"

        var tableRows = table.querySelectorAll("tr");
        for (var i = 0; i < tableRows.length; i++) {
            tableRows[i].classList.remove("editMode");
        }
    }

    function sortPhoneBook(event) {

        if (event.target.id == "sortByName") {

            mobileArrow.classList.remove("arrowUp");
            mobileArrow.classList.remove("arrowDown");

            if (sortDir == "ascending") {
                sortDir = "descending";
                nameArrow.classList.remove("arrowUp");
                nameArrow.classList.add("arrowDown");
            } else {
                sortDir = "ascending"
                nameArrow.classList.add("arrowUp");
                nameArrow.classList.remove("arrowDown");
            }
            sortPar = "name";
            sort(phoneBookData, sortDir, sortPar);
        }
        if (event.target.id == "sortByMobile") {

            nameArrow.classList.remove("arrowDown");
            nameArrow.classList.remove("arrowUp");

            if (sortDir == "ascending") {
                sortDir = "descending";
                mobileArrow.classList.remove("arrowUp");
                mobileArrow.classList.add("arrowDown");
            } else {
                sortDir = "ascending"
                mobileArrow.classList.add("arrowUp");
                mobileArrow.classList.remove("arrowDown");
            }
            sortPar = "mobile";
            sort(phoneBookData, sortDir, sortPar);
        }
    }

    function sort(arr, sortDir, sortPar) {

        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {

                if (sortDir == "ascending") {

                    if (arr[i][sortPar].toLowerCase() > arr[j][sortPar].toLowerCase()) {
                        var temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }

                } else if (sortDir == "descending") {

                    if (arr[i][sortPar].toLowerCase() < arr[j][sortPar].toLowerCase()) {
                        var temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
        }
        drawTable(phoneBookData);
        console.log(sortDir, sortPar);
    }
});

var phoneBookDatabase;

function loadDatabase() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        if (this.readyState === 4 && this.status === 200) {
            phoneBookDatabase = JSON.parse(this.responseText);
            console.log(phoneBookDatabase);
        } else
            console.log("Error");
    });
    xhr.open("GET", "https://test-project-5014c.firebaseio.com/phone_book.json")
    xhr.send();
}