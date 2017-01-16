import React from 'react';




var Form = React.createClass({
	
	render: function(){

			return(

				<form onSubmit={this.handleSubmit}>
				
					<input type="text" className="form-control" id="term" placeholder="What kind of service are you looking for?" onChange={this.handleChange} required/><br />
					<span>
						<input type="text" className="form-control" id="term" placeholder="City" onChange={this.handleChange} required/>
						<input type="text" className="form-control" id="term" placeholder="State" onChange={this.handleChange} required/>
					</span>
					<button className="btn btn-primary">Add new post</button>

				</form>

			)

	}

});

module.exports = Form;