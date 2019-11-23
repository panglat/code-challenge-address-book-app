import React from 'react';

import './Header.scss';
import UserSearch from '../UserSearch/UserSearch';

const Header = () => (
    <header className="header">
      <UserSearch onUserSearch={(search) => alert(search)} />
    </header>
  );

export default Header;
