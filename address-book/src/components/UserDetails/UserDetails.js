import React from 'react';
import {
  useParams
} from "react-router-dom";

import './UserDetails.scss';

const UserDetails = user => {
  const { id } = useParams();
  return (
    <div className="user-details">
      UserDetails {id}
    </div>
  );
};

export default UserDetails;
