'use strict'

var postpone = require('../index');

console.log('start');

postpone.repeatX(5, 1000,
    function(cnt) {
        console.log(cnt + ': ' + postpone.now());
    },
    function() {
        console.log('done');
    }
);
