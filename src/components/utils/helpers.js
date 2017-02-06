import axios from "axios";

const helpers = {

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
	},

	signUp: (credentials)=>{
		// console.log(credentials);
		return axios.post("/user/sign-up", credentials)
	},

	login: (credentials)=>{
		// console.log(credentials);
		return axios.post("/user/login", credentials)
	},

	logout: ()=>{
		// console.log(credentials);
		return axios.post("/user/logout")
	},

	loggedIn: (credentials)=>{
		// console.log(credentials);
		return axios.post("/user/login", credentials)
	},


}

module.exports = helpers;