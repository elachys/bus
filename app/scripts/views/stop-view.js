/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/arrival-view',
    'collections/arrival-collection',
], function ($, _, Backbone, JST, ArrivalView, ArrivalCollection) {
    'use strict';

    var StopView = Backbone.View.extend({
        template: JST['app/scripts/templates/stop.ejs'],
        el: '.ui-content .buses',
        initialize: function(){
            this.options.arrivals = new ArrivalCollection();
            var self = this;
            this.options.arrivals.fetch({data: {stopcode: this.options.stop}, reset: true, success: function(){ $.mobile.loading('hide'); self.render(); }});
        },
        render: function(){
            var list = this.template({arrivals: this.options.arrivals.toJSON()});
            this.$el.empty().append(list).trigger('create');
            return this;
        }
    });

    return StopView;
});