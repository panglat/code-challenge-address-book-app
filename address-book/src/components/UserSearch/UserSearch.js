import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSearch } from '../../store/selectors';

import './UserSearch.scss';
import { setUserSearch } from '../../store/actions';

const UserSearch = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const storeUserSearch = useSelector(state => userSearch(state));

  useEffect(() => {
    setSearch(storeUserSearch);
  }, [storeUserSearch]);

  const handleChange = event => {
    dispatch(setUserSearch(event.target.value));
  };

  return (
    <form>
      <label>
        Search:
        <input
          type="text"
          value={search}
          onChange={event => handleChange(event)}
        />
      </label>
    </form>
  );
};

export default UserSearch;
