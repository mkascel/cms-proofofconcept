define([
    'marionette',
    'controllers/controller'
],function(Marionette, Controller) {
  'use strict';

    return Marionette.AppRouter.extend({
        appRoutes:{
            '*path': 'initializeTabletop'
        },

        controller: new Controller()
    });
});
