import React from "react";
import {Link} from "react-router";

export default class SearchResults extends React.Component {

	render() {
		return(
			<div>
				<div className="row">
					<div className="col-xs-4">
						<div className="panel panel-primary">
							<div className="panel-heading">
									<h2 className="panel-heading">
										{this.props.results.name}
									</h2>
							</div>
							<div className="panel-body">
								<div className="row">

									<div className="col-xs-4">
											<img
												src="https://inomics.com/sites/default/files/pictures/picture-95970-1460131169.png"
											alt="profile image" />
									</div>

									<div className="col-xs-8">
										<div className="row">
											<div className="col-xs-12">
												Location: {this.props.results.city}, {this.props.results.state}
											</div>
										</div>
										<div className="row">
											<div className="col-xs-12">
													Services: {this.props.results.serviceOffered}
											</div>
										</div>
										<div className="row">
											<div className="col-xs-12">
												Avg. Customer Rating: {this.props.results.clientSatisfaction}
											</div>
										</div>
										<div className="row">
											<div className="col-xs-12">
												<Link to={"/result-profile/" + this.props.results._id} >View Profile!</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}
