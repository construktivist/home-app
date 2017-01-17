'use strict';

import React from 'react';
//--------------------------------------------------


//require all child components that will be used
import Navbar from './components/children/Navbar';
import Form from './components/children/LandingPageForm';



//--------------------------------------------------
//require the helpers.js file for HTTP requests
import helpers from './components/utils/helpers';


//--------------------------------------------------
//Create the Main component

var Main = React.createClass({
	
	// constructor: function(props){

	// 	super(props);

	// 	this.state = {
	// 		videoURL: '../backgrounds/handyman.mp4';
	// 	}

	// },


	render: function(){
		var containerStyle = {
			padding: '0'
		};
		var backgroundStyle = {
			
			width: '100%',
			float: 'left',
			top: '0',
			padding: 'none',
			position: 'fixed',
			left: "0",
			zIndex: '-1'
		};
		var contentStyle = {
			zIndex: '1'
		};
		return(
			<div className="container-fluid" style={containerStyle}>

				<video id="background-video" style={backgroundStyle} loop autoPlay>
				<source src='../backgrounds/handyman.mp4' type="video/mp4" />

                
                Your browser does not support the video tag.

                </video>

                <div style={contentStyle}>

				<Navbar />


				<Form />

				</div>

			</div>
		)
	}
});

module.exports = Main;