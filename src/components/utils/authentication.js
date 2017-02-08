import axios from "axios";

module.exports = {

	login(credentials, cb) {
		// console.log(credentials);
		// cb = arguments[arguments.length - 1]
		// console.log(cb)
		if (localStorage.token) {
			if (cb) cb(true)
			this.onChange(true)
			return
		}		
		axios.post("/user/login", credentials).then((result)=>{
			console.log(result)
			if(result.data.authenticated) {
				localStorage.token = result.data.session.passport.user
			// console.log(localStorage.token)				
				if (cb) cb(true)
				this.onChange(true)
			}
			//  else {
			// 	if (cb) cb(false)
			// 	this.onChange(false)				
			// }
		}).catch((err)=>{
			console.log(err.statusCode() ===401)
			cb(false)
			this.onChange(false)
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
		axios.get("/user/logout").then((result)=>{
			console.log(result)
		})
    	this.onChange(false)
	},

	loggedIn() {
		return !!this.getToken()
	},

 	onChange() {}	
}