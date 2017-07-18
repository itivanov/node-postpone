'use strict'

var postpone = require('../index');

console.log('0: ' + postpone.now());

postpone.wait(1000, function() {
  console.log('2: ' + postpone.now());
});
