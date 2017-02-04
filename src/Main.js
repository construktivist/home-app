'use strict';

import React from 'react';
//--------------------------------------------------


//require all child components that will be used
import Search from './components/children/Search';
import SignIn from './components/children/SignIn';
import SignUp from './components/children/SignUp';
import CreateService from './components/children/CreateService';
import Navbar from "./components/children/Navbar"


//--------------------------------------------------
//require the helpers.js file for HTTP requests
import helpers from './components/utils/helpers';


//--------------------------------------------------
//Create the Main component

var Main = React.createClass({

	render: function(){

		return(
			<div>
				<nav className="navbar navbar-default navbar_color">
					<div className="container">
						<div className="navbar-header text">
							<a href="#/find-service" className="navbar-brand">APP NAME</a>
						</div>
						<ul className="nav navbar-nav navbar-right text">
							<li><a href="#/login">LOGIN</a></li>
							<li><a href="#/sign-up">SIGN UP</a></li>
						</ul>
					</div>
				</nav>

				<div className="container content">
					{this.props.children}
				</div>

			</div>
		)
	}
});

module.exports = Main;
