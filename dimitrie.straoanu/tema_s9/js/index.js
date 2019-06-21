let menu = {};

serverRequest()
    .then(response => {
        if (response.status === 200)
            return response.json();
        else
            console.log(response.status);
    })
    .then(response => {
        menu = response.menu;
        draw(menu);
    })
    .catch(error => console.log(error));

document.querySelector('#searchBtn').addEventListener('click', function () {
    let foundItems = {};
    let query = document.querySelector('#inputField').value.trim();
    if (query) {
        let helper = document.querySelector('#helper');
        for (let key in menu) {
            let arr = menu[key].ingrediente.split(/[\s,]+/);
            if (arr.includes(query)) {
                foundItems[key] = menu[key];
            }
        }
        if (Object.keys(foundItems).length > 0) {            
            helper.innerHTML = '<button id="backBtn">Inapoi la meniu</button>';
            document.querySelector('#backBtn').addEventListener('click', function () {
                draw(menu);
                helper.innerHTML = '';
                document.querySelector('#inputField').value = '';
            });
            draw(foundItems);
        } else {
            helper.innerHTML = ' Nu exista produse cu acest ingredient! <button id="okBtn">OK</button>';
            document.querySelector('table tbody').innerHTML = '';

            document.querySelector('#okBtn').addEventListener('click', function () {
                helper.innerHTML = '';
                document.querySelector('#inputField').value = '';                
                draw(menu);
            });
        }
    }
});

document.querySelector('table').addEventListener('click', function () {
    if (event.target.classList.contains('detailsBtn')) {
        window.open(`pages/details.html?id=${event.target.id}`, '_self');
    }
});

document.querySelector('#contactBtn').addEventListener('click', function () {
    window.open('pages/contact.html', '_self')

});

function serverRequest() {
    return fetch('https://test-project-siit.firebaseio.com/.json')
}

function draw(obj) {
    let html = '';
    for (let id in obj) {
        html += `
        <tr>
        <td><img class="foodPic" src="${obj[id].imagine}"></td>
        <td><h3>${obj[id].nume}</h3><p>${obj[id].ingrediente}</p></td>
        <td><button id="${id}" class="detailsBtn">Detalii</button></td>
        </tr>
        `;
    }
    document.querySelector('table tbody').innerHTML = html;    
}