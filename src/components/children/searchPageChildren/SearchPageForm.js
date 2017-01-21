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
			top: "100px"		
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
							style={detailStyle}
							value={this.state.projectDetails}
							placeholder="Project Detail"
							onChange={this.handleChange('projectDetails')} />
							<br />

						<button className="btn btn-primary" style={buttonStyle}>Search Services</button>

					</form>

				

				</div>

			)

	}

});

module.exports = Form;






