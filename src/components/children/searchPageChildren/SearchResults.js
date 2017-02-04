import React from "react";

export default class SearchResults extends React.Component {

	render() {
		return(
			<div>
					<div className="panel panel-default">
						<div className="panel-heading">
							{this.props.results.name}
						</div>
						<div className="panel-body">
							{this.props.results.username}
							{this.props.results.serviceOffered}
							{this.props.results.phoneNumber}
						</div>
				</div>
			</div>

		)
	}

}
