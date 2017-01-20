import React from 'react';


//import all landing page components
import VideoBackground from './SearchPageChildren/VideoBackground.js';
import Navbar from './Navbar.js';
import SearchPageForm from './SearchPageChildren/SearchPageForm.js';

var SearchPage = React.createClass({

	render:function(){

		var contentStyle = {
			zIndex: '1'
		};

		return(

			<div>
				<VideoBackground />

				<div style={contentStyle}>

					<Navbar />

					<SearchPageForm />

				</div>
			</div>

		)
	}

});

module.exports = SearchPage;
