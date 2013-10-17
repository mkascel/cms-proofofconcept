define([
    'marionette',
    'vent',
    'tpl!../templates/appView.html'
], function (Marionette, vent, template) {
    'use strict';
    
    return Marionette.Layout.extend({
        el: $('body'),

        template: template,

        regions: {
            contentRegion: '#content'
        }
    });
});
