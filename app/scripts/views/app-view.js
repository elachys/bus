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
        autocomplete: function(e, data){
            var $ul = $( this ),
            value = data.input.value;
            $ul.empty();
            console.log(this);
            if(value && value.length>2){

                
                $ul.html("<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>");
                $ul.listview('refresh');
                

                /*
                $.ajax({
                        url: "http://gd.geobytes.com/AutoCompleteCity",
                        dataType: "jsonp",
                        crossDomain: true,
                        data: {
                            q: $input.val()
                        }
                    })
                    .then( function ( response ) {
                        $.each( response, function ( i, val ) {
                            html += "<li>" + val + "</li>";
                        });
                        $ul.html( html );
                        $ul.listview( "refresh" );
                        $ul.trigger( "updatelayout");
                    });
                */
            }
        },
        fetchStopsByGeo: function(geo, callback){
            var stops = new StopCollection({geo:this.options.geo});
            stops.fetch({data: geo, reset: true, success: function(){
                callback(stops);
            }});
        },
        initialize: function(){
            $('#search').on('listviewbeforefilter', this.autocomplete);
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
        }

    });
    return AppView;
});