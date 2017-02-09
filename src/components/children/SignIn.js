import React from 'react';
import authentication from '../utils/authentication'
import {withRouter} from "react-router"

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
				error: false			}
		},

		handleChange(propertyName, event) {

			var change = {};
			change[propertyName] = event.target.value;
			this.setState(change)
		},

		handleSubmit(event) {
			event.preventDefault()

			authentication.login(this.state, (loggedIn) => {
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

			return(
				<div>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="emailInput">EMAIL</label>
							<input
								value={this.state.username}
								type="text"
								placeholder="Email Address"
								id="username"
								className="form-control"
								onChange={this.handleChange.bind(this, "username")} />
						</div>
						<div className="form-group">
							<label htmlFor="emailInput">PASSWORD</label>
							<input
								value={this.state.password}
								type="password"
								placeholder="Password"
								id="password"
								className="form-control"
								onChange={this.handleChange.bind(this, "password")} />
						</div>
						<div>
							<button type="submit" className="btn btn-primary">LOGIN</button>
						</div>
					</form>
					{this.state.error && (
						<p style={styles.error}>Invalid username and password combination.</p>
					)}
				</div>
			)
		}
	})
)

export default SignIn;
