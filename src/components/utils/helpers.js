import axios from "axios";

module.exports = {

  getFreelancers: (service)=>{
      // console.log(service);
      return axios.get("/search", {
        params: {
            service: service
        }
      });
	},

	getProfile: (id)=>{
		// console.log(id)
		return axios.get("/user/profile", {
			params: {
				id: id
			}
		})
	}
}