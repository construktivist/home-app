import React from 'react';
import axios from 'axios';

import User from '../../../../models/User.js';


class ServicesOffered extends React.Component{

	constructor(){

		super();

		this.state = {

			services: '',

		}
	}

	handleSubmit(){

		axios.get('/user/create-service/' + User.serviceOffered)
		.then (function(response){
			console.log(response);
		})
		.catch (function(error){
			console.log(error);		
		});

	}

	render(){
		return(

			<div>
				<form onSubmit={this.handleSubmit}>
					<button onSubmit={this.handleSubmit}>Press the button, little bitch</button>
				</form>
			</div>

		)
	}

}


module.exports = ServicesOffered;