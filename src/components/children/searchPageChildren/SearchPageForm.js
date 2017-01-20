import React from 'react';




var Form = React.createClass({

	
	getInitialState: function() {

		return {
			projectDetails: '',
		}

	},

	handleChange: function() {

		return function (e) {
			var state = {};
			state[key] = e.target.value;
			this.setState(state);
		}.bind(this);
	
	},

	render: function() {

		var formStyle = {
			position: "relative",
			left: "25%",
			top: "50px"		
		};

		var detailStyle = {
			width: "600px",
			height: "150px",
			margin: "0 20px 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px",
			opacity: "0.6"
		};

		var buttonStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px"
		};
		

			return(
				<div>

					<form style={formStyle}>
					
						<input
							type='checkbox'
							name='woodwork'
							value='woodwork'
						/>Woodwork
						<br />

						<input
							type='checkbox'
							name='woodwork'
							value='woodwork'
						/>Woodwork
						<br />

						<input
							type='checkbox'
							name='landscaping'
							value='landscaping'
						/>Landscaping
						<br />

						<input
							type='checkbox'
							name='welectricalMaintainence'
							value='electricalMaintainence'
						/>Electrical Maintainence
						<br />

						<input
							type='checkbox'
							name='metalWork'
							value='metalWork'
						/>Metal Work
						<br />

						<input
							type='checkbox'
							name='roofing'
							value='roofing'
						/>Roofing
						<br />

						<input
							type='checkbox'
							name='gardening'
							value='gardening'
						/>Gardening
						<br />	

						<input
							style={detailStyle}
							value={this.state.projectDetails}
							placeholder="Project Detail"
							onChange={this.handleChange('projectDetails')} />
							<br />

						<button className="btn btn-primary" style={buttonStyle}>Find your solution</button>

					</form>

				

				</div>

			)

	}

});

module.exports = Form;


//Woodwork lanscaping electrical maintainence plumbing metal work roofing gardening


// <input type="text" className="form-control" id="term" placeholder="What kind of service are you looking for?" onChange={this.handleChange} required/><br />
// 					<span>
// 						<input type="text" className="form-control" id="term" placeholder="City" onChange={this.handleChange} required/>
// 						<input type="text" className="form-control" id="term" placeholder="State" onChange={this.handleChange} required/>
// 					</span>
// 					<button className="btn btn-primary">Add new post</button>