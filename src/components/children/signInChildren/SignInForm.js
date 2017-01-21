import React from 'react';


var SignInForm = React.createClass({

	getInitialState: function() {

		return {
			email: '',
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


		var signInFormStyle = {
			position: "relative",
			left: "25%",
			top: "200px"
		};

		var emailPassStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
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

				<form style={signInFormStyle}>

					<input
						style={emailPassStyle}
						value={this.state.email}
						placeholder="Email"
						onChange={this.handleChange('email')} />
						<br />

					<input
						style={userPassStyle}
						value={this.state.password}
						placeholder="Password"
						onChange={this.handleChange('password')} />
						<br />

					<button className="btn btn-primary" style={buttonStyle}>Sign In</button>

				</form>



			</div>

		)
	}

});

module.exports = SignInForm;
