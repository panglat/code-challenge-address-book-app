
/**
 * @file Render an html main element.
 * @module base-components/Main
 */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Main = ({ children }) => (
  <main className="main">
    {children}
  </main>
);

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
