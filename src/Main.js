'use strict'

import React from 'react'
import { Link } from 'react-router'
//--------------------------------------------------

//require all child components that will be used
import Search from './components/children/Search'
import SignIn from './components/children/SignIn'
import SignUp from './components/children/SignUp'
import CreateService from './components/children/CreateService'
import Navbar from "./components/children/Navbar"
import authentication from './components/utils/authentication'
//--------------------------------------------------
//require the helpers.js file for HTTP requests
import helpers from './components/utils/helpers'


//--------------------------------------------------
//Create the Main component

const Main = React.createClass({

	getInitialState() {
    	return {
			loggedIn: authentication.loggedIn()
    	}
	},

	updateAuth(loggedIn) {
		this.setState({
			loggedIn
		})
	},

	componentWillMount() {
		authentication.onChange = this.updateAuth
		authentication.login()
	},

	render() {
		return(
			<div>
				<Navbar loggedIn={this.state.loggedIn}/>
				<div className="container content">
					{this.props.children}
           		</div>
			</div>
		)
	}
})
/*
				<nav className="navbar navbar-default navbar_color">
					<div className="container">
						<div className="navbar-header text">
							<a href="/find-service" className="navbar-brand">Homeside</a>
						</div>
						<ul className="nav navbar-nav navbar-right text">
							<li><Link to="/login">LOGIN</Link></li>
							<li><Link to="/sign-up">SIGN UP</Link></li>
						</ul>
					</div>
				</nav>
*/
export default Main;
