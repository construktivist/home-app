import React from 'react'
import { Link } from 'react-router'

const Navbar = React.createClass({

	render: function() {
/*
		var navbarStyle = {
			background: "rgba(239,240,241, .83)",
		    border: "#e7e7e7",
		    borderRadius: "0"
		};
*/

		// const navStyle = {
		// 	backgroundColor: "#86BA90"
		// };

		// const textStyle = {
		// 	color: "#EFF7F5"
		// };

		return(
				<nav className="navbar navbar-default navbar_color">
					<div className="container">
						<div className="navbar-header text">
							<Link to="/find-service" className="navbar-brand">Homeside</Link>
						</div>
						<ul className="nav navbar-nav navbar-right text">
							<li>
                                {this.props.loggedIn ? (
                                    <Link to="/create-service">CREATE SERVICE</Link>      
                                ) : (
                                    ""
                                )}
                            </li>                     
                            <li>
                                {this.props.loggedIn ? (
                                    <Link to="/find-service">FIND SERVICE</Link>      
                                ) : (
                                    <Link to="/sign-up">SIGN UP</Link>
                                )}
                            </li>                     
                            <li>
                                {this.props.loggedIn ? (
                                    <Link to="/logout">LOGOUT</Link>
                                ) : (
                                    <Link to="/login">LOGIN</Link>
                                )}
                            </li>
							
						</ul>
					</div>
				</nav>


/*			
			<nav className="navbar navbar-default" style={navStyle}>
				<div className="container">
					<div className="navbar-header">
						<Link to="/find-service" className="navbar-brand" style={textStyle}>Homeside</Link>
					</div>
					<ul className="nav navbar-nav navbar-right">
						<li><Link to='/login' style={textStyle}>LOGIN</Link></li>
						<li><Link to='/sign-up' style={textStyle}>SIGN UP</Link></li>
					</ul>
				</div>
			</nav>


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