'use strict'

var expect = require('chai').expect;
var postpone = require('../index');

describe('node-postpone', function() {
    describe('#now()', function() {
        it('should return timestamp', function() {
            var ts = postpone.now();

            expect(ts).to.match(/^[0-9]+$/);
        });
    });

    describe('#rand()', function() {
        it('should return random hash', function() {
            var hash = postpone.rand();

            expect(hash).to.match(/^[a-zA-Z0-9]{40}$/);
        });
    });

    describe('#wait()', function() {
        it('should execute delayed job', function(done) {
            var str = '1';

            postpone.wait(1000, function() {
                str += '2';

                expect(str).to.equal('12');
                done();
            });
        });
    });

    describe('#runWait()', function() {
        it('should execute delayed job after another (async)', function(done) {
            var str = '1';

            postpone.runWait(1000,
                function() {
                    str += '2';
                },
                function() {
                    str += '3';

                    expect(str).to.equal('123');
                    done();
                }
            );
        });
    });

    describe('#runAndWait()', function() {
        it('should execute delayed job after another (sync)', function(done) {
            var str = '1';

            postpone.runAndWait(1000,
                function() {
                    str += '2';
                },
                function() {
                    str += '3';

                    expect(str).to.equal('123');
                    done();
                }
            );
        });
    });

    describe('#repeatX()', function() {
        it('should repeat task 3 times with 1 sec interval', function(done) {
            this.timeout(10000);

            var str = '0';

            postpone.repeatX(3, 1000,
                function(cnt) {
                    str += cnt;
                },
                function() {
                    expect(str).to.equal('0123');
                    done();
                }
            );
        });
    });

});
