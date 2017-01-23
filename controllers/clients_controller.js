const express = require('express');

// Requiring our Clients and Freelancers models


const Client = require("../models/User");
const Freelancer = require("../models/Freelancer");

const mongoose = require("mongoose");
//const express = require('express');

const router  = express.Router();

router.post("/login", function(request, results) {

})

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
