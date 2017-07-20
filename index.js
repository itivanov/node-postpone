'use strict'

var self = module.exports = {
    /**
     * Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC
     */
    now: function() {
        return new Date().getTime();
    },

    /**
     * Postpone execution of a one-time non-blocking action after delay
     */
    wait: function(delay, cb) {
        return setTimeout(cb, delay);
    },

    /**
     * Execute a non-blocking action and postpone execution of a one-time non-blocking action after delay
     */
    runWait: function(delay, fn, cb) {
        self.wait(0, fn);
        return self.wait(delay, cb);
    },

    /**
     * Execute a non-blocking action and then postpone execution of a one-time non-blocking action after delay
     */
    runAndWait: function(delay, fn, cb) {
        self.wait(0, function() {
            fn();
            self.wait(delay, cb);
        });
    },

    /**
     * Repeat a non-blocking action
     */
    repeat: function(delay, cb) {
        return setInterval(cb, delay);
    },

    /**
     * Run and repeat a non-blocking action
     */
    doRepeat: function(delay, cb) {
        self.wait(0, function() {
            cb();
            setInterval(cb, delay);
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
