import React from 'react'
import axios from 'axios'

//import children components
import ServicesOffered from './freelancerProfileChildren/ServicesOffered.js'
import ServicesDetails from './freelancerProfileChildren/ServicesDetails.js'



class FreelancerProfile extends React.Component{


	render() {
		return(

			<div>
				<ServicesOffered />
				<ServicesDetails />
			</div>

		)
	}


}


module.exports = FreelancerProfile
