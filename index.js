'use strict'

const crypto = require('crypto');

var self = module.exports = {
    intervals: [],

    /**
     * Number of milliseconds elapsed since 1 January 1970 00:00:00 UTC
     */
    now: function() {
        return new Date().getTime();
    },

    rand: function() {
        var current_date = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        return crypto.createHash('sha1').update(current_date + random).digest('hex');
    },

    /**
     * Postpone execution of a one-time action after delay
     */
    wait: function(delay, run) {
        if (typeof run !== 'function') {
            return false;
        }

        return setTimeout(run, delay);
    },

    /**
     * Execute a action and postpone execution of a one-time action after delay
     */
    runWait: function(delay, start, run) {
        if (typeof start !== 'function') {
            return false;
        }

        if (typeof run !== 'function') {
            return false;
        }

        self.wait(0, start);
        return self.wait(delay, run);
    },

    /**
     * Execute a action and then postpone execution of a one-time action after delay
     */
    runAndWait: function(delay, start, run) {
        if (typeof start !== 'function') {
            return false;
        }

        if (typeof run !== 'function') {
            return false;
        }

        self.wait(0, function() {
            start();
            self.wait(delay, run);
        });
    },

    /**
     * Repeat an action with @delay miliseconds intervals
     */
    repeat: function(delay, run) {
        if (typeof run !== 'function') {
            return false;
        }

        return setInterval(run, delay);
    },

    /**
     * Repeat an action @count times with @delay miliseconds intervals
     */
    repeatX: function(count, delay, run, finish) {
        if (typeof run !== 'function') {
            return false;
        }

        var x = 0;
        var interval = setInterval(function() {
            run(x + 1);

            if (++x === count) {
                clearInterval(interval);

                if (typeof finish === 'function') {
                    finish();
                }
            }
        }, delay);

        return interval;
    },

    /**
     * Run and repeat an action with @delay miliseconds intervals
     */
    doRepeat: function(delay, run, cb) {
        if (typeof run !== 'function') {
            return false;
        }

        if (typeof cb !== 'function') {
            return false;
        }

       self.wait(0, function() {
            run();
            setInterval(cb, delay);
        });
    },

    /**
     * Run and repeat an action @count times with @delay miliseconds intervals
     */
    doRepeatX: function(count, delay, run, finish) {
        if (typeof run !== 'function') {
            return false;
        }

        if (typeof cb !== 'function') {
            return false;
        }

        self.wait(0, function() {
            run();
            self.repeatX(count, delay, finish);
        });
    },

    /* Backward compatibility */

    runasync: function(delay, fn, cb) {
        return self.runWait(delay, fn, cb);
    },

    runsync: function(delay, fn, cb) {
        self.runAndWait(delay, fn, cb);
    }
};
