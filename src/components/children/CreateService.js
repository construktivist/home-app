import React from 'react';


//import all landing page components
import VideoBackground from './createServiceChildren/VideoBackground.js';
import Navbar from './Navbar.js';
import CreateServiceForm from './createServiceChildren/CreateServiceForm.js';

var CreateService = React.createClass({

	render:function(){

		var contentStyle = {
			zIndex: '1'
		};

		return(

			<div>
				<VideoBackground />

				<div style={contentStyle}>

					<Navbar />

					<CreateServiceForm />

				</div>
			</div>

		)
	}

});

module.exports = CreateService;
