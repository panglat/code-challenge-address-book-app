import React, { useEffect } from 'react';
import './UserList.scss';
import { requestUsers } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/selectors';
import UserListItem from './UserListItem/UserListItem';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => getUsers(state));

  useEffect(() => {
    dispatch(requestUsers());
  }, [dispatch]);

  return <div>{users && users.map(user => UserListItem(user))}</div>;
};

export default UserList;
