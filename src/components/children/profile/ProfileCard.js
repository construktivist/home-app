import React from 'react';
import helpers from '../../utils/helpers'
import axios from "axios";

export default class ProfileCard extends React.Component {
	constructor(){
		super()
		this.state = {
			result: "",
			id: "588e8224c3272c05c810bc33"
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
    	event.preventDefault();
		// console.log(this.state.id);
		// helpers.getProfile(this.state.id).then(function(result){
			// if (Error) {
			// this.setState({ result: {Title: 'No Results Found!'} });
			// } else {
			// this.setState({ result: data.data });
			// }

		// send the state to be posted
		axios.get("/user/profile/")		
		// console.log(result)
		// })
	}

	render() {
		let result = this.state.result
		return(

			<div className= "container">
				<div className="row">
					<div className="col-md-3">
						<img src={result.profileImage}/>			
					</div>
					<div className="col-md-9">
						<p>{result.name}</p>
						<br/>
						<p>Location: {result.city} {result.state}</p>
						<p>Services: {result.serviceOffered}</p>				
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-8 overview text-center">
						<h3>Overview</h3>
						<p>{result.serviceDescription}</p>				
					</div>
					<div className="col-md-4 text-center">
						<button className="btn btn-primary">Get Quote</button>	
					</div>					
				</div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="hidden"
						className="form-control"
						value={this.state.id = "588e8224c3272c05c810bc33"}
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