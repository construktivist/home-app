import axios from "axios"

module.exports = {

	login(credentials, cb) {
		// checks if the associated function is using a callback structure rather than a promise, if so then pass up value of true or false.
		cb = arguments[arguments.length - 1]
		if (localStorage.token) {
			// if the user closes the page or browser and navigates back to the site this checks if they have a token in local storage thus meaning they are still logged in.
			if (cb) cb(true)
			this.onChange(true)
			return localStorage.token
		}
		// otherwise use axios to check login information
		axios.post("/user/login", credentials).then((result)=>{
			if(result.data.authenticated) {
				// assigns user id to local storage
				localStorage.token = result.data.session.passport.user
				if (cb) cb(true)
				this.onChange(true)
			} else {
				if (cb) cb(false)
				this.onChange(false)				
			}
		})
		.catch((err)=>{
			if (cb) cb(false)
			this.onChange(false)
		})
	},

	signUp(credentials, cb) {
		// checks if the associated function is using a callback structure rather than a promise, if so then pass up value of true or false.
		cb = arguments[arguments.length - 1]		
		if (localStorage.token) {
			// if the user closes the page or browser and navigates back to the site this checks if they have a token in local storage thus meaning they are still logged in.
			if (cb) cb(true)
			this.onChange(true)
			return
		}	
		// otherwise use axios to check login information	
		axios.post("/user/sign-up", credentials).then((result)=>{
			if(result.data.authenticated) {
				// assigns user id to local storage				
				localStorage.token = result.data.session.passport.user
				if (cb) cb(true)
				this.onChange(true)
			} else {
				if (cb) cb(false)
				this.onChange(false)				
			}
		})
		.catch((err)=>{
			if (cb) cb(false)
			this.onChange(false)
		})
	},

	getToken() {
    	return localStorage.token
	},

	logout() {
		// finds and removes the token from local storage as well as make an axios call to a server route that destroys the passport session
		const token = localStorage.getItem('token')
		localStorage.removeItem('token')
		axios.get("/user/logout")
		this.onChange(false)
	},

	loggedIn() {
		return !!localStorage.token
	},

 	onChange() {}	
}
