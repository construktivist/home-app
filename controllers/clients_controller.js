// for routing purposes
const express = require("express");

// Requiring our Clients and Freelancers models


const Client = require("../models/User");
//const Freelancer = require("../models/Freelancer");

const mongoose = require("mongoose");
//const express = require('express');
// requires our models and mongoose ORM
const User  = require("../models/User.js");

// creates a router
const router  = express.Router();

router.post("/login", function(request, results) {

})
// route for adding new user to the database
router.post("/", function(request, results) {
  console.log(request.body)
  User.findOne({
    where: {_id: request.body._id}
  }).then(function(users) {

    if (users) {
      console.log(users);
      results.send("That user already exists.");
    } else {

      User.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        city: request.body.city,
        state: request.body.state,
        phoneNumber: request.body.phoneNumber
      })
      .then(function(user) {

        results.send(user);

      })
    }
  })
});

router.put("/user", function(request, results) {
  console.log(request.body)
  User.findOne({
    where: {_id: request.body._id}
  }).then(function(users) {

    if (users) {
      console.log(users);
      results.send("That user already exists.");
    } else {

      User.update({
        serviceOffered: request.body.checkedItem
      })
      .then(function(user) {

        results.send(user);

      })
    }
  })
});

module.exports = router;
