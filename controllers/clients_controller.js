// for routing purposes
const express = require("express")
// Requiring our Client model
const User  = require("../models/User")
// relates the model to mongodb
const mongoose = require("mongoose")
// creates a router
const router  = express.Router()
const authentication = require('../src/components/utils/authentication')
const passport = require('passport')
require("../passport")

// const authId = authentication.getToken()

router.get("/profile", (req, res)=>{
  User.findOne({_id: req.query.id}).exec((err, result)=>{
    if (err) throw res.status(500).send(err)
    // console.log(result);
    res.send(result)
  })
})
.put("/create-service", function(request, results) {
 // console.log(request.body)
 // const authId = authentication.getToken()
 // console.log(request.body._id + "POOP")
 // User.findOne({
 //    // where: {_id: _id}
 //   _id: request.body.token
 // }).then(function(users) {

 //   if (users) {
 //     console.log(users);
 //     results.send("That user already exists.");
 //      User.update({
 //       serviceOffered: request.body.checkedItem,
 //       serviceDescription: request.body.skillsetDetail
 //     })
 //     .then(function(user) {

 //       results.send(user)

 //     })
 //   } else {

 //     User.update({
 //       serviceOffered: request.body.checkedItem,
 //       serviceDescription: request.body.skillsetDetail
 //     })
 //     .then(function(user) {

 //       results.send(user)

 //     })
 //   }
 // })
 console.log(request.body)
      // var query = {"_id": request.body.token};
      // var update = {serviceOffered: request.body.checkedItem, serviceDescription: request.body.skillsetDetail};
      // var options = {upsert: true};
      // User.findOneAndUpdate({_id: request.body.token}, {$set:{serviceOffered:request.body.checkedItem}}, options, function(err, person) {
      //   if (err) {
      //     console.log('got an error');
      //   }

      //   // at this point person is null.
      // });
      // User.findOneAndUpdate({_id: request.body.token}, {$set:{serviceDescription:request.body.skillsetDetail}}, options, function(err, person) {
      //   if (err) {
      //     console.log('got an error');
      //   }

      //   // at this point person is null.
      // });


      User.findOneAndUpdate({"_id": request.body.token}, {"$set":{"serviceOffered":request.body.checkedItem, "serviceDescription": request.body.skillsetDetail}}).exec(function(err, service) {
        if (err) {
          console.log('got an error');
        }

        // at this point person is null.
      }).then(function(users) {

         if (users) {
           console.log(users);
           results.send("That user already exists.")
           .then(function(user) {

             results.send(user)

           })
         } 
       })
})

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
