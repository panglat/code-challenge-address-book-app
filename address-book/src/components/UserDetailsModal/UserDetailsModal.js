import React from 'react';
import './UserDetailsModal.scss';
import SimpleModal from '../SimpleModal/SimpleModal';

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

export default UserDetailsModal;
