import axios from "axios";
import helpers from '../../utils/helpers'
import React from 'react';
import authentication from '../../utils/authentication'


export default class ProfileCard extends React.Component {
	constructor(){
		super()
		this.state = {
			result: "",
			id: "",
			loggedIn: authentication.loggedIn()

		}
		this.componentDidMount = this.componentDidMount.bind(this)
		this.componentWillMount = this.componentWillMount.bind(this)
		this.updateAuth = this.updateAuth.bind(this)
	}

		updateAuth(loggedIn) {
	    this.setState({
	      loggedIn
	    })
	  }

	  componentWillMount() {
	    authentication.onChange = this.updateAuth
	    authentication.login()
	  }

	componentDidMount(event) {
		helpers.getProfile(this.state.id)
			.then(function(result){
				this.setState({ 
					result: result.data
				});
				console.log(this.state)
			}.bind(this))
	}

	render() {
		const token = authentication.getToken()
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
					</div>					
				</div>
				<div
					type="hidden"
					value={this.state.id = token}
				/>
			
			</div>
		)
	}

}