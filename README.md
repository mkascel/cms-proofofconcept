##Backbone + Marionette + Require + Node + Express Boilerplate##

Boilerplate template utilizing the following:
- Backbone v1.0.0
- Marionette v1.1.0
- Require/r.js v2.1.8
- jQuery v2.0.3
- LoDash v2.2.1
- Modernizr v2.6.2
- Backbone.LocalStorage

###Setup###

First install node packages (Express):
`npm install`

Then fire it up:
`node server`

And visit: localhost:5000

###Building###

To build a minified slug of your project, run
`node r.js -o app.build.js`

Then to run locally, swap out the commented require.js script tags in the index.html.

Inspired by the [backbone_marionette_require](https://github.com/jsoverson/todomvc/tree/master/labs/dependency-examples/backbone_marionette_require) example in [jsoverson/todomvc](https://github.com/jsoverson/todomvc) 
