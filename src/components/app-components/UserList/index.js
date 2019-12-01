/**
 * @file Render the user list.
 * @module app-components/UserList
 */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import {
  requestUsers,
  setUsersRecordsToDisplay,
  resetUsersError,
} from '../../../store/users/actions';
import {
  userList as userListSelector,
  loadingUsers as loadingUsersSelector,
  userRecordsToDisplay as userRecordsToDisplaySelector,
  loadUserFailed as loadUserFailedSelector,
  userSearch as userSearchSelector,
} from '../../../store/users/selectors';
import {
  nationalitySearch as nationalitySearchSelector,
} from '../../../store/settings/selectors';
import UserListItem from './UserListItem';
import UserDetailsModal from '../UserDetailsModal';
import {
  USERS_BATCH_SIZE,
  USERS_MAX_CATALOGUE_LENGTH,
} from '../../../utils/constants';
import LoadingSpinner from '../../base-components/LoadingSpinner';

import './styles.scss';

/**
 * @lends module:app-components/UserList
 */
const UserList = ({ className }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => userListSelector(state));
  const isFetchingUsers = useSelector((state) => loadingUsersSelector(state));
  const fetchFailed = useSelector((state) => loadUserFailedSelector(state));
  const recordsToDisplay = useSelector((state) => userRecordsToDisplaySelector(state));
  const userFilterLowerCase = useSelector((state) => userSearchSelector(state)).toLowerCase();
  const selectedNationalities = useSelector((state) => nationalitySearchSelector(state));
  const [selectedUser, setSelectedUser] = useState(null);
  const userListRef = useRef(null);

  /**
   * HOW USERS ARE PRE-EMPTIVELY FETCHED
   * The all users are stored *users* array. There is also a *recordsToDisplay*
   * variable saving the number of users to be displayed in the UI user list.
   * At the beginning the *recordsToDisplay* is set to USERS_BATCH_SIZE, making the useEffect
   * to bring the first batch of users. Now *users*.length === *recordsToDisplay*,
   * and a new pre-emptively fetch will be dispatched.
   * Everytime the users length is lesser or equals to *recordsToDisplay*, a
   * new pre-emptively user fetch will be dispatched.
   * Once the new batch of user if fetched, they will be added at the end of the
   * *users* list but they will not be displayed in the UI user list due to
   * *recordsToDisplay* will not be updated with the new *users* list length.
   * Once the user scroll to the button of the page, *recordsToDisplay* will be
   * equal to *users* length, displaying in the full user list users in the UI,
   * and a new pre-emptively user fetch will be dispatched.
   */

  /**
   * Once the component is loaded, *recordsToDisplay* will be set with the first batch of users
   */
  useEffect(() => {
    dispatch(setUsersRecordsToDisplay(USERS_BATCH_SIZE));
  }, [dispatch]);

  /**
   * This effect fetches a batch of users.
   */
  useEffect(() => {
    /**
     * Everytime the users length is lesser or equals to *recordsToDisplay*, a
     * new pre-emptively user fetch will be dispatched.
     * The pre-emptively user fetch will not be dispatched if the is a previous
     * fetch is being in process or the end of the catalog has been reached.
     * Once the end of user catalog is reached, the last batch of user is
     * displayed in the UI list by setting *recordsToDisplay* = *users*.length
     */
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

  /**
   * this effect manages the infinite scroll
   */
  useEffect(() => {
    if (!userListRef) return;
    const { current } = userListRef;

    /**
     * Manage the user list scroll
     */
    const handleScroll = () => {
      if (
        current.offsetHeight + current.scrollTop !== current.scrollHeight && !isFetchingUsers
      ) {
        // The user has not reached the bottom of the list
        return;
      }
      /**
       * If the user reaches the bottom of the page, *recordsToDisplay* is set with *users*.length
       * and any previous request error being is reset.
       */
      dispatch(setUsersRecordsToDisplay(users.length));
      if (fetchFailed) {
        dispatch(resetUsersError());
      }
    };

    // Subscribe to the scroll event
    current.addEventListener('scroll', handleScroll);

    // Unsubscribe to the scroll event
    // eslint-disable-next-line consistent-return
    return () => current.removeEventListener('scroll', handleScroll);
  }, [dispatch, fetchFailed, isFetchingUsers, userListRef, users.length]);

  return (
    <div className={cn('user-list', className)} ref={userListRef}>
      <div className="user-list__container">
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
      </div>
      {isFetchingUsers && (
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

UserList.propTypes = {
  className: PropTypes.string,
};

UserList.defaultProps = {
  className: '',
};


export default UserList;
