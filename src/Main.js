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
				<Navbar/>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
});

module.exports = Main;
