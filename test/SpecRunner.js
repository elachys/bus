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
        underscore: 'bower_components/underscore/underscore'
    }
});

require(['jquery', 'backbone', 'jquerymobile'], function($, Backbone, jqmobile){
    require(['spec/models/stop_spec'], function(spec){
      mocha.run();
    });
});
