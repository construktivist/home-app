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
  email: {
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
    type: Object
  }
  // serviceNeeded: {
  //   type: String,
  //   required: true,
  // },
  // serviceOffered: {
  //   type: [String],
  //   required: true,
  // },
  // serviceDescription: {
  //   type: [String],
  //   required: true,
  // },
  // profileImage: {
  //   type: [String],
  //   required: true,
  // },
  // clientSatisfaction: {
  //   type: String
  // },
  // url: {
  //   type: String,
  //   required: true,
  // },
  // skills: {
  //   type: [String],
  //   required: true,
  // }
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
