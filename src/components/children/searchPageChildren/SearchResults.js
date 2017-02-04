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
							{this.props.results.profileImage}
							{this.props.results.servicesOffered}
							{this.props.results.clientSatisfaction}
						</div>
				</div>
			</div>

		)
	}

}
