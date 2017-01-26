import React from 'react';


var Navbar = React.createClass({

	render: function() {

		var navbarStyle = {
			background: "rgba(239,240,241, .83)",
		    border: "#e7e7e7",
		    borderRadius: "0"
		};

		return(

			<nav className="navbar navbar-default" style={navbarStyle}>
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Home App</a>
					</div>
					<ul className="nav navbar-nav navbar-right align-right">
						<li><a href="/#/sign-in/">Log In</a></li>
						<li><a href="/#/sign-up/">Sign Up</a></li>
					</ul>
				</div>
			</nav>

		)

	}

});

module.exports = Navbar;