import React from 'react';
import PropTypes from 'prop-types';

import './UserListItem.scss';

const UserListItem = ({ index, user, ...rest }) => {
  const {email, login, name, picture} = user;
  return (
    <div className="user-list-item" {...rest}>
        <img
          alt={`${name.first} ${name.last}`}
          src={picture.thumbnail}
          className="user-list-item__thumbnail"
        />
      <div className="user-list-item__user-information">
        <h2 className="user-list-item__full-name">{index+1})Name: {name.first} {name.last}</h2>
        <p className="user-list-item__user-name">Username: {login.username}</p>
        <p className="user-list-item__email">Email: {email}</p>
      </div>
    </div>
  );
};

UserListItem.propTypes = {
  user: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string,
      first: PropTypes.string,
      login: PropTypes.shape({ username: PropTypes.string }),
      last: PropTypes.string,
      picture: PropTypes.shape({ thumbnail: PropTypes.string }),
    }),
  }).isRequired,
};

export default UserListItem;
