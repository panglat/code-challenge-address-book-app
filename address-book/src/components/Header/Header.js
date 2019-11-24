import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import UserSearch from '../UserSearch/UserSearch';

const Header = () => (
    <header className="header">
      <UserSearch onUserSearch={(search) => alert(search)} />
      <Link to='/settings'>Go to Settings</Link>
    </header>
  );

export default Header;
