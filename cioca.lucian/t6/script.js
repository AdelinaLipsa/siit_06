function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.className = "liItem"
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("BUTTON");
    span.innerHTML = "Mark as Buyed"
    span.className = "markedBtn";
    li.appendChild(span);

    var close = document.getElementsByClassName("markedBtn");

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;

            if (div.classList.contains("lineThrough")) {
                div.classList.remove("lineThrough");
            }else {
                div.classList.add("lineThrough");
            }
        }
    }
}



function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("myUL");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should
            switch place with the current item: */
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                /* if next item is alphabetically
                lower than current item, mark as a switch
                and break the loop: */
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}

function sortListD() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("myUL");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should
            switch place with the current item: */
            if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                /* if next item is alphabetically
                lower than current item, mark as a switch
                and break the loop: */
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}
