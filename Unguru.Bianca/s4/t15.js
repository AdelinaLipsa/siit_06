
var functioncall = 0;
var T15 = function (list, b) {

    functioncall++;
    alert("I have been called" + " " + functioncall + " " + "times")

    var start = 0;
    var end = list.length - 1;
    var mid = Math.floor((start + end) / 2);

    if (b == list[mid]) {
        console.log("it\'s here!")
    }

    else {

        while (b !== list[mid], start < mid) {

            if (b < list[mid]) {

                end = mid - 1;
            }

            else {

                start = mid + 1;
            }

            mid = Math.floor((start + end) / 2);
        }
    }

    console.log(list[mid] !== b ? -1 : " Found it on position" + " " + mid);
}
