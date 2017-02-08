import axios from "axios"

module.exports = {

	getFreelancers(service) {
		return axios.get("/search", {
	        params: {
	            service: service
	        }
		})
	},

	getProfile(id) {
		return axios.get("/user/profile", {
			params: {
				id: id
			}
		})
	}
}