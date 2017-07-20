# Node.js Postpone
Postpone function execution

## Installation

```
npm install node-postpone --save
```

## Usage

``` js
var postpone = require('node-postpone');

// Return current timestamp (milliseconds since 1970/01/01)
var now = postpone.now();

// Postpone execution of a one-time callback after delay milliseconds
postpone.wait(1000, function() {
  console.log('done after 1 sec');
});

// Execute a function asynchronously and postpone execution of a one-time callback after delay milliseconds
postpone.runasync(1000,
    function() {
        console.log('done task 1 : immediately');
    },
    function() {
        console.log('done task 2 : after 1 sec');
    }
);

// Execute a function asynchronously and then postpone execution of a one-time callback after delay milliseconds
postpone.runsync(1000,
    function() {
        console.log('done task 1 : immediately');
    },
    function() {
        console.log('done task 2 : 1 sec after task 1');
    }
);
```

## Unit tests

```
npm test
```

## License
MIT
