import React from 'react';

import './UserListItem.scss';

const UserListItem = ({ user, ...rest }) => {
  const {email, login, name, picture} = user;
  return (
    <div className="user-list-item" {...rest}>
        <img
          alt={`${name.first} ${name.last}`}
          src={picture.thumbnail}
          className="user-list-item__thumbnail"
        />
      <div className="user-list-item__user-information">
        <h2 className="user-list-item__full-name">Name: {name.first} {name.last}</h2>
        <p className="user-list-item__user-name">Username: {login.username}</p>
        <p className="user-list-item__email">Email: {email}</p>
      </div>
    </div>
  );
};

export default UserListItem;
