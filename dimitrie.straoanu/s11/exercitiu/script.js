function delayedUpperCase(parameter) {
    return new Promise(function (resolve, reject) {
        if (typeof parameter !== 'string') {
            setTimeout(function () {
                reject(parameter)
            }, 1000);
        } else
            setTimeout(function () {
                resolve(parameter.toUpperCase())
            }, 1000);
    });
}

delayedUpperCase('this is a string')
    .then(result => console.log(result))
    .catch(err => console.log(err));