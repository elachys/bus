/*global define*/
define([
    'jquery',
    'backbone',
    'views/app-view',
    'views/stop-view',
    'jquerymobile',
], function ($, Backbone, AppView, StopView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        // The Router constructor
        routes: {
            '': 'home',
            'stop?:stop': 'stop'
        },
        initialize: function() {
            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },
        stop: function(stop){
            $.mobile.changePage('#stop', { reverse: false, changeHash: false });
            $.mobile.loading('show');
            new StopView({stop:stop});
        },
        home: function() {
            var Geo = {};
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(position){
                    Geo.lat = position.coords.latitude;
                    Geo.lng = position.coords.longitude;
                    new AppView({geo: Geo});
                    //$.mobile.changePage( '#stops', { reverse: false, changeHash: false } );
                });
            } else {
                new AppView();
            }
            
        },
    });

    return AppRouter;
});