'use strict'

var postpone = require('../index');

console.log('1: ' + postpone.now());

postpone.wait(1000, function() {
  console.log('2: ' + postpone.now());
});
