import axios from 'axios'
import React from 'react'
import authentication from '../../utils/authentication'

const SignUpForm = React.createClass({

	getInitialState() {

		return {
			name: '',
			username: '',
			password: '',
			city: '',
			state: '',
			phoneNumber: ''
		}

	},

	handleChange(propertyName, event) {

		const change = {};
		change[propertyName] = event.target.value;
		this.setState(change);
		// console.log(change);
	},

	handleSubmit(event) {
		// keeps the page from reloading
		event.preventDefault();
		// console.log(this.state)
		authentication.signUp(this.state, (loggedIn) => {
			// console.log(loggedIn)
			// console.log(this.state.error)
			if (!loggedIn) {
				return this.setState({
					error: true
				})
			}

			const { location } = this.props

			if (location.state && location.state.nextPathname) {
				this.props.router.replace(location.state.nextPathname)
			} else {
				this.props.router.replace('/find-service')					
			}
		})
	},

	render() {

		const styles = {
 			error: {
			color: '#FF0000',
			marginTop: '15px',
			textAlign: '-webkit-center'
			}
		}

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
						type="text"
						placeholder="Name"
						id="name"
						onChange={this.handleChange.bind(this, 'name')} />
						<br />

					<input
						style={regInputStyle}
						value={this.state.username}
						type="text"
						placeholder="Email Address"
						id="username"
						onChange={this.handleChange.bind(this, 'username')} />
						<br />

					<input
						style={regInputStyle}
						value={this.state.password}
						type="password"
						placeholder="Password"
						id="password"
						onChange={this.handleChange.bind(this, 'password')} />
						<br />

					<input
						style={shortInputStyle}
						value={this.state.city}
						type="text"
						placeholder="City"
						id="city"
						onChange={this.handleChange.bind(this, 'city')} />

					<input
						style={shortInputStyle}
						value={this.state.state}
						type="text"
						placeholder="State"
						id="state"
						onChange={this.handleChange.bind(this, 'state')} />
						<br />

					<input
						style={regInputStyle}
						value={this.state.phoneNumber}
						type="text"
						placeholder="Phone Number"
						id="phoneNumber"
						onChange={this.handleChange.bind(this, 'phoneNumber')} />
						<br />

					<button type="submit" className="btn btn-primary" style={buttonStyle}>Complete Sign Up</button>
				</form>
				{this.state.error && (
					<p style={styles.error}>An account with that email address already exists.</p>
				)}
			</div>
		)
	}
})

module.exports = SignUpForm
