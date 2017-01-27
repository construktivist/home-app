import axios from "axios";

module.exports = {

  getFreelancers: function(service){
      return axios.get("/user", {
        serviceOffered: service
      });
  }

}
