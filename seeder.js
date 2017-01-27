
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/homedb');




var User = require("./models/User")


var dumUser = {
  name: "Paintergardener Joe",
  email: "paintergardenerjoe@gmail.com",
  password: "password01",
  city: "Austin",
  state: "Texas",
  phoneNumber: "512-432-5433",
  serviceOffered: ["painting", "gardening"],
  serviceDescription: "I am an awesome painter that wants to painter your pipes!",
  profileImage: "http://www.sessionlogs.com/media/icons/defaultIcon.png",
  clientSatisfaction: "Great!",
  url: "#/paintergardenerjoe"
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
