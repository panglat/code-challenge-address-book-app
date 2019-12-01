/**
 * @file Render an input text to get the user search.
 * @module app-components/UserSearch
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { userSearch } from '../../../store/users/selectors';
import { setUserSearch } from '../../../store/users/actions';

import './styles.scss';

const UserSearch = ({ className }) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const storeUserSearch = useSelector((state) => userSearch(state));

  useEffect(() => {
    setSearch(storeUserSearch);
  }, [storeUserSearch]);

  const handleChange = (event) => {
    dispatch(setUserSearch(event.target.value));
  };

  return (
    <form className={cn('user-search', className)}>
      <label htmlFor="searchInput">
        Search:
        <input
          id="searchInput"
          type="text"
          value={search}
          onChange={(event) => handleChange(event)}
        />
      </label>
    </form>
  );
};

UserSearch.propTypes = {
  className: PropTypes.string,
};

UserSearch.defaultProps = {
  className: '',
};

export default UserSearch;
