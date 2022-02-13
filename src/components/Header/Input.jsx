import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name,
  onChange,
  placeholder,
  className,
  isDisabled,
}) => {
  return (
    <div className={ className }>
      <input
        name={ name }
        onChange={ ({target: { value }}) => onChange(value) }
        placeholder={ placeholder }
        type="text"
        className={ `${className}__input` }
      />
      <button
        name={ `${name}__button` }
        type="button"
        className={ `${className}__button` }
        disabled={ isDisabled() }
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
  isDisabled: PropTypes.bool.isRequired,
}

export default Input;
