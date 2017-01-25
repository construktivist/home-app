
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/homedb');




var User = require("./models/User")

var dumUser = {
  name: "John Doe2",
  email: "johndoe@gmail2.com",
  password: "password01",
  city: "Austin",
  state: "Texas",
  phoneNumber: "512-432-5433"
}

var newUser = new User(dumUser);
newUser.save((error, result)=>{
  if(error){
    console.log(error);
  }
  else {
    console.log(result);
  }
})
