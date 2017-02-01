import axios from "axios";

module.exports = {

  getFreelancers: function(service){
      console.log(service);
      return axios.get("/search", {
        params: {
            service: service
        }
      });
  }
}
