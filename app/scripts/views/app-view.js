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
        searchSubmit: function(e){
            e.preventDefault();
            window.location = '/#stop?' + $('#search').val();
        },
        fetchStopsByGeo: function(geo, callback){
            var stops = new StopCollection({geo:this.options.geo});
            stops.fetch({data: geo, reset: true, success: function(){
                callback(stops);
            }});
        },
        initialize: function(){
            $.mobile.loading('show');
            $('#search-form').on('submit', this.searchSubmit);
            if(!(this.options && this.options.geo)){
                this.options.geo = false;
            }
            var self = this;
            this.fetchStopsByGeo(
                this.options.geo,
                function(data){ $.mobile.loading('hide'); self.render(data); }
            );
        },
        render: function(data){
            var view = new StopListView({ collection:  data});
            this.$el.find('.stoplist').empty().append(view.render().el);
            $.mobile.loading('hide');
            return this;
        }

    });
    return AppView;
});