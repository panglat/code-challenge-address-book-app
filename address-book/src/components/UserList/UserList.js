import React, { useEffect, useState } from 'react';
import './UserList.scss';
import { requestUsers } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/selectors';
import UserListItem from './UserListItem/UserListItem';
import SimpleModal from '../SimpleModal/SimpleModal';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => getUsers(state));
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(requestUsers());
  }, [dispatch]);

  const onItemClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      {users &&
        users.map(user => {
          return <UserListItem user={user} onClick={() => onItemClick(user)} />;
        })}
      {selectedUser && (<SimpleModal onCloseModal={() => setSelectedUser(null)}>{selectedUser.email}</SimpleModal>)} 
    </div>
  );
};

export default UserList;
