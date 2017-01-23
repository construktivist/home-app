import React from 'react';

export default class ServiceButton extends React.Component {

	constructor() {
		super()
		this.state = {
			active: "",
		}
		this.handleClick = this.handleClick.bind(this);
	};

	handleClick(event){
		console.log(event.target.value)
		console.log("Handle Click")
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
