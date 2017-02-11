// import axios from "axios"

const axios = require('axios')

module.exports = {

	login(credentials, cb) {
		cb = arguments[arguments.length - 1]
		if (localStorage.token) {
			console.log(localStorage.token)
			if (cb) cb(true)
			this.onChange(true)
			return localStorage.token
		}		
		axios.post("/user/login", credentials).then((result)=>{
			console.log(result)
			if(result.data.authenticated) {
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
		cb = arguments[arguments.length - 1]		
		if (localStorage.token) {
			if (cb) cb(true)
			this.onChange(true)
			return
		}		
		axios.post("/user/sign-up", credentials).then((result)=>{
			console.log(result)
			if(result.data.authenticated) {
				localStorage.token = result.data.session.passport.user
				if (cb) cb(true)
				this.onChange(true)
			} else {
				if (cb) cb(false)
				this.onChange(false)				
			}
		})
		.catch((err)=>{
			// console.log(err.statusCode() ===401)
			if (cb) cb(false)
			this.onChange(false)
		})
	},

	getToken() {
    	return localStorage.token
	},

	logout() {
		// console.log(credentials);
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
