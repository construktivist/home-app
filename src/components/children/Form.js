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
			state[key] = e.target.value;
			this.setState(state);
		}.bind(this);
	
	},

	render: function() {

		

			return(
				<div>

				<form>

					<input
						value={this.state.projectRequest}
						placeholder="What are you looking for?"
						onChange={this.handleChange('projectRequest')} />
						<br />

					<input
						value={this.state.city}
						placeholder="City"
						onChange={this.handleChange('city')} />
					
				
					<input
						value={this.state.stateTerritory}
						placeholder="State"
						onChange={this.handleChange('stateTerritory')} />
						<br />

					<button className="btn btn-primary">Find your solution</button>

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