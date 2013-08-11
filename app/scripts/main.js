/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        jquerymobile: {
            deps: [
                'jquery'
            ]
        },
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        jquerymobile: '../bower_components/jquery-mobile-bower/js/jquery.mobile-1.3.2',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore'
    }
});

require(['jquery', 'backbone', 'jquerymobile', 'routes/app-router'], function($, Backbone, jqmobile, AppRouter){
    // Prevents all anchor click handling
    $.mobile.linkBindingEnabled = false;
    // Disabling this will prevent jQuery Mobile from handling hash changes
    $.mobile.hashListeningEnabled = false;

    Backbone.router = new AppRouter();
});
