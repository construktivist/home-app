const express  = require('express');
const User     = require('..models/User.js');
const mongoose = require('mongoose');
const router   = express.Router();

const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }

      if (!user) {
        return done(null, false, { message: 'Incorrect username.'});
      }

      if (!user.validPassword(password) {
        return done(null, false, { message: 'Incorrect password.'});
      }

      return done(null, user);

    });

  }

));

router.post('/login',
  passport.authentication('local', { successRedirect: '/',
                                     failureRedirect: '/login',
                                     failureFlash: true })
);
