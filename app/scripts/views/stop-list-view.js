/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var StopListView = Backbone.View.extend({
        el: '.ui-page-active .stoplist',
        template: JST['app/scripts/templates/stop-list.ejs'],

        render: function () {
            var list = this.template({stops: this.options.collection.toJSON()});
            this.$el.html(list).trigger('create');
            return this;
        }
    });

    return StopListView;
});