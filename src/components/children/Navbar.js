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
						<Link to="/home" className="navbar-brand">Homeside</Link>
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
		)
	}
})

module.exports = Navbar
