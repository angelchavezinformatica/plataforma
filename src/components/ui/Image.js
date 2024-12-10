// src/components/ui/Image.js

import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, className, width, height }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={{ width: width, height: height }}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Image.defaultProps = {
    alt: '',
    className: '',
    width: 'auto',
    height: 'auto',
};

export default Image;
