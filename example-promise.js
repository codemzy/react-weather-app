// CALLBACK
// classic callback pattern
function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('Derby', function(err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});

// when we call we get both success and error from this one call
// success 78
// error City not found




// PROMISE
// promise pattern
function getTempPromise(location) {
    return new Promise(function (resolve, reject) {
        resolve(79);
        reject('City not found');
    });
}

getTempPromise('Derby').then(function(temp) {
    console.log('promise success', temp);
}, function (err) {
    console.log('promise error', err);
});

// when we call we can only get success or error
// promise success 79




// CHALLENGE

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('Not valid numbers'); 
        }
    });
}

addPromise(4, 5).then(function(total) {
    console.log('total: ', total);
}, function(err) {
    console.log('promise error', err);
});

addPromise('4', 5).then(function(total) {
    console.log('total: ', total);
}, function(err) {
    console.log('promise error', err);
});

// when we call we get
// total:  9
// promise error Not valid numbers