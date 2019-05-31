imageSrc = {
    X: 'img/x12.jpg',
    blank: 'img/b77fe464cfc445da9003a5383a3e1acf.jpg'
}
var img = document.getElementsByTagName('img');

for (var i = 0; i < img.length; i++) {
    img[i].src = imageSrc.blank;
    switchImg('mouseover', img[i]);
    switchImg('mouseout', img[i]);

}

function switchImg(event, elem) {
    elem.addEventListener(event, function () {
        pathFile = this.src.split('img/', 1); //Split pentru a extrage path-ul imaginii.
        blankImage = pathFile + imageSrc.blank; //Concatenare pentru a avea path + imaginea dorita
        xImage = pathFile + imageSrc.X;
        if (this.src == blankImage) {
            this.src = xImage
        } else {
            this.src = blankImage;
        }
    })
}