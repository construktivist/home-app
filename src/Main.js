import React from 'react';
//--------------------------------------------------


//require all child components that will be used
import Form from './components/children/Form';



//--------------------------------------------------
//require the helpers.js file for HTTP requests
import helpers from './components/utils/helpers';


//--------------------------------------------------
//Create the Main component

var Main = React.createClass({
	render: function(){
		// var style = {
		// 	background: 'url(http://i.imgur.com/Q1RiVF2.gif)',
		// 	backgroundSize: 'cover'
		// };
		return(
			<div className="container-fluid">

				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						        <span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						    </button>
						    <a className="navbar-brand" href="#">Charlizard</a>
						</div>
						<ul className="nav navbar-nav navbar-right align-right">
							<li><a href="#">Log In</a></li>
							<li><a href="#">Sign Up</a></li>
						</ul>
					</div>
				</nav>


				<Form />


			</div>
		)
	}
});

module.exports = Main;