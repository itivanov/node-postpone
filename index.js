'use strict'

var self = module.exports = {
    /**
     * Return current timestamp (milliseconds since 1970/01/01)
     */
    now: function() {
        return new Date().getTime();
    },

    /**
     * Schedules execution of a one-time callback after delay milliseconds.
     */
    wait: function(msec, cb) {
        return setTimeout(cb, msec);
    },

    /**
     * Execute a function asynchronously and schedules execution of a one-time callback after delay milliseconds.
     */
    runasync: function(msec, fn, cb) {
        self.wait(0, fn);
        return self.wait(msec, cb);
    },

    /**
     * Execute a function asynchronously and then schedules execution of a one-time callback after delay milliseconds.
     */
    runsync: function(msec, fn, cb) {
        self.wait(0, function() {
            fn();

            self.wait(msec, cb);
        });
    },

    /**
     * Repeat
     */
     repeat: function(msec, cb) {

     },

     doAndRepeat:  function(msec, cb) {

     }
};
