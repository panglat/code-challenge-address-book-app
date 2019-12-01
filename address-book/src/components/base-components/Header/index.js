/**
 * @file Render an html header element.
 * @module base-components/Header
 */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({ children }) => (
  <header className="header">
    {children}
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
