import React from 'react';

import UserSearch from '../UserSearch';
import UserList from '../UserList';

import './styles.scss';

const Users = () => (
  <div className="users">
    <UserSearch className="users__user-search" />
    <UserList className="users__user-list" />
  </div>
);

export default Users;
