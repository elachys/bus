/*global define*/

define([
    'underscore',
    'backbone',
    'models/stops-model'
], function (_, Backbone, StopsModel) {
    'use strict';

    var StopsCollection = Backbone.Collection.extend({
        model: StopsModel
    });

    return StopsCollection;
});