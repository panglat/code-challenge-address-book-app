/**
 * @file Render an html button element.
 * @module base-components/Button
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.scss';

const Button = ({ children, buttonType, ...rest }) => (
  <button className={cn('button', { [`button--${buttonType}`]: buttonType })} {...rest}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  children: null,
  buttonType: 'primary',
};

export default Button;
