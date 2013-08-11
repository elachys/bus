/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ArrivalModel = Backbone.Model.extend({
        defaults: {
            name: ''
        }
    });

    return ArrivalModel;
});