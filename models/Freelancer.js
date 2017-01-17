// Require mongoose
const mongoose = require("mongoose");

// Create Schema class
var Schema = mongoose.Schema;

// Create Freelancer schema
var FreelancerSchema = new Schema({
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
    type: String,
    required: true
  },
  serviceOffered: {
    type: [String],
    required: true,
  },
  clientSatisfaction: {
    type: String
  },
  url: {
    type: String,
    required: true,
  }
});

// Create the Freelancer model with the FreelancerSchema
const Freelancer = mongoose.model("Freelancer", FreelancerSchema);

// Export the model
module.exports = Freelancer;
