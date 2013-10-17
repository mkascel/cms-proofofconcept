define([
    'vent',
    'views/appView',
    'views/contentView',
    'models/tabletopModel',
    'collections/tabletopCollection',
    'tabletop'
], function (vent, AppView, ContentView, TabletopModel, TabletopCollection) {
    "use strict";

    return Marionette.Controller.extend({

        initializeTabletop: function() {
            var that = this;

            setTimeout(function() {
                if ( !window.Tabletop ) return

                this.tabletop = window.Tabletop;
                
                this.tabletop.init({
                    key: 'https://docs.google.com/spreadsheet/pub?key=0Ah99i86TwfzmdGhVSWZ3eHJ4RmFjdWRMMmVBcXdnREE&output=html',
                    callback: that.showAppView,
                    simpleSheet: true
                });
            }, 20);
        },
        
        showAppView: function(data, tabletop) {
            console.log(data);

            this.appView = new AppView();
            this.appView.render();

            var collection = new TabletopCollection();
            _.each(data, function(d) {
                var vidNum = d.url.match(/\d+/);

                var model = new TabletopModel({
                    description: d.description,
                    filmName: d.film,
                    //filmUrl: d.url
                    filmUrl: '<iframe src="//player.vimeo.com/video/' + vidNum + '" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
                });
            
                collection.add(model);
            });

            this.appView.contentRegion.show(new ContentView({ collection: collection }));
            
        }
    });

});
