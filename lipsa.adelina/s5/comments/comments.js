var list= document.getElementById('demo');

function changeText2 () {
    var commentTitle = document.getElementById('title').value;
    var commentBody= document.getElementById('body').value;
    document.getElementById('body').innerHTML = commentBody ;
    var commentAuthor= document.getElementById('author').value;
    document.getElementById('author').innerHTML = commentAuthor;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(commentTitle));
    list.appendChild(entry);
    entry.style.fontWeight = 'bold';
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(commentBody));
    list.appendChild(entry);
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(commentAuthor));
    list.appendChild(entry);
    entry.style.fontWeight = 'bold';
}

