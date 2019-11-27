import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { nationalitySearch as nationalitySearchSelector } from '../../store/settings/selectors';
import { setNationalitySearch } from '../../store/settings/actions';
import { clearUsersList } from '../../store/users/actions';
import NationalitySelectorComponent from '../NationalitySelector/NationalitySelector';

import './Settings.scss';

const Settings = ({ history }) => {
  const dispatch = useDispatch();
  const nationalitySearch = useSelector((state) => nationalitySearchSelector(state));

  const onSetSelectedNationalities = (values) => {
    dispatch(
      setNationalitySearch(values),
      dispatch(clearUsersList(), history.push('/')),
    );
  };

  return (
    <div>
      <NationalitySelectorComponent
        selectedNationalities={nationalitySearch}
        onSetSelectedNationalities={(value) => onSetSelectedNationalities(value)}
      />
    </div>
  );
};

Settings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

Settings.defaultProps = {
  history: {},
};

export default withRouter(Settings);
