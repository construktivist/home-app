'use strict';

import React from 'react';
//--------------------------------------------------


//require all child components that will be used
import SearchPage from './components/children/SearchPage';
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
		var containerStyle = {
			padding: '0',
		};
		return(
			<div className="container-fluid" style={containerStyle}>				

				{this.props.children}

			</div>
		)
	}
});

module.exports = Main;
