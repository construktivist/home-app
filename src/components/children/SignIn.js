import React from 'react';




var SignIn = React.createClass({

	getInitialState: function() {

		return {
			email: '',
			password: ''
		}

	},

	handleChange: function(propertyName, event) {

		var change = {};
		change[propertyName] = event.target.value;
		this.setState(change);

	},

	handleSubmit: function() {
		console.log(this.state)
	},

	render: function(){

		return(

			<div>

				<form onSubmit={this.handleSubmit}>

					<div className="form-group">

						<label htmlFor="emailInput">SIGN THE FUCK IN</label>
						<input
							value={this.state.email}
							placeholder="Email"
							id="email"
							className="form-control"
							onChange={this.handleChange.bind(this, "email")} />

					</div>

					<div className="form-group">

						<label htmlFor="emailInput">USE YOUR FUCKING PASSWORD</label>
						<input
							value={this.state.password}
							placeholder="Password"
							id="password"
							className="form-control"
							onChange={this.handleChange.bind(this, "password")} />

					</div>

					<div>

						<button type="submit" className="btn btn-primary">LOGIN YOU FUCKER</button>

					</div>

				</form>

			</div>

		)
	}

});

module.exports = SignIn;
