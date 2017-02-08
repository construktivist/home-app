import React from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';

//import all landing page components
import VideoBackground from './createServiceChildren/VideoBackground.js';
import CreateServiceForm from './createServiceChildren/CreateServiceForm.js';
import CreateServiceServices from './createServiceChildren/CreateServiceServices.js';

class CreateService extends React.Component{

	constructor(){
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmitText = this.handleSubmitText.bind(this);

		this.state = {

			checkedItem: '',
			skillsetDetail: ''

		}

	}

	handleSubmit(val){
		event.preventDefault();
		console.log(val);
		// this.setState({ checkedItem: val, skillsetDetail: val });
		this.setState({ checkedItem: val });
		console.log(this.state.checkedItem);
		// console.log(this.state.skillsetDetail);

		//send the state to be posted
		axios.put("/user/create-service", this.state)
		.then(function(response) {
			console.log(response);
		});
	}


	handleSubmitText(text){
		event.preventDefault();
		console.log(text);
		this.setState({ skillsetDetail: text });
		console.log(this.state.skillsetDetail);

		//send the state to be posted
		axios.put("/user/create-service", this.state)
		.then(function(response) {
			console.log(response);
		});
	}

	
	handleClick(){
         browserHistory.push('/#/profile');
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


					<form style={formStyle} onSubmit={this.handleSubmit, this.handleSubmitText}>

					 	<CreateServiceServices checked={this.state.checkedItem} handleSubmit={this.handleSubmit}/>

						<CreateServiceForm handleSubmitText={this.handleSubmitText}/>

						<button type="submit" className="btn btn-primary" style={buttonStyle} onClick={this.handleClick}>Create your service</button>

					</form>
				</div>
			</div>

		)
	}

};

module.exports = CreateService;
