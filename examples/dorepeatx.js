'use strict'

var postpone = require('../index');

console.log('start');

postpone.doRepeatX(5, 1000,
    function() {
        console.log('do');
    },
    function() {
        console.log(postpone.now());
    }
);
