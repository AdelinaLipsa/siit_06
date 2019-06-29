$(document).ready(function () {
  // prevent enter from submitting
  $("#city").keypress(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      $("#submitCity").click();
    }
  });

  //----------------->toggle hide/show for the forecast
  $("#submitForecast").click(function () {
    $("#row").toggle();
  });

  $("#submitCity").click(function () {
      $("#showWeather").toggle();
      $("#map-canvas").toggle();
  });

});

//----------------------------->CURRENT WEATHER
$(document).ready(function () {
  $("#submitCity").click(function () {
    return getWeather();
  });
});

function getWeather() {
  var city = $("#city").val();

  if (city != '') {
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=a2e67716b1818e9671ed1b5264fe3151",
      type: "GET",
      dataType: "jsonp",
      success: function (data) {
        var widget = showResults(data);
        $("#showWeather").html(widget);

      }
    });
  } else {
    $("#error").html("<div style='color:red'><strong>City field cannot pe empty!</strong></div>");
  }
}

function showResults(data) {
  return "<h2 style=' font-size:30px; padding-top:20px; text-align:center;'>Current weather for " + data.name + "," + data.sys.country + "</h2>" + "<p><img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'></p>" +
    "<h3 style='padding-left:40px;'>Description:" + data.weather[0].description + "</h3>" +
    "<h3 style='padding-left:40px;'>Temperature:  " + data.main.temp + "°C</h3>" +
    "<h3 style='padding-left:40px;'>Pressure: " + data.main.pressure + "hPa</h3> " +
    "<h3 style='padding-left:40px;'>Humidity: " + data.main.humidity + "%</h3>" +
    "<h3 style='padding-left:40px;'>Max temperature: " + data.main.temp_max + "°C</h3>" +
    "<h3 style='padding-left:40px; padding-bottom:30px;'>Min temperature: " + data.main.temp_min + "°C</h3>";

}
//------------------------------------------------


//------------------------->FORECAST WEATHER
$("#submitForecast").click(function () {
  return getForecast();
});

function getForecast() {
  var city = $('#city').val();

  if (city != '') {
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric' + '&APPID=a2e67716b1818e9671ed1b5264fe3151',
      type: 'GET',
      dataType: 'jsonp',
      success: function (data) {

        var table = '';

        for (var i = 0; i < data.list.length; i++) {
          var time = data.list[i].dt_txt;
          var day = time.match(/\d*[-]\d*[-]\d*/)[0];
          var hour = time.match(/\d*[:]\d*/)[0];
          table += "<tr>";
          table += "<td>" + hour + "</td>";
          table += "<td>" + day + "</td>";
          table += "<td>" + "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" + "</td>";
          table += "<td>" + data.list[i].weather[0].main + "</td>";
          table += "<td>" + data.list[i].weather[0].description + "</td>";
          table += "<td>" + data.list[i].main.temp_min + "&deg;C</td>";
          table += "<td>" + data.list[i].main.temp_max + "&deg;C</td>";
          table += "<td>" + data.list[i].main.pressure + "hPa</td>";
          table += "<td>" + data.list[i].main.humidity + "%</td>";
          table += "<td>" + data.list[i].wind.speed + "km/h</td>";
          table += "</tr>";
        }
        $("#forecastWeather").html(table);
        $('#city').val('');
      }
    });
  } else {
    $("#error").html("<div style='color:red'><strong>No city, no forecast!</strong></div>");
  }
}


//-------------------------------------------->Google map

// -----         Loads the map once the page is loaded   ------- 
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
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


  var searchBox = new google.maps.places.SearchBox(document.getElementById('city'));

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