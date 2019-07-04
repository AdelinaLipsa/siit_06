function myFunction() {
  myVar = setTimeout(preLoader, 3000);
}

var preloader = document.querySelector(".loader");

function preLoader() {
  preloader.style.display = "none";
}

$(document).ready(function(){
$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 2000,
});
});

var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function videoPlay() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

document.querySelector("#mySecondBtn").addEventListener("click", function(){
  window.scrollBy(0, 2000);
});