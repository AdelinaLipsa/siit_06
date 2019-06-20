var key = document.getElementById('key');
var input = document.getElementById('author');
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("key").click();
    }
});

function commentList(){
    var title = document.getElementById('title').value;
    var message = document.getElementById('message').value;
    var author = document.getElementById('author').value;
    
    
    document.getElementById('container').innerHTML += "<p class='title'>" + title + "</p>" + "<p class='message'>" + message + " : " + author + "</p>"
}

// function changeCss(){
//     document.getElementById('container').style.cssText = 'align-content: start';
// }

// function changeAll(){
//     commentList();
//     changeCss();
// }
function showDiv(){
    document.getElementById('display').innerHTML = commentList();
}