/*global describe, it, define, expect */
define(function(require) {
    'use strict';
    var AppView = require('views/app-view');
    describe('AppView', function () {
        var view = new AppView();
        it('should exist', function(){
            expect(view).to.be.an('object');
        });
        describe('template', function(){
            it('should link to a file', function(){
                expect(view.template).to.be.a('function');
            });
            it('should return itself when rendered', function(){
                var item = view.render();
                expect(item).to.be.eql(view);
            });
        });
    });
});