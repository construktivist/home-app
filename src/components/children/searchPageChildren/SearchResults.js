import React from "react";

export default class SearchResults extends React.Component {

	render() {
		return(
			<div>

				<input type={this.props.type} value={this.props.service}/>{this.props.service}

			</div>

		)
	}

}
