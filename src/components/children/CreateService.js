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

		var formStyle = {
			position: "relative",
			left: "25%",
			top: "50px"		
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
						 
						{this.state.services.map((service) => <CreateServiceServices type="checkbox" name={service} value={service} key={service} service={service} />)}

						<CreateServiceForm />

						<button className="btn btn-primary" style={buttonStyle}>Create Service</button>

					</form>

				</div>
			</div>

		)
	}

};

module.exports = CreateService;





