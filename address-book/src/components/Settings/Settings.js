import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import NationalitySelector from '../NationalitySelector/NationalitySelector';

import './Settings.scss';
import { settingsNationalitySearch } from '../../store/selectors';
import { setNationalitySearch, resetUsersList } from '../../store/actions';

const Settings = ({history}) => {
  const dispatch = useDispatch();
  const nationalitySearch = useSelector(state => settingsNationalitySearch(state));

  const onSetSelectedNationalities = (values) => {
    dispatch(setNationalitySearch(values),dispatch(resetUsersList(), history.push('/')));
  }

  return (
    <div>
      <NationalitySelector selectedNationalities={nationalitySearch} onSetSelectedNationalities={(value) => onSetSelectedNationalities(value)} />
      <Link to='/'><button>Cancel</button></Link>
    </div>
  );
};

Settings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  })
};

Settings.defaultProps = {
  history: {},
};

export default withRouter(Settings);
