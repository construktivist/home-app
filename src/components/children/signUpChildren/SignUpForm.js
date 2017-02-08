import axios from 'axios';
import React from 'react';
import authentication from '../../utils/authentication'

const SignUpForm = React.createClass({

	getInitialState: function() {

		return {
			name: '',
			username: '',
			password: '',
			city: '',
			state: '',
			phoneNumber: ''
		}

	},

	handleChange: function(propertyName, event) {

		const change = {};
		change[propertyName] = event.target.value;
		this.setState(change);
		// console.log(change);
	},

	handleSubmit: function() {
		// keeps the page from reloading
		event.preventDefault();
		// console.log(this.state)
		authentication.signUp(this.state)
			.then((result)=>{

			})		
		// send the state to be posted
		// axios.post("/user/sign-up", this.state)
		// .then(function(response) {
		// 	console.log(response);
		// }).then(function(){
		// 	//Navigate to new page after form is submitted to database
		// 	window.location = '/#/find-service';
		// });
	},

	render: function(){

		const signUpFormStyle = {
			position: "relative",
			left: "25%",
			top: "100px"
		};

		const regInputStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px",
			opacity: "0.6"
		};

		const shortInputStyle = {
			width: "290px",
			height: "40px",
			margin: "0 20px 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px",
			opacity: "0.6"
		};

		const buttonStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px"
		};

		return(
			<div>
				<form style={signUpFormStyle} onSubmit={this.handleSubmit}>

					<input
						style={regInputStyle}
						value={this.state.name}
						placeholder="Name"
						id="name"
						onChange={this.handleChange.bind(this, 'name')} />
						<br />

					<input
						style={regInputStyle}
						value={this.state.username}
						placeholder="Email Address"
						id="username"
						onChange={this.handleChange.bind(this, 'username')} />
						<br />

					<input
						style={regInputStyle}
						value={this.state.password}
						placeholder="Password"
						id="password"
						onChange={this.handleChange.bind(this, 'password')} />
						<br />

					<input
						style={shortInputStyle}
						value={this.state.city}
						placeholder="City"
						id="city"
						onChange={this.handleChange.bind(this, 'city')} />

					<input
						style={shortInputStyle}
						value={this.state.state}
						placeholder="State"
						id="state"
						onChange={this.handleChange.bind(this, 'state')} />
						<br />

					<input
						style={regInputStyle}
						value={this.state.phoneNumber}
						placeholder="Phone Number"
						id="phoneNumber"
						onChange={this.handleChange.bind(this, 'phoneNumber')} />
						<br />

					<button type="submit" className="btn btn-primary" style={buttonStyle}>Complete Sign Up</button>
				</form>
			</div>
		)
	}
});

module.exports = SignUpForm;
