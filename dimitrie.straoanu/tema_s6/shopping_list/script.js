"use strict";

window.addEventListener("DOMContentLoaded", function () {

    var inputField = document.getElementById("inputField");
    var addItemBtn = document.getElementById("addItemBtn");
    var sortBtn = document.getElementById("sortBtn");
    var deleteBtn = document.getElementById("deleteBtn");
    sortBtn.style.display = "none";
    deleteBtn.style.display = "none";

    inputField.addEventListener("keyup", addItem);
    addItemBtn.addEventListener("click", addItem);
    sortBtn.addEventListener("click", sortTableData);
    deleteBtn.addEventListener("click", deleteMarked);

    var itemList = [{itemName:"milk",buyed:false},{itemName:"flour",buyed:false},{itemName:"bread",buyed:false}];
    

    function addItem() {

        if (inputField.value) {

            if (event.key == "Enter" || event.type == "click") {

                var newItem = {
                    itemName: inputField.value.trim(),
                    buyed: false
                };

                itemList.push(newItem);
                inputField.value = "";
                drawTable();
            }

        }
    }

    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    tbody.innerHTML = "<span>Shopping list is empty!</span>";
    table.classList.add("dataTable");
    document.querySelector(".container").appendChild(table);
    table.addEventListener("click", markAsBuyed);
    drawTable();


    function drawTable() {

        if (itemList.length > 0) {

            sortBtn.style.display = "initial";
            deleteBtn.style.display = "initial";

            tbody.innerHTML = `<tr><th colspan=2>Item description</th><th>Action</td></tr>`;

            for (var i = 0; i < itemList.length; i++) {

                if (itemList[i].buyed == true) {
                    var buyed = "buyed";
                    var buttonText = "Clear mark";
                } else {
                    buyed = "";
                    var buttonText = "Mark as buyed";
                }

                tbody.innerHTML += `<tr><td>${i + 1}</td><td class="${buyed}">${itemList[i].itemName}</td><td><button id="${i}">${buttonText}</button></td></tr>`;
            }
        } else {

            sortBtn.style.display = "none";
            deleteBtn.style.display = "none";
            tbody.innerHTML = "<span>Shopping list is empty!</span>";

        }
    }

    var marked;

    function markAsBuyed(event) {

        if (event.target.tagName == "BUTTON") {

            var index = event.target.id;
            if (itemList[index].buyed == false) {
                itemList[index].buyed = true;
            } else {
                itemList[index].buyed = false;
            }
            drawTable();
            marked = true;
        }
    }

    var direction;

    function sortTableData() {

        function sort(arr, direction) {

            for (var i = 0; i < arr.length; i++) {
                for (var j = i + 1; j < arr.length; j++) {

                    if (direction == "ascending") {

                        if (arr[i].itemName.toLowerCase() > arr[j].itemName.toLowerCase()) {
                            var temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }

                    } else if (direction == "descending") {

                        if (arr[i].itemName.toLowerCase() < arr[j].itemName.toLowerCase()) {
                            var temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }
                    }
                }
            }

        }

        if (direction == "ascending") {
            direction = "descending"
        } else { direction = "ascending" }

        sort(itemList, direction);
        drawTable();
    }

    function deleteMarked() {

        if (marked == true) {

            for (var i = 0; i < itemList.length; i++) {
                if (itemList[i].buyed == true) {
                    itemList.splice(i, 1);
                    i--;
                    
                }
            }

            drawTable();
            marked = false;
        }
    }

});
