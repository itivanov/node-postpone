# Node.js Postpone
Postpone function execution

## Installation

```
npm install node-postpone --save
```

## Usage

``` js
var postpone = require('node-postpone');
```

### now()

Return current timestamp (milliseconds since 1970/01/01)

``` js
var now = postpone.now();
```

### wait()

Postpone execution of a one-time action after delay

``` js
postpone.wait(1000, function() {
    console.log('done after 1 sec');
});
```

### now()

Execute a action and postpone execution of a one-time action after delay

``` js
postpone.runWait(1000,
    function() {
        console.log('done task 1 : immediately');
    },
    function() {
        console.log('done task 2 : after 1 sec');
    }
);
```

### now()

Execute a action and postpone execution of a one-time action after delay

``` js
postpone.runAndWait(1000,
    function() {
        console.log('done task 1 : immediately');
    },
    function() {
        console.log('done task 2 : 1 sec after task 1 finish');
    }
);
```

## Unit tests

```
npm test
```

## License
MIT
