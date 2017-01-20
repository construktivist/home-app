import React from 'react';


//import all landing page components
import VideoBackground from './landingPageChildren/VideoBackground.js';
import Navbar from './Navbar.js';
import LandingPageForm from './landingPageChildren/LandingPageForm.js';

var LandingPage = React.createClass({

	render:function(){

		var contentStyle = {
			zIndex: '1'
		};

		return(

			<div>
				<VideoBackground />

				<div style={contentStyle}>

					<Navbar />

					<LandingPageForm />

				</div>
			</div>

		)
	}

});

module.exports = LandingPage;
