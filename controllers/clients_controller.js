// for routing purposes
const express = require("express");

// requires our models and mongoose ORM
const User  = require("../models/User.js");
const mongoose = require("mongoose");

// creates a router
const router  = express.Router();

// route for adding new user to the database
router.post("/", function(request, results) {
  console.log(request.body)
  User.findOne({
    where: {email: request.body.email}
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

// Routes will have to be modified. not correct
// router.get("/", function(req, res) {
//   // Grab every doc in the Articles array
//   Client.find({})
//     .exec(function(error, result) {
//       // Log any errors
//       if (error) {
//         console.log(error);
//       } else {

//       }
//   });
// });


// // Create a new comment or replace an existing comment
// router.post("/update/:id", function(req, res) {
//   // Create a new comment and pass the req.body to the entry
//   var newComment = new Comment(req.body);

//   // And save the new comment to the db
//   newComment.save(function(error, result) {
//     // Log any errors
//     if (error) {
//       console.log(error);
//     } else {
//       // Use the article id to find and update it's comment
//       Article.findOneAndUpdate({ "_id": req.params.id }, {$push: { "comment": result._id } }, {new: true})
//       // Execute the above query
//       .exec(function(err, doc) {
//         // Log any errors
//         if (err) {
//           console.log(err);
//         } else {
//           res.redirect('/articles');
//         }
//       });
//     }
//   });
// });

// router.delete("/delete/:id", function(req, res) {
//   // Use the article id to find and delete it's comment
//   Comment.findOneAndRemove({ "_id": mongoose.Types.ObjectId(req.params.id) })
//   // Execute the above query
//   .exec(function(err, doc) {
//     // Log any errors
//     if (err) {
//       console.log(err);
//     } else {
//       Article.update({ $pull: { comment: { $in: [req.params.id] } } })
//         // Execute the above query
//       .exec(function(err, doc) {
//         // Log any errors
//         if (err) {
//           console.log(err);
//         } else {
//           res.redirect('/articles');
//         }
//       });
//     }
//   });
// });

module.exports = router;
