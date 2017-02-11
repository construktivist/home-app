const bcrypt = require('bcrypt-nodejs')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User')

passport.use(new LocalStrategy(authenticate))
passport.use("local-register", new LocalStrategy({passReqToCallback: true}, register))

function authenticate(email, password, done) {
  // console.log(email)
  // console.log(password)
  User.findOne({username: email}).exec((err, user)=>{
    // if (err) throw res.status(500).send(err);

  // console.log(user) 
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return done(null, false)
    }
    done(null, user)
  }, done)
}

function register(req, email, password, done) {
  // console.log(req)
  // console.log(email)
  User.findOne({username: email}).exec((err, user)=>{
    if (user) {
      return done(null, false)
    }
    // if(password !== req.body.password2) {
    //   return done(null, false, { message: "passwords don't match"})
    // }

    User.create({
      name: req.body.name,
      username: email,      
      password: bcrypt.hashSync(password),
      city: req.body.city,
      state: req.body.state,
      phoneNumber: req.body.phoneNumber
    })
    .then((user)=> {
      done(null, user)
    }, done)
  })
}

passport.serializeUser((user, done)=>{
  done(null, user.id)
})

passport.deserializeUser((id, done)=>{
  User.findOne({_id: id}).exec((err, user)=>{
    done(err, user) 
  })
})

module.exports = passport