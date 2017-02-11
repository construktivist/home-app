const express = require('express');
const router = express.Router();
const User = require("../models/User")

// searches the database for all persons proving  given service
router.get("/", (req, res)=> {
    User.find({
      serviceOffered: { $in: [req.query.service]}
    })
    .exec((err, result)=> {
      if (err){
        console.log(err)
      } else {
        res.send(result)
      }
    })
})

module.exports = router
