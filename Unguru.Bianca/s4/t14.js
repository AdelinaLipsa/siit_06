
var T14 = function (list, a) {

    var start = 0;
    var end = list.length - 1;
    var mid = Math.floor((start + end) / 2);

    if (a == list[mid]) {
        console.log("Found it on" + " " + mid);
    }

    while (a !== list[mid], start < end) {
        if (a < list[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }

        mid = Math.floor((start + end) / 2);
    }

    console.log(list[mid] !== a ? -1 : "Found it!" + " " + mid);
}