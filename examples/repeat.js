'use strict'

var postpone = require('../index');

console.log(postpone.now());

postpone.repeat(1000,
    function(cnt) {
        console.log(postpone.now());
    }
);
