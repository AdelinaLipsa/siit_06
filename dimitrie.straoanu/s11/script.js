let player = 'x';
let gameState = [];
document.querySelector('table').addEventListener('click', function () {
    
    let img = event.target;
    if (player === 'x') {
        img.src = 'x.png';
        player = '0';
    } else if (player === '0') {
        img.src = '0.png';
        player = 'x';
    }
});