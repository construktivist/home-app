import React from 'react';
import helpers from '../../utils/helpers';

export default class ServiceButton extends React.Component {

	constructor() {
		super()
		this.state = {
			freelancers: [],
		}
		this.handleClick = this.handleClick.bind(this);
	};

	handleClick(event){
		console.log(event.target.value)
		console.log("Handle Click")

		helpers.getFreelancers()
			.then(function(response){
				console.log("Helper called")
				this.setState({
					freelancers: response.data
				});
				console.log(this.state);
			}.bind(this))
	};

	render() {
		return(
			<div className="col-xs-3">
				<button
					className="btn btn-primary"
					type="button"
					value={this.props.service}
					onClick={this.handleClick}>
					{this.props.service}</button>
			</div>
		)
	};

};
