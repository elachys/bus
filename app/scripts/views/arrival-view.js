/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ArrivalView = Backbone.View.extend({
        template: JST['app/scripts/templates/arrival.ejs'],
    });

    return ArrivalView;
});