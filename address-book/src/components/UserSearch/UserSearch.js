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


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setUserSearch(search));
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const resetSearch = () => {
    setSearch('');
    dispatch(setUserSearch(''));
  }

  return (
  <form onSubmit={(event) => handleSubmit(event)}>
    <label>
      Search:
      <input
        type="text"
        value={search}
        onChange={(event) => handleChange(event)}
      />
    </label>
    <input type="submit" value="Search" />
    <button onClick={() => resetSearch()}>Reset</button>
  </form>
  )
};

export default UserSearch;
