define([
    'backbone',
    'marionette',
    'vent',
    'routers/router'
], function (Backbone, Marionette, vent, Router) {
    "use strict";

    var app = new Marionette.Application();

    app.addInitializer(function() {
        new Router();
    });

    app.on("initialize:after", function() {
        Backbone.history.start();
    });

    return app;
});
