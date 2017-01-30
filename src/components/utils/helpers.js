import axios from "axios";

const helpers = {

	getFreelancers: function(service){
		return axios.get("/user", {
			serviceOffered: service
		});
	},

	getProfile: function(id){
		return axios.get("/user/profile/" + id)
	}

}

module.exports = helpers;
