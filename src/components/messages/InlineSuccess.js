import React from 'react';
import PropTypes from 'prop-types';

const InlineSuccess = ({ text }) => (
	<small className="text-success form-control-feedback">
		{ text  }
	</small>
);

InlineSuccess.propTypes = {
	text : PropTypes.string.isRequired
}

export default InlineSuccess;
