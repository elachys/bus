/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var StopModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return StopModel;
});