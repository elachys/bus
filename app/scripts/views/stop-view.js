/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var StopView = Backbone.View.extend({
        template: JST['app/scripts/templates/stop.ejs']
    });

    return StopView;
});