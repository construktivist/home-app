import React from 'react'
import classnames from 'classnames'

const TextFieldGroup = ({ field, value, label, error, type, handleChange })=> {
	return (
		<div className={classnames("form-group", {"has-error": error})}>
			<label className="control-label">{label}</label>
			<input
				name={field}
				value={value}
				type={type}
				onChange={handleChange}
				className="form-control"
			/>
			{error && <span className="help-block">{error}</span>}
		</div>
	)
}

TextFieldGroup.propTypes = {
	field: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	error: React.PropTypes.string,
	type: React.PropTypes.string.isRequired,
	handleChange: React.PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
	type: 'text'
}

export default TextFieldGroup