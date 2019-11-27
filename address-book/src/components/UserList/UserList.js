import React, { useEffect, useState } from 'react';
import './UserList.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  requestUsers,
  setUsersRecordsToDisplay,
  resetUsersError,
} from '../../store/users/actions';
import {
  userList as userListSelector,
  loadingUsers as loadingUsersSelector,
  userRecordsToDisplay as userRecordsToDisplaySelector,
  loadUserFailed as loadUserFailedSelector,
  userSearch as userSearchSelector,
} from '../../store/users/selectors';
import {
  nationalitySearch as nationalitySearchSelector,
} from '../../store/settings/selectors';
import UserListItem from './UserListItem/UserListItem';
import UserDetailsModal from '../UserDetailsModal/UserDetailsModal';
import {
  USERS_BATCH_SIZE,
  USERS_MAX_CATALOGUE_LENGTH,
} from '../../utils/constants';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => userListSelector(state));
  const isFetchingUsers = useSelector((state) => loadingUsersSelector(state));
  const fetchFailed = useSelector((state) => loadUserFailedSelector(state));
  const recordsToDisplay = useSelector((state) => userRecordsToDisplaySelector(state));
  const userFilterLowerCase = useSelector((state) => userSearchSelector(state)).toLowerCase();
  const selectedNationalities = useSelector((state) => nationalitySearchSelector(state));
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(setUsersRecordsToDisplay(USERS_BATCH_SIZE));
  }, [dispatch]);

  useEffect(() => {
    if (!isFetchingUsers && users.length <= recordsToDisplay) {
      if (recordsToDisplay < USERS_MAX_CATALOGUE_LENGTH && !fetchFailed) {
        dispatch(
          requestUsers({
            listLength: USERS_BATCH_SIZE,
            nationalities:
              selectedNationalities && selectedNationalities.length > 0
                ? selectedNationalities.join(',')
                : null,
          }),
        );
      } else {
        dispatch(setUsersRecordsToDisplay(users.length));
      }
    }
  }, [
    dispatch,
    isFetchingUsers,
    users.length,
    recordsToDisplay,
    selectedNationalities,
    fetchFailed,
  ]);

  const onItemClick = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
          !== document.documentElement.offsetHeight
        && !isFetchingUsers
      ) { return; }
      dispatch(setUsersRecordsToDisplay(users.length));
      if (fetchFailed) {
        dispatch(resetUsersError());
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className="user-list">
      {users
        && users
          .filter((user, index) => {
            if (index >= recordsToDisplay) {
              return false;
            }
            if (userFilterLowerCase) {
              const { name } = user;
              const fullNameLowercase = `${name.first} ${name.last}`.toLowerCase();
              return fullNameLowercase.includes(userFilterLowerCase);
            }
            return true;
          })
          .map((user, index) => (
            <UserListItem
              key={`${user.login.salt}`}
              index={index}
              onClick={() => onItemClick(user)}
              user={user}
            />
          ))}
      {isFetchingUsers && users.length === recordsToDisplay && (
        <div className="user-list__loading-message">
          <LoadingSpinner />
          <span>Fetching users</span>
        </div>
      )}
      {!isFetchingUsers && fetchFailed && (
        <div className="user-list__failed-message">User fetch failed</div>
      )}
      {users.length >= USERS_MAX_CATALOGUE_LENGTH && (
        <div className="user-list__end-of-user-catalog-message">
          End of users catalog
        </div>
      )}
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
