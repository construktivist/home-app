import React from 'react';

const CreateServiceForm = React.createClass({

	
	getInitialState: function() {

		return {
			skillsetDetails: '',
		}

	},

	handleChange: function() {

		return function (e) {
			const state = {};
			state[key] = e.target.value;
			this.setState(state);
		}.bind(this);
	
	},

	render: function() {


		var detailStyle = {
			width: "600px",
			height: "150px",
			margin: "0 20px 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px",
			opacity: "0.6"
		};
		

			return(
				
				<div>	

						<input
							style={detailStyle}
							value={this.state.skillsetDetails}
							placeholder="Provide additional details of your skillset"
							onChange={this.handleChange('skillsetDetails')} />
							<br />
				

				</div>

			)

	}

});

module.exports = CreateServiceForm;


//Woodwork lanscaping electrical maintainence plumbing metal work roofing gardening


// <input type="text" className="form-control" id="term" placeholder="What kind of service are you looking for?" onChange={this.handleChange} required/><br />
// 					<span>
// 						<input type="text" className="form-control" id="term" placeholder="City" onChange={this.handleChange} required/>
// 						<input type="text" className="form-control" id="term" placeholder="State" onChange={this.handleChange} required/>
// 					</span>
// 					<button className="btn btn-primary">Add new post</button>