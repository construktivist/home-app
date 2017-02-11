import React from 'react';
import authentication from '../utils/authentication'
import {withRouter} from "react-router"
import validateInput from '../utils/validations/login'
import TextFieldGroup from '../common/TextFieldGroup'
import wood from '../../../backgrounds/purty_wood.png'

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
			event.preventDefault()

			if (this.isValid()) {

				this.setState({
					errors: {}
				})

				authentication.login(this.state, (loggedIn) => {
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
        <div>
          <div className="container s-con" style={{
            backgroundImage: `url(${wood})`,
            backgroundSize: 'auto 100%'
          }}>

          <div className="sign-in">
              <div>
                <h2 className="s-text">Please Sign In</h2>
              </div>

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
      					<button type="submit" className="btn start">LOGIN</button>
      				</form>

            </div>
          </div>

          <footer className="footer">
            <div className="container f-container">
                <div className="f-item"><a href="#">Legal Stuff</a></div>
                <div className="f-item"><a href="#">Privacy Things</a></div>
                <div className="f-item"><a href="#">Ask Questions</a></div>
                <div className="f-item"><a href="#">"Try" to Contact Us</a></div>
            </div>
          </footer>

        </div>
			)
		}
	})
)

export default SignIn;
