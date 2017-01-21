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

						<input
							style={detailStyle}
							value={this.state.projectDetails}
							placeholder="Project Detail"
							onChange={this.handleChange('projectDetails')} />
							<br />

				</div>

			)

	}

});

module.exports = Form;






