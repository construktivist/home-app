// Require mongoose
const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// Create Schema class
var Schema = mongoose.Schema;

// Create client schema
var User = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String
  },
  serviceOffered: {
    type: Array,
  },
  serviceDescription: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  clientSatisfaction: {
    type: String
  },
  url: {
    type: String,
  }
});

/*
ClientSchema.methods.generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

ClientSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, password that is in the database);
}
*/

// Create the Client model with the ClientSchema
var User = mongoose.model("User", User);

// Export the model
module.exports = User;
