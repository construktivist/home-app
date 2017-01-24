import React from "react";

class CreateServiceServices extends React.Component {

	constructor(){
		super();

		this.state = {
			
			data: [

				{id: 'Woodwork', selected: false},
				{id: 'Upholstery', selected: false},
				{id: 'Landscaping', selected: false},
				{id: 'Electrical Maintainence', selected: false},
				{id: 'Metal Work', selected: false},
				{id: 'Roofing', selected: false},
				{id: 'Gardening', selected: false},
				{id: 'Painting', selected: false},
				{id: 'Hammering', selected: false},
				{id: 'Moving Services', selected: false}

			]
		}

	}

	render() {
		var checks = this.state.data.map(function(d) {
            return (
                <div key={d.id}>
                    <input type="checkbox" data-id={d.id} checked={d.selected} onChange={this.changeSelection.bind(this, d.id)} />
                    {d.id}
                    <br />
                </div>
            );
        }.bind(this));
        return (
        	<div>
                <input type="checkbox" ref="globalSelector" onChange={this.changeAllChecks} />
                <br />
                {checks}
            </div>
        );
	}

	changeSelection(id){
		var state = this.state.data.map(function(d){
			return {
				id: d.id,
				selected: (d.id === id ? !d.selected : d.selected)
			}
		});

		this.setState({ data: state });
		console.log()
	}

	changeAllChecks() {
        var value = this.refs.globalSelector.getDOMNode().checked;
        var state = this.state.data.map(function(d) {
            return { id: d.id, selected: value };
        });

        this.setState({ data: state });
    }

}

module.exports = CreateServiceServices; 