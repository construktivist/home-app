import React from 'react';




const Form = React.createClass({

	getInitialState: function() {

		return {
			projectRequest: '',
			city: '',
			stateTerritory: ''
		}

	},

	handleChange: function() {

		return function (e) {
			let state = {};
			state[e.target.id] = e.target.value;
			this.setState(state)
		}.bind(this)

	},

	handleSubmit: function(e){
		e.preventDefault();

		this.setState({
			projectRequest: '',
			city: '',
			stateTerritory: ''
		})

	},

	render: function() {

		const formStyle = {
			position: "relative",
			left: "25%",
			top: "200px"
		};
		const requestStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px",
			opacity: "0.6"
		};

		const locationStyle = {
			width: "290px",
			height: "40px",
			margin: "0 20px 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px",
			opacity: "0.6"
		};

		const buttonStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px"
		};


		return(
			<form style={formStyle} onSubmit={this.handleSubmit}>

				<input
					id="projectRequest"
					style={requestStyle}
					value={this.state.projectRequest}
					placeholder="What are you looking for?"
					onChange={this.handleChange('projectRequest')} />
					<br />

				<input
					id="city"
					style={locationStyle}
					value={this.state.city}
					placeholder="City"
					onChange={this.handleChange('city')} />


				<input
					id="stateTerritory"
					style={locationStyle}
					value={this.state.stateTerritory}
					placeholder="State"
					onChange={this.handleChange('stateTerritory')} />
					<br />

				<button className="btn btn-primary" style={buttonStyle} type="submit">Find your solution</button>

			</form>
		)
	}
})

module.exports = Form

