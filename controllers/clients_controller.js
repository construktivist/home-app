// for routing purposes
const express = require("express")
// Requiring our Client model
const User  = require("../models/User")
// relates the model to mongodb
const mongoose = require("mongoose")
// creates a router
const router  = express.Router()
const passport = require('passport')
require("../passport")

// returns the information to populate the profile page for a given user.
router.get("/profile", (req, res)=>{
  User.findOne({_id: req.query.id}).exec((err, result)=>{
    if (err) throw res.status(500).send(err)
    res.send(result)
  })
})
.put("/create-service", (request, results)=> {
  User.findOneAndUpdate({"_id": request.body.token},
    {
      "$set":{
        "serviceOffered":request.body.checkedItem, 
        "serviceDescription": request.body.skillsetDetail
      }
    })
    .exec((err, service)=> {
      if (err) throw err
    // at this point person is null.
    })
    .then((users)=> {
      if (users) {
        results.send("That user already exists.")
        // .then(function(user) {
          // results.send(user)
        // })
      }
    })
})

// routes that handle user authentication
router.get('/logout', (req, res)=> {
  req.logout((err)=>{
    if (err) throw err
    res.send({
      session: req.session,
      user: req.user,
      authenticated: req.isAuthenticated()
    })
  })
})
.post('/login', passport.authenticate('local'), (req, res, next)=>{
  res.send({
    session: req.session,
    authenticated: req.isAuthenticated()
  })
})
.post('/sign-up', passport.authenticate('local-register'), (req, res, next)=>{
  res.send({
    session: req.session,
    authenticated: req.isAuthenticated()
  })
})

module.exports = router
