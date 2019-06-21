initMap();

function initMap() {

    let position = {
        lat: 44.473675,
        lng: 26.047957
    };

    let map = new google.maps.Map(document.getElementById('map'), { center: position, zoom: 15 });

    let marker = new google.maps.Marker({ position: position, map: map });
}

document.querySelector('#menuBtn').addEventListener('click', function () {
    window.open('../index.html', '_self')

});
