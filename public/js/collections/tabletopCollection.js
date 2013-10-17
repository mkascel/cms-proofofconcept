define([
    'backbone',
    'models/tabletopModel',
    'lib/backbone-localStorage'
], function(Backbone, tabletopModel) {
    'use strict';
    
    return Backbone.Collection.extend({

        model: tabletopModel,

        localStorage: new Backbone.LocalStorage('cms'),

    });
});
