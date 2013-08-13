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
        events: {
            'submit #search-form': 'search'
        },
        search: function(e){
            e.preventDefault();
            window.location = '/#stop?' + $('#search').val();
        },
        fetchStopsByGeo: function(geo, callback){
            var stops = new StopCollection({geo:geo});
            stops.fetch({data: geo, reset: true, success: function(){
                callback(stops);
            }});
        },
        showStops: function(data){
            var view = new StopListView({ collection:  data});
            this.$el.find('.stoplist').empty().append(view.render().el);
        },
        initialize: function(){
            $.mobile.loading('show');
            var self = this;
            this.fetchStopsByGeo(
                this.options.geo,
                function(data){
                    $.mobile.loading('hide');
                    self.showStops(data);
                }
            );
        },
        render: function(){
            return this;
        }
    });
    return AppView;
});