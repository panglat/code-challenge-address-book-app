import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar = ({className }) => (
  <ul className={cn('nav-bar', className)}>
    <li class="nav-bar__item">
      <NavLink className="nav-bar__item-link" exact={true} activeClassName="nav-bar__item-link--active" to="/">
        Home
      </NavLink>
    </li>
    <li class="nav-bar__item">
      <NavLink className="nav-bar__item-link" activeClassName="nav-bar__item-link--active" to="/settings">
        Settings
      </NavLink>
    </li>
  </ul>
);

NavBar.propTypes = {
  className: PropTypes.string,
};

NavBar.defaultProps = {
  className: '',
};

export default NavBar;
