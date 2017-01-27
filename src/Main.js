'use strict';

import React from 'react';
//--------------------------------------------------


//require all child components that will be used
import Search from './components/children/Search';
import SignIn from './components/children/SignIn';
import SignUp from './components/children/SignUp';
import CreateService from './components/children/CreateService';



//--------------------------------------------------
//require the helpers.js file for HTTP requests
import helpers from './components/utils/helpers';


//--------------------------------------------------
//Create the Main component

var Main = React.createClass({


	render: function(){
		var navStyle = {
			backgroundColor: "#86BA90"
		};

		var textStyle = {
			color: "#EFF7F5"
		};

		return(
			<div>

				<nav className="navbar navbar-default" style={navStyle}>

					<div className="container">

						<div className="navbar-header">

							<a href="#/find-service" className="navbar-brand" style={textStyle}>APP NAME</a>

						</div>

						<ul className="nav navbar-nav navbar-right">
							<li><a href="#/login" style={textStyle}>LOGIN</a></li>
							<li><a href="#/sign-up" style={textStyle}>SIGN UP</a></li>
						</ul>

					</div>

				</nav>

				<div className="container">

					{this.props.children}

				</div>


			</div>
		)
	}
});

module.exports = Main;
