/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var BackboneModelModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return BackboneModelModel;
});