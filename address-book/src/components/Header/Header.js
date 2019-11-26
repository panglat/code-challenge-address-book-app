import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';
import UserSearch from '../UserSearch/UserSearch';
import NavBar from '../NavBar/NavBar';

const Header = () => (
  <header className="header">
    <UserSearch className="header__user-search" />
    <NavBar />
  </header>
);

export default Header;
