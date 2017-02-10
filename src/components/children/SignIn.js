import React from 'react';
import authentication from '../utils/authentication'
import {withRouter} from "react-router"
import validateInput from '../utils/validations/login'
import TextFieldGroup from '../common/TextFieldGroup'

const styles = {
  error: {
    color: '#FF0000',
    marginTop: '15px',
    textAlign: '-webkit-center'
  }
}

const SignIn = withRouter(
	React.createClass({

		getInitialState() {

			return {
				username: '',
				password: '',
				errors: {}			
			}

			this.handleChange = this.handleChange.bind(this)
			this.handleSubmit = this.handleSubmit.bind(this)			
		},

		handleChange(event) {

			// var change = {};
			// change[propertyName] = event.target.value;
			// this.setState(change)
			this.setState({
				[event.target.name]: event.target.value
			})			
		},

		isValid() {
			const { errors, isValid } = validateInput(this.state)

			if(!isValid) {
				this.setState({
					errors
				})
			}
			return isValid
		},

		handleSubmit(event) {
			console.log(this.state)
			event.preventDefault()

			if (this.isValid()) {

				this.setState({
					errors: {}
				})


				authentication.login(this.state, (loggedIn) => {
					// console.log(loggedIn)
					// console.log(this.state.error)
					if (!loggedIn) {
						return this.setState({
							errors: { 
								username: "Invalid username and password combination."
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
		},

		render() {
			const {errors} = this.state
			return(
				<form onSubmit={this.handleSubmit}>
					
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
					<button type="submit" className="btn btn-primary">LOGIN</button>
				</form>
			)
		}
	})
)

export default SignIn;
