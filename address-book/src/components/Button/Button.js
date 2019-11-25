import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Button.scss';

const Button = ({ children, type, ...rest }) => (
  <button className={cn('button', { [`button--${type}`]: type })} {...rest}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  children: null,
  type: 'primary',
};

export default Button;
