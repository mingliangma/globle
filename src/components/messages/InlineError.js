import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({ text }) => (
	<small className="text-danger form-control-feedback">
		{ text  }
	</small>
);

InlineError.propTypes = {
	text : PropTypes.string.isRequired
}

export default InlineError;
