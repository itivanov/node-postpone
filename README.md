# Node.js Postpone
======
Postpone function execution

## Installation
------

```
npm install node-postpone --save
```

## Usage
------

``` js
var postpone = require('node-postpone');
```

### now()

Return current timestamp (milliseconds since 1970/01/01)

``` js
var now = postpone.now();
```

### wait(delay, run)

Postpone execution of a one-time action after delay
- `delay`: time in miliseconds
- `run`: function to execute after `delay`

``` js
postpone.wait(1000, function() {
    console.log('done after 1 sec');
});
```

### runWait(delay, start, run)

Execute a action and postpone execution of a one-time action after delay
- `delay`: time in miliseconds
- `start`: function to execute immediately
- `run`: function to execute after `delay`

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

### runAndWait(delay, start, run)

Execute a action and postpone execution of a one-time action after delay
- `delay`: time in miliseconds
- `start`: function to execute immediately
- `run`: function to execute after `delay` after `start` finish

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

## Tests
------

```
npm test
```

## License
------
MIT
