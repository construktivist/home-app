const express = require('express');
const router = express.Router();

const User = require("../models/User")

router.get("/", function(req, res){
  console.log(req.query);
  //
  // User
  //   .find(req.body)
  //   .exec(function(err, result){
  //     if (err){
  //       console.log(err);
  //     }
  //     else{
  //       console.log(result);
  //       res.send(result);
  //     }
  //   });
});

module.exports = router;
