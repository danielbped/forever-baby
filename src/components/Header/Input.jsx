import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, onChange, placeholder, className }) => {
  return (
    <div className={ className }>
      <input
        name={ name }
        onChange={ onChange }
        placeholder={ placeholder }
        type="text"
        className={ `${className}__input` }
      />
      <button
        name={ `${name}__button` }
        type="button"
        className={ `${className}__button` }
      >
        BUSCAR
      </button>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Input;
