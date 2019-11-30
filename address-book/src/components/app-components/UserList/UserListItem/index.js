/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const UserListItem = ({ user, ...rest }) => {
  const {
    email, login, name, picture,
  } = user;
  return (
    <div className="user-list-item" {...rest}>
      <div className="user-list-item__image">
        <img
          alt={`${name.first} ${name.last}`}
          src={picture.thumbnail}
          className="user-list-item__image-thumbnail"
        />
      </div>
      <div className="user-list-item__user-information">
        <h2 className="user-list-item__full-name">Name: {name.first} {name.last}</h2>
        <p className="user-list-item__user-name">Username: {login.username}</p>
        <p className="user-list-item__email">Email: {email}</p>
      </div>
    </div>
  );
};

UserListItem.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    first: PropTypes.string,
    login: PropTypes.shape({ username: PropTypes.string }),
    last: PropTypes.string,
    name: PropTypes.shape({ first: PropTypes.string, last: PropTypes.string }),
    picture: PropTypes.shape({ thumbnail: PropTypes.string }),
  }).isRequired,
};

export default UserListItem;
