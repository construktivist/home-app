import React from 'react';
import helpers from '../../utils/helpers'
import axios from "axios";

export default class ProfileCard extends React.Component {
	constructor(){
		super()
		this.state = {
			result: "",
			id: ""
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(event) {
		helpers.getProfile(this.state.id)
			.then(function(result){
				this.setState({ 
					result: result.data
				});
				console.log(this.state)
			}.bind(this))
	}

	render() {
		return(

			<div className= "container">
				<div className="row">
					<div className="col-md-3">
						<img src={this.state.result.profileImage}/>			
					</div>
					<div className="col-md-9">
						<p>{this.state.result.name}</p>
						<br/>
						<p>Location: {this.state.result.city}, {this.state.result.state}</p>
						<p>Services: {this.state.result.serviceOffered}</p>				
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-8 overview text-center">
						<h3>Overview</h3>
						<p>{this.state.result.serviceDescription}</p>				
					</div>
					<div className="col-md-4 text-center">
						<button className="btn btn-primary">Get Quote</button>	
					</div>					
				</div>
				<form onClick={this.handleClick}>
					<input
						type="hidden"
						className="form-control"
						value={this.state.id = "58915842dff47d2497135da1"}
					/>

					<button type="submit" className="btn btn-primary">render profile</button>				
				</form>
			</div>
			/*<div className= "container">
				<div className="row">
					<div className="col-md-3">
						<img src=""/>			
					</div>
					<div className="col-md-9">
						<p>
						John Doe
						</p>
						<br/>
						<p>
						Location: Austin, TX
						<br/>
						Services: Plumber, General Repair, House sitting
						</p>				
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-8 overview text-center">
						<h3>
						Overview
						</h3>
						<p>
						Lorem ipsum dolor sit amet, pulvinar aenean at cras cras gravida metus. Et mauris, elit suspendisse tristique sollicitudin, primis sem, pretium quam vel ac sapien sollicitudin. Lorem odio suspendisse mauris ac, est sed wisi cursus orci volutpat, mauris lectus et. Elit metus nullam sit scelerisque. Lobortis in lorem odio, metus egestas mollis auctor enim. Sapien pellentesque, nibh eget, sit tortor hymenaeos scelerisque, lacus velit eget aenean malesuada dolor nec. Lacus sed posuere occaecati integer mi proin, donec aliquam donec imperdiet a. Ante id habitant non scelerisque pellentesque sem. Dignissim convallis, sit vitae imperdiet elementum consequat nullam a. Cras egestas phasellus praesent ac dui. Pharetra sed quisque eros commodo, in eu lectus, mauris wisi curabitur feugiat vel, sapien nulla fugiat.
						</p>				
					</div>
					<div className="col-md-4 text-center">
						<button className="btn btn-primary">Get Quote</button>	
					</div>					
				</div>
			</div>*/
		)
	}

}