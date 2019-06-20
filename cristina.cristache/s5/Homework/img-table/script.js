function changeImg(event, elem) {
    if (elem.src !== 'http://www.drodd.com/images14/x12.jpg') {
        elem.src = 'http://www.drodd.com/images14/x12.jpg';
    } else if (elem.src === 'http://www.drodd.com/images14/x12.jpg') {
        elem.src = 'http://static.wixstatic.com/media/b77fe464cfc445da9003a5383a3e1acf.jpg ';
    }
}