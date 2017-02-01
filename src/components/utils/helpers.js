import axios from "axios";

const helpers = {


  getFreelancers: function(service){
      console.log(service);
      return axios.get("/search", {
        params: {
            service: service
        }
      });
	},

	getProfile: function(id){
		console.log(id)
		return axios.get("/user/profile", {
			params: {
				id: id
			}
		})
	}

}

module.exports = helpers;
