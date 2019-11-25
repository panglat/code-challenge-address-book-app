import React, { useEffect, useState } from 'react';
import './UserList.scss';
import {
  requestUsers,
  usersRecordsToDisplay,
  resetUsersError,
} from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import {
  userList,
  loadingUsers,
  userRecordsToDisplay,
  loadUserFailed,
  settingsNationalitySearch,
  userSearch,
} from '../../store/selectors';
import UserListItem from './UserListItem/UserListItem';
import UserDetailsModal from '../UserDetailsModal/UserDetailsModal';
import {
  USERS_BATCH_SIZE,
  USERS_MAX_CATALOGUE_LENGTH,
} from '../../utils/constants';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => userList(state));
  const isFetchingUsers = useSelector(state => loadingUsers(state));
  const fetchFailed = useSelector(state => loadUserFailed(state));
  const recordsToDisplay = useSelector(state => userRecordsToDisplay(state));
  const userFilterLowerCase = useSelector(state => userSearch(state)).toLowerCase();
  const selectedNationalities = useSelector(state =>
    settingsNationalitySearch(state)
  );
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(usersRecordsToDisplay(USERS_BATCH_SIZE));
  }, [dispatch]);

  useEffect(() => {
    if (!isFetchingUsers && users.length <= recordsToDisplay) {
      if (recordsToDisplay < USERS_MAX_CATALOGUE_LENGTH) {
        dispatch(
          requestUsers({
            results: USERS_BATCH_SIZE,
            nationalitySelection:
              selectedNationalities && selectedNationalities.length > 0
                ? selectedNationalities.join(',')
                : null,
          })
        );
      } else {
        dispatch(usersRecordsToDisplay(users.length));
      }
    }
  }, [
    dispatch,
    isFetchingUsers,
    users.length,
    recordsToDisplay,
    selectedNationalities,
  ]);

  const onItemClick = user => {
    setSelectedUser(user);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      dispatch(usersRecordsToDisplay(users.length));
      if (fetchFailed) {
        dispatch(resetUsersError());
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className="user-list">
      {users &&
        users
          .filter((user, index) => {
            if (index >= recordsToDisplay) {
              return false;
            }
            if (userFilterLowerCase) {
              const {name} = user;
              const fullNameLowercase =  `${name.first} ${name.last}`.toLowerCase();
              return fullNameLowercase.includes(userFilterLowerCase);
            }
            return true;
          })
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
      {isFetchingUsers && users.length === recordsToDisplay && (
        <div>Fetching users</div>
      )}
      {!isFetchingUsers && fetchFailed && <div>User fetch failed</div>}
      {users.length >= USERS_MAX_CATALOGUE_LENGTH && <div>End of file</div>}
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
