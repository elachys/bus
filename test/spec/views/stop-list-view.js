/*global describe, it, define, expect */
define(function(require) {
    'use strict';
    var StopListView = require('views/stop-list-view');
    describe('StopListView', function () {
        var view = new StopListView();
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
        describe('rendering', function(){
            it('should render the text');
        });
    });
});