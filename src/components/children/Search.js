import React from 'react';


//import all landing page components
import VideoBackground from './SearchPageChildren/VideoBackground.js';
import Navbar from './Navbar.js';
import ServiceButton from './SearchPageChildren/ServiceButton.js';
import SearchPageServices from './SearchPageChildren/SearchResults.js';

class Search extends React.Component{

	constructor(){
		super();
		this.state = {
			services: ["plumbing", "gardening", "painting", "woodwork"],
			results: "",
	 	}
		this.setResults = this.setResults.bind(this);
	};

	setResults(data){
		this.setState({
				results: data
		});
		console.log(this.state.results);
	};

	render(){

		var contentStyle = {
			zIndex: '1'
		};

		return(
			<div>
				<VideoBackground />
				<div className="container">
					<div className="row">
						<div style={contentStyle}>
							{this.state.services
								.map(
									(service) => <ServiceButton key={service} service={service} setResults={this.setResults} />
								)}
						</div>
					</div>
					<div className="row">
						<div style={contentStyle}>
							{this.state.results
								.map(
									(results) => <SearchResults key={results} results={results} />
								)}
						</div>
					</div>
				</div>
			</div>

		)
	};

};

module.exports = Search;
