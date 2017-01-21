import React from "react";

class CreateServiceServices extends React.Component {

	render() {
		return(
			<div>

				<input type={this.props.type} value={this.props.service}/>{this.props.service}

			</div>

		)
	}

}

module.exports = CreateServiceServices; 