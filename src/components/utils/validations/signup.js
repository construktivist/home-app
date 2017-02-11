import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

// All isEmpty validations return an error if the field in question is left empty and blocks the form from being submitted
export default function validateInput(data) {
	let errors = {}

	if (Validator.isEmpty(data.name)) {
		errors.name = 'This field is required'
	}
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
	// if the password and password confirmation do not match then an error will be thrown and blocks the form submittal
	if (!Validator.equals(data.password, data.passwordConfirmation)) {
		errors.passwordConfirmation = 'Passwords must match'
	}		
	if (Validator.isEmpty(data.passwordConfirmation)) {
		errors.passwordConfirmation = 'This field is required'
	}
	if (Validator.isEmpty(data.city)) {
		errors.city = 'This field is required'
	}
	if (Validator.isEmpty(data.state)) {
		errors.state = 'This field is required'
	}
	if (Validator.isEmpty(data.phoneNumber)) {
		errors.phoneNumber = 'This field is required'
	}
	// if the phone number format is incorrect an error is thrown and blocks the form submittal
	if (!Validator.isMobilePhone(data.phoneNumber, 'en-US')) {
		errors.phoneNumber = 'Number is Invalid'
	}
	
	return {
		errors,
		isValid: isEmpty(errors)
	}
}