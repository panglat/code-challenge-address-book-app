import React, { useEffect, useState } from 'react';
import './UserList.scss';
import { requestUsers, usersRecordsToDisplay } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, loadingUsers, userRecordsToDisplay } from '../../store/selectors';
import UserListItem from './UserListItem/UserListItem';
import UserDetailsModal from '../UserDetailsModal/UserDetailsModal';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => getUsers(state));
  const isFetchingUsers = useSelector(state => loadingUsers(state));
  const recordsToDisplay = useSelector(state => userRecordsToDisplay(state));
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(requestUsers());
    dispatch(usersRecordsToDisplay(recordsToDisplay + 50))
  }, [dispatch]);

  useEffect(() => {
    debugger;
    if(!isFetchingUsers && users.length === recordsToDisplay && users.length <= 950) {
      dispatch(requestUsers());
    }
  }, [dispatch, users, recordsToDisplay, isFetchingUsers]);


  const onItemClick = user => {
    setSelectedUser(user);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetchingUsers) return;
      debugger;
      if (users.length > recordsToDisplay) {
        dispatch(usersRecordsToDisplay(users.length))
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });


  return (
    <div className="user-list">
      {users &&
        users.filter((user, index) => index < recordsToDisplay)
        .map((user, index) => {
          return (
            <UserListItem
              key={`${user.login.salt}`}
              index={index}
              onClick={() => onItemClick(user)}
              user={user}
            />
          );
        })}
      {isFetchingUsers && users.length === recordsToDisplay && (<div>Fetching users</div>)}
      {users.length >= 1000 && (<div>End of file</div>)}
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
