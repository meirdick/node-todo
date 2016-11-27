// load dependencies - setup ====================
var express = require('express');
var app = express();  //create app with express
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 8080;
var database = require('./config/db'); // refactorced out and imported


// configure application
    // configure db, where database.url has been refactored into config > db file
mongoose.connect(database.url);
    // configure rest of application
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// create mongoose model (can be db.js model file when re-factored)
// now re factored into models folder > todo.js

// load routes after been refactored out
require('./app/routes')(app);

// define routes for API (can be db.js model file when re-factored)

// All these routes are now in their own folders, see App > routes.js
    // we load the routes into here through require above, using app variable

// start server and listen on port
app.listen(8080);
console.log(`App listening on port: ` + port);