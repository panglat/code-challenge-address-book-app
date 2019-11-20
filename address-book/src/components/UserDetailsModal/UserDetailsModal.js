import React from 'react';
import './UserDetailsModal.scss';
import SimpleModal from '../SimpleModal/SimpleModal';

const UserDetailsModal = ({user, ...rest}) => {
  const {location, name} = user;
  return (
    <SimpleModal {...rest}>
      <h2>{`${name.first} ${name.last}`}</h2>
      <p>Address: {`${location.street.number}, ${location.street.name}`}</p>
      <p>City: {location.city}</p>
      <p>State: {location.state}</p>
      <p>PostCode: {location.postcode}</p>
      <p>Phone: {user.phone}</p>
      <p>Cell: {user.cell}</p>
    </SimpleModal>
  );
};

export default UserDetailsModal;
