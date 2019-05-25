'use strict';

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('currentWeatherBtn').addEventListener('click', findPlace);
    document.getElementById('queryInput').addEventListener('keyup', findPlace);
    document.getElementById('forecastWeatherBtn').addEventListener('click', getForecastWeather);
    initMap();
});

var position;
var formattedAddress;
var currentWeather;
var forecastWeather;
var map;
var marker;

function initMap() {
    var options = {
        center: {
            lat: 25,
            lng: 45
        },
        zoom: 10
    };
    map = new google.maps.Map(document.getElementById('map'), options);
}

function addMarker() {
    if (marker)
        marker.setMap(null);
    var options = {
        position: position,
        map: map
    };
    marker = new google.maps.Marker(options);
}

function findPlace(e) {
    if (e.type === 'click' || e.key === 'Enter') {
        var query = document.getElementById('queryInput').value;
        if (query) {
            var request = {
                query: query,
                fields: ['name', 'geometry', 'formatted_address', 'types']
            };
            var service = new google.maps.places.PlacesService(map);
            service.findPlaceFromQuery(request, function (results, status) {
                if (status === 'OK') {
                    position = results[0].geometry.location;
                    formattedAddress = results[0].formatted_address;
                    addMarker();
                    map.setCenter(position);
                    if (results[0].types.includes('route') || results[0].types.includes('point_of_interest')) {
                        map.setZoom(15);
                    } else if (results[0].types.includes('locality')) {
                        map.setZoom(10);
                    } else if (results[0].types.includes('country')) {
                        map.setZoom(5);
                    } else
                        map.setZoom(10);
                    document.getElementById('map').classList.remove('hidden');
                    getCurrentWeather();
                    console.log('Data from Google Places: ', results);
                } else {
                    document.getElementById('queryInput').value = '';
                    document.getElementById('queryInput').placeholder = 'Location not found.';
                }
            });
        }
    }
}

function getCurrentWeather() {
    var request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        if (this.readyState === 4 && this.status === 200) {
            currentWeather = JSON.parse(this.responseText);
            console.log('Data from OpenWeatherMap: ', currentWeather);
            displayCurrentWeather();
        } else {
            console.log('Error getting current weather');
        }
    });
    request.open('GET', `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&lat=${position.lat()}&lon=${position.lng()}`);
    request.send();
}

function getForecastWeather() {
    if (position) {
        var request = new XMLHttpRequest();
        request.addEventListener('load', function () {
            if (this.readyState === 4 && this.status === 200) {
                forecastWeather = JSON.parse(this.responseText);
                console.log('Data from OpenWeatherMap: ', forecastWeather);
                displayForecastWeather();
            } else {
                console.log('Error getting forecast weather');
            }
        });
        request.open('GET', `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&lat=${position.lat()}&lon=${position.lng()}`);
        request.send();
    }
}

function displayForecastWeather() {
    var forecastWeatherDetails = document.getElementById('forecastWeatherDetails');
    forecastWeatherDetails.innerHTML = '';
    var time = forecastWeather.list[0].dt_txt;
    var day = time.match(/\d*[-]\d*[-]\d*/)[0];
    var hour = time.match(/\d*[:]\d*/)[0];
    var myHtml = `
    <div class='col'>
        <h4>${day}</h4>
        <ul>
            <li><img src='https://openweathermap.org/img/w/${forecastWeather.list[0].weather[0].icon}.png'></li>
            <li>Hour: <b>${hour}</b></li>
            <li>Description: <b>${forecastWeather.list[0].weather[0].description}</b></li>
            <li>Temperature: <b>${forecastWeather.list[0].main.temp}</b></li>
        </ul>
    `;
    for (var i = 1; i < forecastWeather.list.length; i++) {
        var previousDay = day;
        time = forecastWeather.list[i].dt_txt;
        day = time.match(/\d*[-]\d*[-]\d*/)[0];
        hour = time.match(/\d*[:]\d*/)[0];
        if (previousDay !== day) {
            myHtml += `
            </div>
                <div class='col'><h4>${day}</h4>
                <ul>
                    <li><img src='https://openweathermap.org/img/w/${forecastWeather.list[i].weather[0].icon}.png'></li>
                    <li>Hour: <b>${hour}</b></li>
                    <li>Description: <b>${forecastWeather.list[i].weather[0].description}</b></li>
                    <li>Temperature: <b>${forecastWeather.list[i].main.temp}</b></li>
                </ul>
            `;
        } else {
            myHtml += `
            <ul>
                <li><img src='https://openweathermap.org/img/w/${forecastWeather.list[i].weather[0].icon}.png'></li>
                <li>Hour: <b>${hour}</b></li>
                <li>Description: <b>${forecastWeather.list[i].weather[0].description}</b></li>
                <li>Temperature: <b>${forecastWeather.list[i].main.temp}</b></li>
            </ul>
            `;
        }
    }
    myHtml += `</div>`;
    forecastWeatherDetails.innerHTML = myHtml;
}

function clearForecastWeather() {
    var forecastWeatherDetails = document.getElementById('forecastWeatherDetails');
    forecastWeatherDetails.innerHTML = '';
}

function displayCurrentWeather() {
    clearForecastWeather();
    var address = document.getElementById('address');
    address.innerText = `Location: ${formattedAddress}`;
    var currentWeatherDetails = document.getElementById('currentWeatherDetails');
    currentWeatherDetails.innerHTML = `
    <img src='https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png'>
    <ul>
    <li>Description: <b>${currentWeather.weather[0].description}</b></li>
    <li>Temperature: <b>${currentWeather.main.temp}</b></li>
    <li>Pressure: <b>${currentWeather.main.pressure}</b></li>
    <li>Humidity: <b>${currentWeather.main.humidity}</b></li>
    <li>Min temp: <b>${currentWeather.main.temp_min}</b></li>
    <li>Max temp: <b>${currentWeather.main.temp_max}</b></li>
    </ul>
    `;
    console.log(formattedAddress);
    console.log(currentWeather.weather[0].description);
    console.log(currentWeather.main.temp);
}