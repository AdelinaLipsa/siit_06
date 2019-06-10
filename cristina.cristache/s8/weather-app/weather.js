var searchTerm = $("#searchTerm").val();
var units = "metric";
var searchMethod;
var milliday = 86400000;
var today = new Date();
var timestamp = today.getTime();
var coordonates;

document.getElementById("currentWeatherBtn").addEventListener("click", fetchWeatherNow);
document.getElementById("forecastBtn").addEventListener("click", fetchForecast);
$("#searchTerm").keypress(function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        $("#currentWeatherBtn").click();
    }
});
function getSearchMethod() {
    if (searchTerm.length == 5 && (parseInt(searchTerm) + "") === searchTerm) {
        searchMethod = "zip"
    } else searchMethod = "q";
}

function fetchWeatherNow() {
    searchTerm = document.getElementById("searchTerm").value;
    getSearchMethod();
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=${units}&${searchMethod}=${searchTerm}`).then(response => {
        return response.json();
    }).then(response => {
        coordonates = response.coord;
        initWeatherNow(response);
    });
}

function fetchForecast() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=${units}&${searchMethod}=${searchTerm}`).then(response => {
        return response.json();
    }).then(response => {
        //initForecast(response);
        console.log(response);
        document.getElementById("headers").innerHTML = `
            <th id="day0" >${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}</th>
            <th id="day1">${(new Date(timestamp + milliday)).getDate()}-${((new Date(timestamp + milliday)).getMonth()) + 1}-${(new Date(timestamp + milliday)).getFullYear()}</th>
            <th id="day2">${(new Date(timestamp + (milliday * 2))).getDate()}-${(((new Date(timestamp + (milliday * 2))).getMonth()) + 1)}-${(new Date(timestamp + (milliday * 2))).getFullYear()}</th>
            <th id="day3">${(new Date(timestamp + (milliday * 3))).getDate()}-${(((new Date(timestamp + (milliday * 3))).getMonth()) + 1)}-${(new Date(timestamp + (milliday * 3))).getFullYear()}</th>
            <th id="day4">${(new Date(timestamp + (milliday * 4))).getDate()}-${(((new Date(timestamp + (milliday * 4))).getMonth()) + 1)}-${(new Date(timestamp + (milliday * 4))).getFullYear()}</th>
            <th id="day5">${(new Date(timestamp + (milliday * 5))).getDate()}-${(((new Date(timestamp + (milliday * 5))).getMonth()) + 1)}-${(new Date(timestamp + (milliday * 5))).getFullYear()}</th>
    `;
        let time;

        for (i = 0; i < response.list.length; i++) {
            time = new Date(response.list[i].dt * 1000);
            let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
            let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

            if (`${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}` == document.getElementById(`day0`).innerHTML) {
                document.getElementById("dayzero").innerHTML += `
                <ul>
                    <li class="text-centered"><img src="http://openweathermap.org/img/w/${response.list[i].weather[0].icon}.png">
                    <li>Hour: ${hour}:${minutes} </li>
                    <li>Temperature: ${Math.round(response.list[i].main.temp)}</li>
                    <li>Description: ${response.list[i].weather[0].description}</li>
                </ul>
                `;
            }
            if (`${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}` == document.getElementById(`day1`).innerHTML) {
                document.getElementById("dayone").innerHTML += `
                <ul>
                    <li class="text-centered"><img src="http://openweathermap.org/img/w/${response.list[i].weather[0].icon}.png">
                    <li>Hour: ${hour}:${minutes} </li>
                    <li>Temperature: ${Math.round(response.list[i].main.temp)}</li>
                    <li>Description: ${response.list[i].weather[0].description}</li>
                </ul>
                `;
            }
            if (`${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}` == document.getElementById(`day2`).innerHTML) {
                document.getElementById("daytwo").innerHTML += `
                <ul>
                    <li class="text-centered"><img src="http://openweathermap.org/img/w/${response.list[i].weather[0].icon}.png">
                    <li>Hour: ${hour}:${minutes} </li>
                    <li>Temperature: ${Math.round(response.list[i].main.temp)}</li>
                    <li>Description: ${response.list[i].weather[0].description}</li>
                </ul>
                `;
            }
            if (`${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}` == document.getElementById(`day3`).innerHTML) {
                document.getElementById("daythree").innerHTML += `
                <ul>
                    <li class="text-centered"><img src="http://openweathermap.org/img/w/${response.list[i].weather[0].icon}.png">
                    <li>Hour: ${hour}:${minutes} </li>
                    <li>Temperature: ${Math.round(response.list[i].main.temp)}</li>
                    <li>Description: ${response.list[i].weather[0].description}</li>
                </ul>
                `;
            }
            if (`${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}` == document.getElementById(`day4`).innerHTML) {

                document.getElementById("dayfour").innerHTML += `
                <ul>
                    <li class="text-centered"><img src="http://openweathermap.org/img/w/${response.list[i].weather[0].icon}.png">
                    <li>Hour: ${hour}:${minutes} </li>
                    <li>Temperature: ${Math.round(response.list[i].main.temp)}</li>
                    <li>Description: ${response.list[i].weather[0].description}</li>
                </ul>

                `;
            }

            if (`${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}` == document.getElementById(`day5`).innerHTML) {
                document.getElementById("dayfive").innerHTML += `
                <ul>
                    <li class="text-centered"><img src="http://openweathermap.org/img/w/${response.list[i].weather[0].icon}.png">
                    <li>Hour: ${hour}:${minutes} </li>
                    <li>Temperature: ${Math.round(response.list[i].main.temp)}</li>
                    <li>Description: ${response.list[i].weather[0].description}</li>
                </ul>

                `;
            }


        }


    });
    searchTerm = '';
}

