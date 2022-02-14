import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick, img, title, className }) => {
  return (
    <a
      href="/"
      className={`${className}__link`}
    >
      <div className={ className }>
        <button
          name={ name }
          onClick={ onClick }
          type="button"
          className={ `${className}__button` }
        >
          <img
            src={ img }
            alt={`${title.toLowerCase()}`}
            className={ `${className}__button__image` }
          />
        </button>
        <p className={ `${className}__button__title` }>
          { title }
        </p>
      </div>
    </a>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Button;
