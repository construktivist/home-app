import React from 'react';

//import all sign in page components
import Navbar from './Navbar';
import SignUpForm from './signUpChildren/SignUpForm';

var SignUp = React.createClass({

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
				<SignUpForm />
			</div>

		)
	}

});

module.exports = SignUp;
