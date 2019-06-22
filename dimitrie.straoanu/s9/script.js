document.getElementById('submit').addEventListener('click', submit);

var oldRates;
var rates;
var ratesArr = [];
var promises;

cursValutarOld()
    .then(function (response) {
        oldRates = response.rates;
        // console.log(response);
        // console.log(oldRates);
        return cursValutar();
    })
    .then(function (response) {
        rates = response.rates;
        // console.log(response);
        // console.log(rates);
        draw(response);
    })
    .catch(function (err) {
        console.log(err)
    });


function submit() {
    var firstDate = document.getElementById('firstDate').value;
    var secondDate = document.getElementById('secondDate').value;
    if (firstDate && secondDate) {
        ratesArr = [];
        Promise.all([cursValutarCustom(firstDate), cursValutarCustom(secondDate)])
            .then(function (response) {               
                drawCustom(response);
            })
            .catch(function(err){
                console.log(err)
            });
    }
}

function cursValutarCustom(date) {
    return new Promise(function (resolve, reject) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status == 200) {
                    /*var response = JSON.parse(this.responseText);
                    var rates = response.rates;
                    console.log(date, rates);
                    ratesArr.push(rates);
                    if (ratesArr.length === 2) {
                        drawCustom(ratesArr);
                    }*/
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject(this);
                }
            }
        };
        xhttp.open("GET", `http://data.fixer.io/api/${date}?access_key=bab6dc180ed5d2d17a7bd00df96ba187`, true);
        xhttp.send();
    });
}

function cursValutar() {
    return new Promise(function (resolve, reject) {


        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status == 200) {
                    /*var response = JSON.parse(this.responseText);
                    rates = response.rates;
                    console.log(response);
                    console.log(rates);
                    draw(response);*/
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject(this);
                }
            }
        };
        xhttp.open("GET", "http://data.fixer.io/api/latest?access_key=bab6dc180ed5d2d17a7bd00df96ba187", true);
        xhttp.send();
    });
}

function cursValutarOld() {
    var oldDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    var year = oldDate.getFullYear();
    var month = oldDate.getMonth() + 1;
    if (month < 10)
        month = '0' + month;
    var day = oldDate.getDate();
    if (day < 10)
        day = '0' + day;
    var requestDate = `${year}-${month}-${day}`;

    var xhttp = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status == 200) {
                    /*var response = JSON.parse(this.responseText);
                    oldRates = response.rates;
                    console.log(response);
                    console.log(oldRates);
                    cursValutar();*/
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject(this);
                }
            }
        };
        xhttp.open("GET", `http://data.fixer.io/api/${requestDate}?access_key=bab6dc180ed5d2d17a7bd00df96ba187`, true);
        xhttp.send();
    });
}

function draw(obj) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month < 10)
        month = '0' + month;
    var day = date.getDate();
    if (day < 10)
        day = '0' + day;
    var displayDate = `${day}-${month}-${year}`;


    var lista = document.getElementById('lista');
    lista.innerHTML = '';
    var html = `
      <h1>Curs valutar din data: ${displayDate}</h1>
      <ul>`;
    for (var i in rates) {
        if (rates[i] > oldRates[i])
            html += `<li><b>${i}</b>: ${rates[i]} - ${oldRates[i]} <b>up</b></li>`;
        else if (rates[i] < oldRates[i])
            html += `<li><b>${i}</b>: ${rates[i]} - ${oldRates[i]} <b>down</b></li>`;
        else
            html += `<li><b>${i}</b>: ${rates[i]} - ${oldRates[i]} <b>same</b></li>`;
    }
    html += '</ul>';
    lista.innerHTML = html;
}

function drawCustom(arr) {
    console.log(arr);
    var rates = arr[0].rates;
    var oldRates = arr[1].rates;
    var lista = document.getElementById('lista');
    lista.innerHTML = '';
    var html = `
      <h1>Comparatie cursuri</h1>
      <ul>`;
    for (var i in rates) {
        if (rates[i] > oldRates[i])
            html += `<li><b>${i}</b>: ${rates[i]} - ${oldRates[i]} <b>up</b></li>`;
        else if (rates[i] < oldRates[i])
            html += `<li><b>${i}</b>: ${rates[i]} - ${oldRates[i]} <b>down</b></li>`;
        else
            html += `<li><b>${i}</b>: ${rates[i]} - ${oldRates[i]} <b>same</b></li>`;
    }
    html += '</ul>';
    lista.innerHTML = html;
}