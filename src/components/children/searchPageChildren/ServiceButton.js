import React from 'react'
import helpers from '../../utils/helpers'

export default class ServiceButton extends React.Component {

	constructor() {
		super()
		this.state = {
			freelancers: [],
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		const service = event.target.value

		helpers.getFreelancers(service)
			.then(function(response){
				this.setState({
					freelancers: response.data
				})
				this.props.setResults(this.state.freelancers)
			}.bind(this))
	}

	render() {
		return(
			<div className="col-xs-3">
				<div className="search-pad">
					<button
						className="btn btn-primary"
						type="button"
						value={this.props.service}
						onClick={this.handleClick}>
						{this.props.service}
					</button>
				</div>
			</div>
		)
	};

};
