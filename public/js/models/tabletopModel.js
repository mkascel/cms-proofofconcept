define([
    'backbone',
    'lib/backbone-localStorage',
], function(Backbone, MyCollection) {
    'use strict';

    return Backbone.Model.extend({

        localStorage: new Backbone.LocalStorage('cms'),

        defaults: {
            description: null,
            filmName: null,
            filmUrl: null
        }
    });
});

