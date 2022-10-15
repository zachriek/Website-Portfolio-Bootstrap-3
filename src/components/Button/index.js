// React
import React from 'react';
import propTypes from 'prop-types';

// CSS
import './index.css';

const Button = (props) => {
  const className = ['btn'];

  if (props.isPrimary) className.push('btn-primary');
  if (props.isSecondary) className.push('btn-secondary');
  if (props.isSmall) className.push('btn-sm');

  if (props.isAnchor && props.href) {
    if (props.isExternal) {
      return (
        <a href={props.href} className={className.join(' ')} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      );
    }
    return (
      <a href={props.href} className={className.join(' ')}>
        {props.children}
      </a>
    );
  }

  if (props.isButton && props.type) {
    return (
      <button type={props.type} className={className.split(' ')}>
        {props.children}
      </button>
    );
  }
};

Button.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  isSmall: propTypes.bool,
  isAnchor: propTypes.bool,
  href: propTypes.string,
  isExternal: propTypes.bool,
  isButton: propTypes.bool,
  type: propTypes.oneOf(['button', 'submit']),
};

export default Button;
