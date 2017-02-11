import React from 'react';

const authentication = require('../../utils/authentication')




class CreateServiceForm extends React.Component{
	
	constructor() {

		super();

		this.state = {
		
			skillsetDetails: '',

		}

	}

	handleChange(propertyName, event) {

			var change = {};
			change[propertyName] = event.target.value;
			// this.setState({ skillsetDetails: state });
			this.setState({skillsetDetails: event.target.value},
			() => {


		this.props.handleSubmitText(this.state.skillsetDetails)

		})

		return function (e) {
			const state = {};
			state[key] = e.target.value;
			this.setState(state);
		}.bind(this);	
	}

	render() {


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
							id="skillsetDetails"
							onChange={this.handleChange.bind(this, 'skillsetDetails')} 
							/>

							<br />
				</div>

			)
	}
};

module.exports = CreateServiceForm;








