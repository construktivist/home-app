// Dependencies
const bodyParser = require("body-parser")
const express = require("express")
const logger = require('morgan')
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const passport = require('passport')
require("./passport")
const path = require('path')
const session = require("express-session")

// Mongoose mpromise deprecated - use bluebird for promises
const Promise = require("bluebird")
mongoose.Promise = Promise;

//model controllers
const search_controller = require("./controllers/search_controller")

const clients_controller = require('./controllers/clients_controller')

// Express settings
// ================
// instantiatize express
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// override POST to have DELETE and PUT
app.use(methodOverride('_method'))
	.use(logger("dev"))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.text())
	.use(bodyParser.json({ type: "application/vnd.api+json" }))
	.use(session({
		secret: "blame Canada", 
		resave: false, 
		saveUninitialized: false}))
	.use(passport.initialize())
	.use(passport.session())

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')))

// Routes
// used while utilizining browserHistory
// app.get(`*`, (req, res)=> {
//   res.sendFile('public/index.html', { root: __dirname })
// })

// what to send based on route
app.use('/user', clients_controller)
app.use('/search', search_controller)

// Database configuration with mongoose. Uses local database when not in production
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/homedb")
const db = mongoose.connection

// Show any mongoose errors
db.on("error", (error)=> {
  console.log("Mongoose Error: ", error)
})

// Once logged in to the db through mongoose, log a success message
db.once("open", ()=> {
  console.log("Mongoose connection successful.")
})

// use port 3000 for development, otherwise use any available port during production
const port = process.env.PORT || 3000;

// listen on port 3000 when local
app.listen(port, ()=> {
	console.log("Listening on port %s", port)
})
