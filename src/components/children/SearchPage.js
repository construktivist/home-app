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

	// handleSubmit(event) {
	// 	event.preventDefault();

	// 	this.setState({ value: {this.props.value} });
	// }

	render(){

		var contentStyle = {
			zIndex: '1'
		};

		var formStyle = {
			position: "relative",
			left: "25%",
			top: "100px"		
		};

		var buttonStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px"
		};

		return(

			<div>
				<VideoBackground />

				<div style={contentStyle}>

					<Navbar />

					<form style={formStyle}>
					 	
					 	{this.state.services.map((service) => <SearchPageServices type="checkbox" name={service} key={service} service={service} />)}
					
						<SearchPageForm />

						<button className="btn btn-primary" style={buttonStyle}>Search Services</button>

					</form>

				</div>
			</div>

		)
	}

}

module.exports = SearchPage;
