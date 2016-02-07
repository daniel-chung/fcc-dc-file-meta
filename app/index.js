// /app/index.js
'use strict';

// Set up ----------------------------------------------------------------------
var path = process.cwd();

// Main index function ---------------------------------------------------------
module.exports = function (app, upload) {

  // HOME PAGE (with login links) ----------------------------------------- //
	app.route('/')
		.get(function(req, res) {
			res.sendFile(path + '/view/index.html');
		});

  app.post('/',  upload.single('file'), function(req, res) {
    var filesize = req.file.size;
    console.log('filesize', filesize);
    res.json(filesize);
  });

	// Error page
	app.route('/error')
		.get(function(req, res) {
			res.send('This is an error page');
		});

};


// EOF -------------------------------------------------------------------------
