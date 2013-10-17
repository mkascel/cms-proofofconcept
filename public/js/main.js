require.config({
    paths : {
        underscore : 'lib/lodash',
        backbone   : 'lib/backbone-1.0.0',
        marionette : 'lib/backbone.marionette-1.1.0',
        jquery     : 'lib/jquery-2.0.3.min',
        tpl        : 'lib/tpl',
        tabletop   : 'lib/tabletop'
    },
    shim : {
        'lib/backbone-localStorage' : ['backbone'],
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery','underscore']
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['jquery', 'underscore', 'backbone', 'tabletop']
        },
        tabletop: {
            exports: 'Tabletop'
        }
    }
});

require(['app'],function(app){
    "use strict";

    app.start();

});
