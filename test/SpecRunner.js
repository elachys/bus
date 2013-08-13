/*global mocha */
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
        jquery: 'bower_components/jquery/jquery',
        jquerymobile: 'bower_components/jquery-mobile-bower/js/jquery.mobile-1.3.2',
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/underscore/underscore',
        templates: 'scripts/templates',
        'collections/stop-collection': 'scripts/collections/stop-collection',
        'views/stop-list-view': 'scripts/views/stop-list-view',
        'models/stop-model': 'scripts/models/stop-model',
        'models/arrival-model': 'scripts/models/arrival-model',
        'views/app-view': 'scripts/views/app-view',
        'views/app-list-view': 'scripts/views/app-list-view',
        'views/arrival-view': 'scripts/views/arrival-view',
        'collections/arrival-collection': 'scripts/collections/arrival-collection',
        'views/stop-view': 'scripts/views/stop-view'
    }
});
require(['jquery', 'backbone', 'jquerymobile', 'templates'], function(){
    'use strict';
    require([
        'spec/models/stop-model',
        'spec/views/app-view',
        'spec/views/stop-list-view',
        'spec/views/stop-view'
    ], function(){
        mocha.run();
    });
});
