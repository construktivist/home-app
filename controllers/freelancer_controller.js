var express = require('express');
var router  = express.Router();
// Requiring our Comment and Article models
var Comment = require("../models/Comment.js");
var Article = require("../models/Article.js");
var mongoose = require("mongoose");

// This will get the articles we scraped from the mongoDB
router.get("/", function(req, res) {
  // Grab every doc in the Articles array
  Article.find({})
    .populate("comment")
    .exec(function(error, result) {
      // Log any errors
      if (error) {
        console.log(error);
      } else {
        res.render('articles/index', {
          // result is passed to handlebars to be sent to the page
          result: result
        });   
      }
  });
});


// Create a new comment or replace an existing comment
router.post("/update/:id", function(req, res) {
  // Create a new comment and pass the req.body to the entry
  var newComment = new Comment(req.body);

  // And save the new comment to the db
  newComment.save(function(error, result) {
    // Log any errors
    if (error) {
      console.log(error);
    } else {
      // Use the article id to find and update it's comment
      Article.findOneAndUpdate({ "_id": req.params.id }, {$push: { "comment": result._id } }, {new: true})
      // Execute the above query
      .exec(function(err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        } else {
          res.redirect('/articles'); 
        }
      });
    }
  });
});

router.delete("/delete/:id", function(req, res) {
  // Use the article id to find and delete it's comment
  Comment.findOneAndRemove({ "_id": mongoose.Types.ObjectId(req.params.id) })
  // Execute the above query
  .exec(function(err, doc) {
    // Log any errors
    if (err) {
      console.log(err);
    } else {
      Article.update({ $pull: { comment: { $in: [req.params.id] } } })
        // Execute the above query
      .exec(function(err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        } else {
          res.redirect('/articles'); 
        }
      });
    }
  });
});

module.exports = router;
