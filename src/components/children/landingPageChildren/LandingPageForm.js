import React from 'react';




var Form = React.createClass({

	getInitialState: function() {

		return {
			projectRequest: '',
			city: '',
			stateTerritory: ''
		}

	},

	handleChange: function() {

		return function (e) {
			var state = {};
			state[e.target.id] = e.target.value;
			this.setState(state);
		}.bind(this);

	},

	handleSubmit: function(e){
		e.preventDefault();

		console.log(this.state);

		this.setState({
			projectRequest: '',
			city: '',
			stateTerritory: ''
		})

	},

	render: function() {

		var formStyle = {
			position: "relative",
			left: "25%",
			top: "200px"
		};
		var requestStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px",
			opacity: "0.6"
		};

		var locationStyle = {
			width: "290px",
			height: "40px",
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



				</div>

			)

	}

});

module.exports = Form;


// <input type="text" className="form-control" id="term" placeholder="What kind of service are you looking for?" onChange={this.handleChange} required/><br />
// 					<span>
// 						<input type="text" className="form-control" id="term" placeholder="City" onChange={this.handleChange} required/>
// 						<input type="text" className="form-control" id="term" placeholder="State" onChange={this.handleChange} required/>
// 					</span>
// 					<button className="btn btn-primary">Add new post</button>
