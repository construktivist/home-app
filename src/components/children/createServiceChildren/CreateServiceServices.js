import React from "react";

class CreateServiceServices extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {value: ''};

	    this.handleChange = this.handleChange.bind(this);
  	}

	handleChange(event) {
    	this.setState({value: event.target.value});
    	console.log({value: event.target.value});
  	}

	render() {
		return(
			<div>

				<input type={this.props.type} value={this.props.service} onChange={this.handleChange}/>{this.props.service}

			</div>

		)
	}

}

module.exports = CreateServiceServices; 