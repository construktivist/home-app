import React from 'react'

//import all landing page components
import VideoBackground from './SearchPageChildren/VideoBackground.js'
import Navbar from './Navbar.js'
import ServiceButton from './SearchPageChildren/ServiceButton.js'
import SearchResults from './SearchPageChildren/SearchResults.js'

class Search extends React.Component{

	constructor(){
		super();
		this.state = {
			services: ["Woodwork", "Upholstery", "Landscaping", "Electrical", "Metal Work", "Roofing", "Gardening", "Painting", "Hammering", "Moving Services", "Welding", "Plumbing"],
			results: [],
	 	}
		this.setResults = this.setResults.bind(this)
	}

	setResults(data){
		this.setState({
				results: data
		})
	}

	render(){

		var contentStyle = {
			zIndex: '1'
		};

		return(
			<div>
				<VideoBackground />
				<div className="container">
					<div className="row">
							{this.state.services
								.map(
									(service) => <ServiceButton key={service} service={service} setResults={this.setResults} />
								)}
					</div>
					<div className="row">
						<div style={contentStyle}>
							{this.state.results
							  .map(
							    (results) => <SearchResults key={results._id} results={results} />
							  )}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Search
