// Require mongoose
import mongoose from "mongoose";

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
    type: String,
    required: true,
  },
  clientSatisfaction: {
    type: String
  }
});

// Create the Freelancer model with the FreelancerSchema
var Freelancer = mongoose.model("Freelancer", FreelancerSchema);

// Export the model
export default Freelancer;
