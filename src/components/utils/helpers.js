import axios from "axios";

var helpers = {

  getFreelancers(servicesOffered, city, state){
    return axios.get("/api/freelancer");
  }

}
