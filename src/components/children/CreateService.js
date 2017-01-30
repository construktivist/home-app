import React from 'react';
import axios from 'axios';


//import all landing page components
import VideoBackground from './createServiceChildren/VideoBackground.js';
import Navbar from './Navbar.js';
import CreateServiceForm from './createServiceChildren/CreateServiceForm.js';
import CreateServiceServices from './createServiceChildren/CreateServiceServices.js';

class CreateService extends React.Component{

	constructor(){
		super();

		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {

			checkedItem: ''

		}

	}


	handleSubmit(checked){
		event.preventDefault();
		console.log(checked);
		this.setState({ checkedItem: checked });
		console.log(this.state.checkedItem);

		//send the state to be posted
		axios.put("/user/create-service", this.state)
		.then(function(response) {
			console.log(response);
		});
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

					<form style={formStyle} onSubmit={this.handleSubmit}>

					 	<CreateServiceServices checked={this.state.checkedItem} handleSubmit={this.handleSubmit}/>

						<CreateServiceForm handleSubmit={this.handleSubmit}/>

						<button type="submit" className="btn btn-primary" style={buttonStyle}>Create your service</button>

					</form>

				</div>
			</div>

		)
	}

};

module.exports = CreateService;
