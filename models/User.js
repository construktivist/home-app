// Require mongoose
const mongoose = require("mongoose")

// Create Schema class
const Schema = mongoose.Schema;

// Create client schema
const UserSchema = new Schema({
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
})

// Create the Client model with the ClientSchema
const User = mongoose.model("User", UserSchema)

// Export the model
module.exports = User
