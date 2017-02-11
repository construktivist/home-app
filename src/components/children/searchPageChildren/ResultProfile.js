import axios from "axios"
import helpers from '../../utils/helpers'
import React from 'react'

export default class ResultProfile extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			result: "",
			id: props.params.id
		}
		this.componentDidMount = this.componentDidMount.bind(this)
	}

	componentDidMount() {
		helpers.getProfile(this.state.id)
			.then(function(result){
				this.setState({
					result: result.data
				});
			}.bind(this))
	}

	render() {
		return(
			<div className= "container">
				<div className="row">
					<div className="col-md-3">
						<img src="https://inomics.com/sites/default/files/pictures/picture-95970-1460131169.png"/>
					</div>
					<div className="col-md-9">
						<h2>{this.state.result.name}</h2>
						<br/>
						<h3>Location: {this.state.result.city}, {this.state.result.state}</h3>
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
			</div>
		)
	}
}
