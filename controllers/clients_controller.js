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

router.get("/profile", (req, res)=>{
  User.findOne({_id: req.query.id}).exec((err, result)=>{
    if (err) throw res.status(500).send(err)
    // console.log(result);
    res.send(result)
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
    // res.redirect("/login")
  })
})
.post('/login', passport.authenticate('local'), (req, res)=>{
  // console.log(req._passport.session)
  res.send({
    session: req.session,
    authenticated: req.isAuthenticated()
  })
})
// .get("/sign-up", (req, res, next)=> {
// // console.log(req.query)
// })
.post('/sign-up', passport.authenticate('local-register', { 
  successRedirect: '/', 
  failureRedirect: '/sign-up'
}))
// console.log(req.body)
// })

// // route for adding new user to the database
// router.post("/sign-up", function(request, results) {
//   console.log(request.body)
//   User.findOne({
//     where: {_id: request.body._id}
//   }).then(function(users) {

//     if (users) {
//       console.log(users);
//       results.send("That user already exists.");
//     } else {

//       User.create({
//         name: request.body.name,
//         username: request.body.username,
//         password: request.body.password,
//         city: request.body.city,
//         state: request.body.state,
//         phoneNumber: request.body.phoneNumber
//       })
//       .then(function(user) {

//         results.send(user);

//       })
//     }
//   })
// });

router.put("/create-service", function(request, results) {
 console.log(request.body)
 User.findOne({
   where: {_id: request.body._id}
 }).then(function(users) {

   if (users) {
     console.log(users);
     results.send("That user already exists.");
   } else {

     User.update({
       serviceOffered: request.body.checkedItem,
       serviceDescription: request.body.skillsetDetail
     })
     .then(function(user) {

       results.send(user)

     })
   }
 })
})


module.exports = router;
