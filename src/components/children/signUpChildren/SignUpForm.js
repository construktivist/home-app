import React from 'react';


var SignUpForm = React.createClass({

	getInitialState: function() {

		return {
			username: '',
			password: ''
		}

	},

	handleChange: function() {

		return function (e) {
			var state = {};
			state[key] = e.target.value;
			this.setState(state);
		}.bind(this);
	
	},

	render: function(){


		var signUpFormStyle = {
			position: "relative",
			left: "25%",
			top: "100px"
		};

		var regInputStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px",
			opacity: "0.6"
		};

		var shortInputStyle = {
			width: "290px",
			height: "40px",
			margin: "0 20px 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px",
			opacity: "0.6"
		};

		var buttonStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px"
		};

		return(

			<div>

				<form style={signUpFormStyle}>

					<input
						style={regInputStyle}
						value={this.state.name}
						placeholder="Name"
						onChange={this.handleChange('name')} />
						<br />

					<input
						style={regInputStyle}
						value={this.state.emailAddress}
						placeholder="Email Address"
						onChange={this.handleChange('emailAddress')} />
						<br />

					<input
						style={regInputStyle}
						value={this.state.password}
						placeholder="Password"
						onChange={this.handleChange('password')} />
						<br />

					<input
						style={regInputStyle}
						value={this.state.password}
						placeholder="Confirm Password"
						onChange={this.handleChange('password')} />
						<br />

					<input
						style={shortInputStyle}
						value={this.state.city}
						placeholder="City"
						onChange={this.handleChange('city')} />
						

					<input
						style={shortInputStyle}
						value={this.state.state}
						placeholder="State"
						onChange={this.handleChange('state')} />
						<br />
						

					<input
						style={regInputStyle}
						value={this.state.phoneNumber}
						placeholder="Phone Number"
						onChange={this.handleChange('phoneNumber')} />
						<br />

					<button className="btn btn-primary" style={buttonStyle}>Complete Sign Up</button>

				</form>

				

			</div>

		)
	}

});

module.exports = SignUpForm;
