import axios from 'axios'
import React from 'react'
import authentication from '../../utils/authentication'
import validateInput from '../../utils/validations/signup'
import TextFieldGroup from '../../common/TextFieldGroup'

class SignUpForm extends React.Component {

	constructor() {
		super()
		this.state = {
			name: '',
			username: '',
			password: '',
			passwordConfirmation:'',
			city: '',
			state: '',
			phoneNumber: '',
			errors: {}
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		// const change = {}
		// change[propertyName] = event.target.value
		// this.setState(change)
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	isValid() {
		const { errors, isValid } = validateInput(this.state)

		if(!isValid) {
			this.setState({
				errors
			})
		}
		return isValid
	}

	handleSubmit(event) {
		// keeps the page from reloading
		event.preventDefault()

		if (this.isValid()) {

			this.setState({
				errors: {}
			})

			authentication.signUp(this.state, (loggedIn) => {

				if (!loggedIn) {
					return this.setState({
						errors: { 
							username: "A user with that email already exists."
						}
					})
				}

				const { location } = this.props

				if (location.state && location.state.nextPathname) {
					this.props.router.replace(location.state.nextPathname)
				} else {
					this.props.router.replace('/find-service')					
				}
			})
		}
	}

	render() {

		// const styles = {
 	// 		error: {
		// 	color: '#FF0000',
		// 	marginTop: '15px',
		// 	textAlign: '-webkit-center'
		// 	}
		// }

		// const signUpFormStyle = {
		// 	position: "relative",
		// 	left: "25%",
		// 	top: "100px"
		// }

		// const regInputStyle = {
		// 	width: "600px",
		// 	height: "40px",
		// 	margin: "0",
		// 	borderRadius: "7px",
		// 	borderStyle: "none",
		// 	paddingLeft: "10px",
		// 	opacity: "0.6"
		// };

		// const shortInputStyle = {
		// 	width: "290px",
		// 	height: "40px",
		// 	margin: "0 20px 0 0",
		// 	borderRadius: "7px",
		// 	borderStyle: "none",
		// 	paddingLeft: "10px",
		// 	opacity: "0.6"
		// }

		const buttonStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px"
		}

		const {errors} = this.state
		return(
			<form onSubmit={this.handleSubmit}>

				<TextFieldGroup
					error={errors.name}
					label="Name"
					handleChange={this.handleChange}
					value={this.state.name}
					field="name"
					type="text"
				/>

				<TextFieldGroup
					error={errors.username}
					label="Email"
					handleChange={this.handleChange}
					value={this.state.username}
					field="username"
					type="text"
				/>				

				<TextFieldGroup
					error={errors.password}
					label="Password"
					handleChange={this.handleChange}
					value={this.state.password}
					field="password"
					type="password"
				/>

				<TextFieldGroup
					error={errors.passwordConfirmation}
					label="Password Confirmation"
					handleChange={this.handleChange}
					value={this.state.passwordConfirmation}
					field="passwordConfirmation"
					type="password"
				/>				

				<TextFieldGroup
					error={errors.city}
					label="City"
					handleChange={this.handleChange}
					value={this.state.city}
					field="city"
					type="text"
				/>

				<TextFieldGroup
					error={errors.state}
					label="State"
					handleChange={this.handleChange}
					value={this.state.state}
					field="state"
					type="text"
				/>

				<TextFieldGroup
					error={errors.phoneNumber}
					label="Phone Number"
					handleChange={this.handleChange}
					value={this.state.phoneNumber}
					field="phoneNumber"
					type="text"
				/>

				<button type="submit" className="btn btn-primary" style={buttonStyle}>Complete Sign Up</button>
			</form>
		)
	}
}

module.exports = SignUpForm
