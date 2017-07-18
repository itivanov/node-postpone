'use strict'

var postpone = require('../index');

postpone.runsync(1000,
    function() {
        console.log('1: ' + postpone.now());
    },
    function() {
        console.log('2: ' + postpone.now());
    }
);
