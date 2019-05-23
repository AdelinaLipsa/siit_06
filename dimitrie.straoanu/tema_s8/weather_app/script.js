"use strict";

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentWeatherBtn").addEventListener("click", getGeolocation);
    document.getElementById("forecastWeatherBtn").addEventListener("click", getForecastWeather);
});

var geolocation;
var formattedAddress;
var currentWeather;
var forecastWeather;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: geolocation,
        zoom: 10
    });
}

function getGeolocation() {
    var address = document.getElementById("addressInput").value;
    if (address) {
        var request = new XMLHttpRequest();
        request.addEventListener("load", function () {
            if (this.readyState === 4 && this.status === 200) {
                var response = JSON.parse(this.responseText);
                console.log("Data from geolocation api: ",response);
                if (response.status === "OK") {
                    formattedAddress = response.results[0].formatted_address;
                    geolocation = response.results[0].geometry.location;
                    getCurrentWeather();
                } else{
                    document.getElementById("addressInput").value =""; 
                    document.getElementById("addressInput").placeholder ="Location not found.";
                    console.log("Location not found");
                }
            }
            else
                console.log("Error getting geolocation");
        });
        request.open("GET", `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD8-qhO3bBwCbYWjcQ_3IQOh8p1xUEii64`);
        request.send();
    }
}

function getCurrentWeather() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", function () {
        if (this.readyState === 4 && this.status === 200) {
            currentWeather = JSON.parse(this.responseText);
            console.log("Data from weather api: ",currentWeather);
            displayCurrentWeather();
        } else {
            console.log("Error getting current weather");
        }
    });
    request.open("GET", `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&lat=${geolocation.lat}&lon=${geolocation.lng}`);
    request.send();
}

function getForecastWeather() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", function () {
        if (this.readyState === 4 && this.status === 200) {
            forecastWeather = JSON.parse(this.responseText);
            console.log("Data from weather api: ",forecastWeather);
            displayForecastWeather();
        } else {
            console.log("Error getting forecast weather");
        }
    });
    request.open("GET", `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&lat=${geolocation.lat}&lon=${geolocation.lng}`);
    request.send();
}

function displayForecastWeather() {
    var forecastWeatherDetails = document.getElementById("forecastWeatherDetails");
    forecastWeatherDetails.innerHTML = "";
    var firstItemTime = forecastWeather.list[0].dt_txt;
    var firstItemDay = firstItemTime.match(/\d*[-]\d*[-]\d*/)[0];
    var myHtml = `<div class="col"><h4>${firstItemDay}</h4>`;
    for (var i = 1; i < forecastWeather.list.length; i++) {
        var nextItemTime = forecastWeather.list[i].dt_txt;
        var nextItemDay = nextItemTime.match(/\d*[-]\d*[-]\d*/)[0];
        var hour = nextItemTime.match(/\d*[:]\d*/)[0];
        if (firstItemDay !== nextItemDay) {
            myHtml += `
            </div>
            <div class="col"><h4>${nextItemDay}</h4>
            <ul>
            <li><img src="http://openweathermap.org/img/w/${forecastWeather.list[i].weather[0].icon}.png"></li>
            <li>Hour: <b>${hour}</b></li>
            <li>Description: <b>${forecastWeather.list[i].weather[0].description}</b></li>
            <li>Temperature: <b>${forecastWeather.list[i].main.temp}</b></li>
            </ul>
            `;
        }
        else {
            myHtml += `
            <ul>
            <li><img src="http://openweathermap.org/img/w/${forecastWeather.list[i].weather[0].icon}.png"></li>
            <li>Hour: <b>${hour}</b></li>
            <li>Description: <b>${forecastWeather.list[i].weather[0].description}</b></li>
            <li>Temperature: <b>${forecastWeather.list[i].main.temp}</b></li>
            </ul>
            `;
        }
        firstItemTime = nextItemTime;
        firstItemDay = nextItemDay;
    }
    myHtml += `</div>`;
    forecastWeatherDetails.innerHTML = myHtml;
}

function clearForecastWeather(){
    var forecastWeatherDetails = document.getElementById("forecastWeatherDetails");
    forecastWeatherDetails.innerHTML = "";
}

function displayCurrentWeather() {
    clearForecastWeather();
    var address = document.getElementById("address");
    address.innerText = `Location: ${formattedAddress}`;
    var currentWeatherDetails = document.getElementById("currentWeatherDetails");
    currentWeatherDetails.innerHTML = `
    <img src="http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png">
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
    initMap();
    document.getElementById('map').classList.remove("hidden");
}