// Require mongoose
const mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;

// Create client schema
var ClientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  city: {
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
  phone: {
    type: String
  },
  serviceNeeded: {
    type: String,
    required: true,
  }
});

// Create the Client model with the ClientSchema
var Client = mongoose.model("Client", ClientSchema);

// Export the model
module.exports = Client;
