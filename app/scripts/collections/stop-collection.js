/*global define*/

define([
    'underscore',
    'backbone',
    'models/stop-model'
], function (_, Backbone, StopModel) {
    'use strict';

    var StopCollection = Backbone.Collection.extend({
        model: StopModel,
        url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=334bada2b12f8878e90b72890f104978&_render=json',
        parse: function(res){
            return _.map(res.value.items[0].stops.slice(0,5), function(entry){
                entry.code = entry.stop_code;
                entry.name = entry.stop_name;
                entry.services = entry.service_list;
                return entry;
            });
        }
    });

    return StopCollection;
});