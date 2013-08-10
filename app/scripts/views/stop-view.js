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
        el: '.ui-page-active .ui-content .buses',
        initialize: function(){
            this.options.arrivals = new ArrivalCollection();
            var self = this;
            this.options.arrivals.fetch({data: {stopcode: this.options.stop}, reset: true, success: function(){ self.render(); }});

        },
        render: function(){
            console.log(this.options.arrivals);
        }
    });

    return StopView;
});