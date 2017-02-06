import React from 'react';
// import axios from "axios";
import helpers from '../utils/helpers'
import {withRouter} from "react-router"

const styles = {
  error: {
    color: '#FF0000',
    marginTop: '15px'
  }
}

const SignIn = withRouter(
	React.createClass({

		getInitialState: function() {

			return {
				username: '',
				password: '',
				error: false
			}
		},

		handleChange: function(propertyName, event) {

			var change = {};
			change[propertyName] = event.target.value;
			this.setState(change)
		},

		handleSubmit: function(event) {
			event.preventDefault()
			helpers.login(this.state)
				.then((result)=>{
					// console.log(result)
					return this.setState({
						error: false
					})
			        const { location } = this.props

			        if (location.state && location.state.nextPathname) {
			          this.props.router.replace(location.state.nextPathname)
			        } else {
			          this.props.router.replace('/')
			        }					
				})
				.catch((err)=>{

					console.log(err)
					return this.setState({
						error: true
					})
				})
			// console.log(newUser);
			// axios.post("/user/login", this.state).then((result)=>{
			// 	// window.location = '/find-service';

			// })
		},

		render: function(){

			return(
				<div>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="emailInput">EMAIL</label>
							<input
								value={this.state.username}
								placeholder="Email Address"
								id="username"
								className="form-control"
								onChange={this.handleChange.bind(this, "username")} />
						</div>
						<div className="form-group">
							<label htmlFor="emailInput">PASSWORD</label>
							<input
								value={this.state.password}
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
						<p style={styles.error}>Invalid username and password combination</p>
					)}

				</div>
			)
		}

	})
)

module.exports = SignIn;
