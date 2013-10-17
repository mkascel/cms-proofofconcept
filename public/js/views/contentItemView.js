define([
    'marionette',
    'tpl!../templates/contentItemView.html'
], function (Marionette, template) {
    'use strict';
    
    return Marionette.ItemView.extend({
        template: template
    });
});
