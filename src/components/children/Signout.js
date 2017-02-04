import React from 'react';
import auth from '../../services/Authentication';
import { Link } from 'react-router';




class Signout extends React.Component {
	
	constructor(props, context) {
		super(props, context);
	}

	
	componentDidMount() {
		auth.logout();
	}


	render() {
		return(

			<div>

				<p>
					You are logged out. Go back to <Link to="/#/login"></Link>
				</p>

			</div>

		)
	}


}

module.exports = Signout;