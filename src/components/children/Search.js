import React from 'react';


//import all landing page components
import VideoBackground from './SearchPageChildren/VideoBackground.js';
import Navbar from './Navbar.js';
import ServiceButton from './SearchPageChildren/ServiceButton.js';
import SearchPageServices from './SearchPageChildren/SearchPageServices.js';

class Search extends React.Component{

	constructor(){
		super();
		this.state = {
			services: ["Plumbing", "Gardening", "Painting", "Woodwork"],
	 	}
	};

	render(){

		var contentStyle = {
			zIndex: '1'
		};

		return(
			<div>
				<VideoBackground />
				<div className="container">
					<div className="row">
						<div style={contentStyle}>
							{this.state.services
								.map(
									(service) => <ServiceButton key={service} service={service} />
								)}
						</div>
					</div>
				</div>
			</div>

		)
	};

};

module.exports = Search;
