// /server.js
'use strict';


// Load packages ---------------------------------------------------------------
var express = require('express');
var morgan = require('morgan');
var multer = require('multer');


// Setup node/express app ------------------------------------------------------
var app = express();
var upload = multer();
var routes = require('./app/index.js');
var port = process.env.PORT || 8080;
app.use(morgan('dev')); // log every request to the console


// Load routes -----------------------------------------------------------------
routes(app, upload);


// HTML routes -----------------------------------------------------------------
app.use('/app', express.static(process.cwd() + '/app'));
app.use('/view', express.static(process.cwd() + '/view'));
app.use('/libraries', express.static(process.cwd() + '/libraries'));


// Start server ----------------------------------------------------------------
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});


// EOF -------------------------------------------------------------------------
