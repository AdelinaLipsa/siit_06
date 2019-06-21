let menu;

serverRequest()
    .then(response => {
        if (response.status === 200)
            return response.json();
        else
            console.log(response.status);
    })
    .then(response =>{
        menu = response.menu;
        draw(menu);
    })
    .catch(error => console.log(error));

document.querySelector('table').addEventListener('click', function () {
    if (event.target.classList.contains('editBtn')) {
        window.open(`./edit.html?id=${event.target.dataset.id}`, '_self');
    } else if (event.target.classList.contains('deleteBtn')) {
        let id = event.target.dataset.id;
        window.open(`./delete.html?id=${id}&name=${menu[id].nume}`, '_self');
    }
});

document.querySelector('#addBtn').addEventListener('click', function () {
    window.open('./add.html', '_self');
});

function serverRequest() {
    return fetch('https://test-project-siit.firebaseio.com/.json');
}

function draw(obj) {
    let html = '';
    for (let id in obj) {
        html += `
        <tr>
        <td><img class="foodPic" src="${obj[id].imagine}"></td>
        <td><h3>${obj[id].nume}</h3><p>${obj[id].ingrediente}</p></td>
        <td><button data-id="${id}" class="editBtn">Modifica</button><br><button data-id="${id}" class="deleteBtn">Sterge</button></td>
        </tr>
        `;
    }
    let menu = document.querySelector('table tbody');
    menu.innerHTML = html;
}