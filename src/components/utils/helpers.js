import axios from "axios";

module.exports = {

  getFreelancers: function(){
      return axios.get("/search");
  }

}
