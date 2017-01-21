const express = require('express');
const router = express.Router();

const User = require("../models/User")

export default router.get("/search", function(request, results){
  User
    .find({

      //Will need to add conditions here

    })
    .exec(function(err, result){
      if (err){
        console.log(err);
      }
      else{
        console.log(result);
        res.send(result);
      }
    });
});
