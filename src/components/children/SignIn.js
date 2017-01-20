import React from 'react';

//import all sign in page components
import Navbar from './Navbar';
import SignInForm from './signInChildren/SignInForm';

var SignIn = React.createClass({

	render: function(){
		var background = {
			backgroundColor: "black",
			backgroundSize: "cover",
			minHeight: "800px",
			width: "100%",
			height: "100%"
		};
		return(

			<div style={background}>
				<Navbar />
				<SignInForm />
			</div>

		)
	}

});

module.exports = SignIn;
