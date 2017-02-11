import React from 'react'
import authentication from '../utils/authentication'
import { Link } from 'react-router'

class SignOut extends React.Component {
	
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {
		authentication.logout()
		this.props.router.replace('/login')							
	}

	render() {
		return(
			<div>
				<p>
					You are logged out. Go back to <Link to="/login">LOGIN</Link>
				</p>
			</div>
		)
	}
}

export default SignOut