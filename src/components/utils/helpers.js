import axios from "axios";

module.exports = {

  getFreelancers: function(service){
      return axios.get("/search", {
        serviceOffered: service
      });
  }
}
