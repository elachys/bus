/*global define*/

define([
    'underscore',
    'backbone',
    'models/arrival-model'
], function (_, Backbone, ArrivalModel) {
    'use strict';

    var ArrivalCollection = Backbone.Collection.extend({
        model: ArrivalModel,
        url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=84213487dd2976daa76c23c43764b21d&_render=json&_callback=?'
    });

    return ArrivalCollection;
});