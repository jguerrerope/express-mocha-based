/**
 * Module dependencies
 */
var express = require('express');
var logger = require('./lib/logger');
var bodyParser = require('body-parser');

/**
 * Locals
 */
var app = module.exports = express();
var core = require('./router');

// parse json requests
//app.use(bodyParser.json('application/json'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', (process.env.PORT || 5000))

/**
 * Routes
 */
app.use('/', core);


/**
 * Start server if we're not someone else's dependency
 */
if (!module.parent) {
	app.listen(app.get('port'), function() {
	    logger.info('Activo http://localhost:%s/', app.get('port'));
	});
}
