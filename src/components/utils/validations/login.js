import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

// All isEmpty validations return an error if the field in question is left empty and blocks the form from being submitted
export default function validateInput(data) {
	let errors = {}
	// checks if a valid email format has been entered
	if (!Validator.isEmail(data.username)) {
		errors.username = 'Email is invalid'
	}
	if (Validator.isEmpty(data.username)) {
		errors.username = 'This field is required'
	}	
	if (Validator.isEmpty(data.password)) {
		errors.password = 'This field is required'
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}