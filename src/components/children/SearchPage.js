import React from 'react';


//import all landing page components
import VideoBackground from './SearchPageChildren/VideoBackground.js';
import Navbar from './Navbar.js';
import SearchPageForm from './SearchPageChildren/SearchPageForm.js';
import SearchPageServices from './SearchPageChildren/SearchPageServices.js';

class SearchPage extends React.Component{

	constructor(){
		super();

		this.state = {
			services: ["Woodwork", "Upolstery", "Landscaping", "Electrical Maintainence", "Metal Work", "Roofing", "Gardening", "Painting", "Hammering", "Moving Services"],
			service: ""
		}
	}

	render(){

		var contentStyle = {
			zIndex: '1'
		};

		return(

			<div>
				<VideoBackground />

				<div style={contentStyle}>

					<Navbar />

					<form>
					 	{this.state.services.map((service) => <SearchPageServices type="checkbox" name={service} value={service} key={service} service={service} />)}
					</form>

					<SearchPageForm />

				</div>
			</div>

		)
	}

}

module.exports = SearchPage;
