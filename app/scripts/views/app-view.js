/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/stop-collection',
    'views/stop-list-view'
], function ($, _, Backbone, JST, StopCollection, StopListView) {
    'use strict';

    var AppView = Backbone.View.extend({
        template: JST['app/scripts/templates/app.ejs'],
        el: '.ui-page-active .ui-content',
        initialize: function(){
            if(!(this.options && this.options.geo)){
                this.options.geo = false;
            }
            this.options.stops = new StopCollection({geo:this.options.geo});
            var self = this;
            this.options.stops.fetch({data: this.options.geo, reset: true, success: function(){ self.render(); }});
        },
        render: function(){
            var view = new StopListView({ collection:  this.options.stops});
            this.$el.find('.stoplist').empty().append(view.render().el);
        }

    });
    return AppView;
});