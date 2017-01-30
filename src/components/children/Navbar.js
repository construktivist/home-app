import React from 'react';


const Navbar = React.createClass({

	render: function() {
/*
		var navbarStyle = {
			background: "rgba(239,240,241, .83)",
		    border: "#e7e7e7",
		    borderRadius: "0"
		};
*/

		const navStyle = {
			backgroundColor: "#86BA90"
		};

		const textStyle = {
			color: "#EFF7F5"
		};

		return(
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

/*
			<nav className="navbar navbar-default" style={navbarStyle}>
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="/#/sign-in">Home App</a>
					</div>
					<ul className="nav navbar-nav navbar-right align-right">
						<li><a href="/#/sign-in/">Log In</a></li>
						<li><a href="/#/sign-up/">Sign Up</a></li>
					</ul>
				</div>
			</nav>
*/
		)
	}
});

module.exports = Navbar;