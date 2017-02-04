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
				{id: 'Moving Services', selected: false},
				{id: 'Welding', selected: false}

			],

			checkedBoxes: []
		}

	}



	changeSelection(id){
		var state = this.state.data.map(function(d){
			return {
				id: d.id,
				selected: (d.id === id ? !d.selected : d.selected)
			}
		});

		this.setState({ data: state });
		console.log(id);
		let checkedBoxes = this.state.checkedBoxes
		let index
		 if (id) {
      // add the numerical value of the checkbox to options array
	      checkedBoxes.push(id)
	    } else {
	      // or remove the value from the unchecked checkbox from the array
	      index = checkedBoxes.indexOf(id)
	      checkedBoxes.splice(index, 1)
	    }
	    this.setState({ checkedBoxes: checkedBoxes })
	    console.log({ checkedBoxes: checkedBoxes })
	    this.props.handleSubmit( this.state.checkedBoxes );
	}




	changeAllChecks() {
        var value = this.refs.globalSelector.getDOMNode().checked;
        var state = this.state.data.map(function(d) {
            return { id: d.id, selected: value };
        });

        this.setState({ data: state });
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
                {checks}
            </div>
        );
	}


}

module.exports = CreateServiceServices; 