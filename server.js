// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require('method-override');
var path = require('path');

// Mongoose mpromise deprecated - use bluebird for promises
var Promise = require("bluebird");

mongoose.Promise = Promise;


//model controllers
var articles_controller = require('./controllers/articles_controller');

// instantiatize express
var app = express();

// Express settings
// ================

// what to send based on route
app.use('/contractor', contractor_controller);

// override POST to have DELETE and PUT
app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/homeApp");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

var port = process.env.PORT || 3000;

// listen on port 3000 when local
app.listen(port, function(){
	console.log("Listening on port %s", port);
})

// our module get's exported as app.
module.exports = app;