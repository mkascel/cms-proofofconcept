define([
    'marionette',
    'vent',
    'tpl!../templates/contentView.html',
    'views/contentItemView'
], function (Marionette, vent, template, ContentItemView) {
    'use strict';
    
    return Marionette.CollectionView.extend({
        template: template,
        itemView: ContentItemView
    });
});
