import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ text, htmlFor, className }) => {
    return (
        <label htmlFor={htmlFor} className={`text-gray-700 font-medium ${className}`}>
            {text}
        </label>
    );
};

Label.propTypes = {
    text: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
    className: PropTypes.string,
};

Label.defaultProps = {
    className: '',
    htmlFor: '',
};

export default Label;
