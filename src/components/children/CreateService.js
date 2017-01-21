import React from 'react';


//import all landing page components
import VideoBackground from './createServiceChildren/VideoBackground.js';
import Navbar from './Navbar.js';
import CreateServiceForm from './createServiceChildren/CreateServiceForm.js';
import CreateServiceServices from './createServiceChildren/CreateServiceServices.js';

class CreateService extends React.Component{

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
					 	{this.state.services.map((service) => <CreateServiceServices type="checkbox" name={service} value={service} key={service} service={service} />)}
					</form>

					<CreateServiceForm />

				</div>
			</div>

		)
	}

};

module.exports = CreateService;
