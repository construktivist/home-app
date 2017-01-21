import React from 'react';




var CreateServiceForm = React.createClass({

	
	getInitialState: function() {

		return {
			skillsetDetails: '',
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








