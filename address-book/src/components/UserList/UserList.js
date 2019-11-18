import React, { useEffect } from 'react';
import './UserList.scss';
import { requestUsers } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/selectors';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => getUsers(state));

  useEffect(() => {
    dispatch(requestUsers());
  }, [dispatch]);

  return (
    <>
      <div>UserList</div>
      <pre>{JSON.stringify(users, null, ' ')}</pre>
    </>
  );
};

export default UserList;
