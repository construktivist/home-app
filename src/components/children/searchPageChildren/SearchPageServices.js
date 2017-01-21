import React from "react";

class SearchPageServices extends React.Component {

	render() {
		return(

			<input type={this.props.type}>{this.props.service}</input>

		)
	}

}

module.exports = SearchPageServices; 