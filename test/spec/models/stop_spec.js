/*global describe, it, define, expect */
'use strict';

define(function(require) {
    var StopModel = require('scripts/models/stop-model');
    describe('StopModel', function () {

        describe('empty model', function(){
            var emptyBusStop = new StopModel();
            describe('name', function () {
                it('should be a string', function(){
                    expect(emptyBusStop.get('name')).to.be.a('string');
                });
                it('should default to an empty name', function () {
                    expect(emptyBusStop.get('name')).to.contain('');
                });
            });
        });

        /* mock bus stop data */
        var BusStop = new StopModel({
            name: 'Stop one',
            times: [
                {
                    'time': '20:33',
                    'mins': '21',
                    'destination': 'Cramond',
                    'reliability': 'H',
                    'type': 'N'
                },
                {
                    'time': '22:33',
                    'mins': '10',
                    'destination': 'Multi word place',
                    'reliability': 'L',
                    'type': 'N'
                }
            ]
        });
        describe('name', function(){
            it('should be a string', function(){
                expect(BusStop.get('name')).to.be.a('string');
            });
        });
        describe('times', function(){
            it('should be an array', function(){
                expect(BusStop.get('times')).to.be.an('array');
            });
        });
    });
});