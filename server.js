var express = require('express'),
    config = require('./lib/config'),
    utils = require('./lib/utils');

// Global app for routing without injection
app = express();
require('./routes');

app.use(express.static(__dirname + '/public'));
app.use(express.logger());
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
app.use(app.router);
// Error handling
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(500, 'server error');
});

var port = process.env.PORT || config.PORT;
app.listen(port);
