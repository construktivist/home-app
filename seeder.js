
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/homedb');
const db = mongoose.connection;
const User = require("./models/User") 
const Promise = require("bluebird");
mongoose.Promise = Promise;

// db.once("open", function() {
//   db.dropDatabase();
// });






var dumUser = [
{
  name: "Paintergardener Joe",
  username: "Joey",
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
},
{
  name: "Michael",
  username: "Mke",
  email: "mj@gmail.com",
  password: "password02",
  city: "Austin",
  state: "Texas",
  phoneNumber: "512-432-5434",
  serviceOffered: ["plumber"],
  serviceDescription: "Need your house piped?",
  profileImage: "http://www.sessionlogs.com/media/icons/defaultIcon.png",
  clientSatisfaction: "Great!",
  url: "#/mj"
},
{
  name: "Stacy",
  username: "Stacy",
  email: "stacy@gmail.com",
  password: "password03",
  city: "Austin",
  state: "Texas",
  phoneNumber: "512-432-5435",
  serviceOffered: ["decorator"],
  serviceDescription: "I am an interior decorator!",
  profileImage: "http://www.sessionlogs.com/media/icons/defaultIcon.png",
  clientSatisfaction: "Great!",
  url: "#/stacy"
}
]


User.insertMany(dumUser, (error, result)=>{
  if(error){
    console.log(error);
  }
  else {
    console.log(result);
  }
})
