'use strict'

var postpone = require('../index');

console.log('start');

postpone.doRepeat(1000,
    function(cnt) {
        console.log('do');
    },
    function(cnt) {
        console.log(postpone.now());
    }
);
