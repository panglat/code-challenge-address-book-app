import React, { useEffect, useState } from 'react';
import './UserList.scss';
import { requestUsers } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, loadingUsers } from '../../store/selectors';
import UserListItem from './UserListItem/UserListItem';
import UserDetailsModal from '../UserDetailsModal/UserDetailsModal';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => getUsers(state));
  const isFetchingUsers = useSelector(state => loadingUsers(state));
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(requestUsers({results: 100}));
  }, [dispatch]);

  const onItemClick = user => {
    setSelectedUser(user);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetchingUsers) return;
      dispatch(requestUsers());
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });


  return (
    <div className="user-list">
      {users &&
        users.map((user, index) => {
          return (
            <UserListItem
              key={`${user.login.salt}`}
              index={index}
              onClick={() => onItemClick(user)}
              user={user}
            />
          );
        })}
      {isFetchingUsers && (<div>Fetching users</div>)}
      {selectedUser && (
        <UserDetailsModal
          onCloseModal={() => setSelectedUser(null)}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default UserList;
