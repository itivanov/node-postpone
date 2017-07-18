# Node.js Postpone
Postpone function execution

## Installation

```
npm install node-postpone --save
```

## Usage

``` js
var postpone = require('node-postpone');

var now = postpone.now();

postpone.wait(1000, function() {
  console.log('done after 1 sec');
});

postpone.runasync(1000,
    function() {
        console.log('done task 1 : immediately');
    },
    function() {
        console.log('done task 2 : after 1 sec');
    }
);

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
