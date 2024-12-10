// src/components/ui/Input.js

import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, id, placeholder, className, value, onChange, required }) => {
    return (
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            className={`border p-2 rounded w-full focus:outline-none ${className}`}
            value={value}
            onChange={onChange}
            required={required}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
};

Input.defaultProps = {
    type: 'text',
    className: '',
    required: false,
};

export default Input;
