/**
 * @file Render the user details modal
 * @module app-components/UserDetailsModal
 */

/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import SimpleModal from '../../base-components/SimpleModal';

import './styles.scss';

const UserDetailsModal = ({ user, ...rest }) => {
  const { location, name } = user;
  return (
    <SimpleModal {...rest}>
      <div className="user-details-modal">
        <h2>{`${name.first} ${name.last}`}</h2>
        <p><b>Address:</b> {`${location.street.number}, ${location.street.name}`}</p>
        <p><b>City:</b> {location.city}</p>
        <p><b>State:</b> {location.state}</p>
        <p><b>PostCode:</b> {location.postcode}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Cell:</b> {user.cell}</p>
      </div>
    </SimpleModal>
  );
};

UserDetailsModal.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({ first: PropTypes.string, last: PropTypes.string }),
    location: PropTypes.shape({
      cell: PropTypes.string,
      city: PropTypes.string,
      phone: PropTypes.string,
      postcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      state: PropTypes.string,
      street: PropTypes.shape({
        number: PropTypes.number,
        name: PropTypes.string,
      }),
    }),
    phone: PropTypes.string,
    cell: PropTypes.string,
  }).isRequired,
};

export default UserDetailsModal;
