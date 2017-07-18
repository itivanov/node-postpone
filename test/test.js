'use strict'

var expect = require('chai').expect;
var postpone = require('../index');

describe('postpone', function() {
    describe('#now()', function() {
        it('should return timestamp', function() {
            var ts = postpone.now();

            expect(ts).to.match(/^[0-9]+$/);
        });
    });

    describe('#wait()', function() {
        it('should execute delayed job', function(done) {
            var start = postpone.now();
            var str = '1';

            postpone.wait(1000, function() {
                var end = postpone.now();
                var diff = Math.abs(end - start - 1000);
                str += '2';

                expect(str).to.equal('12');
                expect(10 > diff).to.be.true;
                done();
            });
        });
    });

    describe('#runasync()', function() {
        it('should execute delayed job after another (async)', function(done) {
            var start = postpone.now();
            var str = '1';

            postpone.runasync(1000,
                function() {
                    str += '2';
                },
                function() {
                    var end = postpone.now();
                    var diff = Math.abs(end - start - 1000);
                    str += '3';

                    expect(str).to.equal('123');
                    expect(10 > diff).to.be.true;
                    done();
                }
            );
        });
    });

    describe('#runsync()', function() {
        it('should execute delayed job after another (sync)', function(done) {
            var start = postpone.now();
            var str = '1';

            postpone.runsync(1000,
                function() {
                    str += '2';
                },
                function() {
                    var end = postpone.now();
                    var diff = Math.abs(end - start - 1000);
                    str += '3';

                    expect(str).to.equal('123');
                    expect(10 > diff).to.be.true;
                    done();
                }
            );
        });
    });
});
