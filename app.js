/**
 * Dependencies
 */

var express = require('express'),
    hbs = require('hbs'),
    logger = require('morgan'),
    errorHandler = require('errorhandler'),
    compression = require('compression'),
    favicon = require('serve-favicon'),
    config = require('./config'),
    pkg = require('./package.json');

/**
 * Configuring express app
 */

var app = express(),
    http = require('http').Server(app);

// set hbs templating and view directory
app.set('view engine', 'hbs');
app.set('views', config.root + '/views/');

hbs.localsAsTemplateData(app);

app.locals.title = pkg.title;

if (config.env === 'development' ||
    config.env === 'testing') {

    // serve static favicon
    // app.use(favicon(config.public + '/img/favicon.ico'));

    // server static assets from public directory
    app.use(express.static(config.public));

    // set the logger to 'dev'
    app.use(logger('dev'));
    app.use(errorHandler({
        dumpExceptions: true,
        showStack: true
    }));

} else if (config.env === 'production') {

    // serve static favicon
    app.use(favicon(config.public + '/img/favicon.ico'));

    // server static assets from public directory (with a maxAge of 12 hours)
    app.use(express.static(config.public), { maxAge: 1000 * 60 * 60 * 12 });

    // use plain logger
    app.use(logger());
    app.use(errorHandler());

}

// initialise routes
require('./routes')(app);

http.listen(config.port, function () {

    console.log('Express server listening on port: ', config.port);

});