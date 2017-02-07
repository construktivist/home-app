import axios from "axios";

module.exports = {

	login(credentials, cb) {
		// console.log(credentials);
		cb = arguments[arguments.length - 1]
		if (localStorage.token) {
			if (cb) cb(true)
			this.onChange(true)
			return
		}		
		axios.post("/user/login", credentials).then((result)=>{
			console.log(result)
			if(result.data.authenticated) {
				localStorage.token = result.token
				if (cb) cb(true)
				this.onChange(true)
			} else {
				if (cb) cb(false)
				this.onChange(false)				
			}
		}).catch((err)=>{
			console.log(err)
		})
	},

	signUp(credentials) {
		// console.log(credentials);
		return axios.post("/user/sign-up", credentials)
	},

	getToken() {
    	return localStorage.token
	},

	logout() {
		// console.log(credentials);
	    const token = localStorage.getItem('token')
    	localStorage.removeItem('token')
		axios.post("/user/logout")
    	this.onChange(false)
	},

	loggedIn() {
		return !!localStorage.token
	},

 	onChange() {}	
}