function initWeatherNow(response) {
    document.getElementById("headers").innerHTML = '';
    document.getElementById("dayzero").innerHTML = '';
    document.getElementById("dayone").innerHTML = '';
    document.getElementById("daytwo").innerHTML = '';
    document.getElementById("daythree").innerHTML = '';
    document.getElementById("dayfour").innerHTML = '';
    document.getElementById("dayfive").innerHTML = '';
    document.getElementById("map").classList.remove("toggle");
    switch (response.weather[0].main) {
        case 'Clear':
            document.getElementById("header").style.backgroundImage = 'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url("images/clear.jpg")';
            document.getElementById("weatherNow").style.backgroundColor = 'rgba(173, 204, 237, 0.267)';
            document.getElementById("header").style.transition = "800ms";
            document.getElementById("weatherNow").style.transition = "800ms";

            break;
        case 'Rain':
        case 'Drizzle':
            document.getElementById("header").style.backgroundImage = 'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url("images/drizzle.jpg")';
            document.getElementById("weatherNow").style.backgroundColor = 'rgba(128, 128, 128, 0.829)';
            document.getElementById("header").style.transition = "800ms";
            document.getElementById("weatherNow").style.transition = "800ms";
            break;
        case 'Mist':
        case 'Clouds':
        case 'Fog':
        case 'Haze':
            document.getElementById("header").style.backgroundImage = 'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url("images/mist.jpg")';
            document.getElementById("weatherNow").style.backgroundColor = 'rgba(55, 109, 103, 0.39)';
            document.getElementById("header").style.transition = "800ms";
            document.getElementById("weatherNow").style.transition = "800ms";
            break;
        case 'Snow':
            document.getElementById("header").style.backgroundImage = 'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url("images/snow.jpg")';
            document.getElementById("weatherNow").style.backgroundColor = 'rgba(233, 243, 243, 0.801)';
            document.getElementById("header").style.transition = "800ms";
            document.getElementById("weatherNow").style.transition = "800ms";
            break;
        case 'Thunderstorm':
            document.getElementById("header").style.backgroundImage = 'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url("images/thunderstorm.jpg")';
            document.getElementById("weatherNow").style.backgroundColor = 'rgba(128, 128, 128, 0.829)';
            document.getElementById("header").style.transition = "800ms";
            document.getElementById("weatherNow").style.transition = "800ms";
            break;
        default:
            document.getElementById("header").style.backgroundImage = '#00539C';

    }
    console.log(response);
    document.getElementById("location").innerHTML = `Current Weather in: ${response.name}, ${response.sys.country}`
    document.getElementById("img").setAttribute("src", `http://openweathermap.org/img/w/${response.weather[0].icon}.png`);
    document.getElementById("description").innerHTML = `Description: ${response.weather[0].description}`;
    document.getElementById("humidity").innerHTML = `Humidity: ${response.main.humidity}%`;
    document.getElementById("pressure").innerHTML = `Pressure: ${response.main.pressure}`;
    document.getElementById("temp").innerHTML = `Temperature: ${Math.round(response.main.temp)}`;
    document.getElementById("maxTemp").innerHTML = `Max: ${Math.round(response.main.temp_max)}`;
    document.getElementById("minTemp").innerHTML = `Min: ${Math.round(response.main.temp_min)}`;
}
google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 30.2655498,
            lng: -97.7452663
        },
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 30.2655498,
            lng: -97.7452663
        },
        map: map,
        draggable: true
    });


    var searchBox = new google.maps.places.SearchBox(document.getElementById('searchTerm'));

    google.maps.event.addDomListener(searchBox, 'places_changed', function () {
        var places = searchBox.getPlaces();
        var bounds = new google.maps.LatLngBounds();
        var i, place;

        for (i = 0; place = places[i]; i++) {
            bounds.extend(place.geometry.location);
            marker.setPosition(place.geometry.location);
        }
        map.fitBounds(bounds);
        map.setZoom(15);
    });
}