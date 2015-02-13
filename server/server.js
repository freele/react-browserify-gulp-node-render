'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var url = require('url');

var Router = require('react-router');


require('node-jsx').install({
	extension: '.jsx'
});
var React = require('react/addons');
var routes = require('../app/routes.jsx');



var app = express();

//connect to our database
var mongoose = require('mongoose');

var dbName = 'reactApp';

var connectionString = 'mongodb://localhost:27017/' + dbName;

// mongoose.connect(connectionString, function() {

	// view engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');

	// uncomment after placing your favicon in /public
	// app.use(favicon(__dirname + '/public/favicon.ico'));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: false
	}));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, '../build')));

	app.get('*', function(req, res){

		console.log('TEST URL', req.path);
		Router.run(routes, req.url, function(Handler) {
			var content = React.renderToString(React.createElement(Handler, null));
			res.render('index', {
				body: content
			});
		});

		console.log('RETURN RENDERED');
	});


	// catch 404 and forward to error handler
	// app.use(function(req, res, next) {
	// 	var err = new Error('Not Found');
	// 	err.status = 404;
	// 	next(err);
	// });

	// error handlers

	// // development error handler
	// // will print stacktrace
	// if (app.get('env') === 'development') {
	// 	app.use(function(err, req, res, next) {
	// 		res.status(err.status || 500);
	// 		res.render('error', {
	// 			message: err.message,
	// 			error: err
	// 		});
	// 	});
	// }

	// // production error handler
	// // no stacktraces leaked to user
	// app.use(function(err, req, res, next) {
	// 	res.status(err.status || 500);
	// 	res.render('error', {
	// 		message: err.message,
	// 		error: {}
	// 	});
	// });

	app.set('port', process.env.PORT || 8001);

	var server = app.listen(app.get('port'), function() {
		console.log('Express server listening on port ' + server.address().port);
	});
// });


