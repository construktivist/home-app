'use strict';

import React from 'react';

// main component
var Main = React.createClass({

	render: function(){

		return(
			<div>
				<nav className="navbar navbar-default navbar_color">
					<div className="container">
						<div className="navbar-header text">
							<a href="#/find-service" className="navbar-brand">HOMESIDE</a>
						</div>
						<ul className="nav navbar-nav navbar-right text">
							<li><a href="#/login">Login</a></li>
							<li><a href="#/sign-up">Sign Up</a></li>
						</ul>
					</div>
				</nav>

				<div>
					{this.props.children}
				</div>

			</div>
		)
	}
});

module.exports = Main;
