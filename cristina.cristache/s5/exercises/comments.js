function showComments() {
    let errorMessage = "Fields should not be empty!";

    if (name != null && message != null && title != null) {
        let name = document.getElementById("author").value;
        let message = document.getElementById("message").value;
        let title = document.getElementById("title").value;
        document.getElementById("content").innerHTML += "<p class= 'name' >" + title + "</p><p class='message'>" + name + " : "+ message + "</p>";
    } else if(name === null|| message === null || title === null){
        //document.getElementById("errorMessage").innerHTML = errorMessage;
        alert("errorMessage")
    }


}