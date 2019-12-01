/**
 * @file Render the Settings route.
 * @module app-components/Settings
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { nationalitySearch as nationalitySearchSelector } from '../../../store/settings/selectors';
import { setNationalitySearch } from '../../../store/settings/actions';
import { clearUsersList } from '../../../store/users/actions';

import NationalitySelectorComponent from '../NationalitySelector';

import './styles.scss';

/**
 * @lends module:app-components/Settings
 */
const Settings = ({ history }) => {
  const dispatch = useDispatch();
  const nationalitySearch = useSelector((state) => nationalitySearchSelector(state));

  /**
   * Called the the user selects some nationalities and press the save button
   * @param {array} values selected nationalities
   */
  const onSetSelectedNationalities = (values) => {
    dispatch(
      setNationalitySearch(values),
      dispatch(clearUsersList(), history.push('/')),
    );
  };

  return (
    <div className="settings">
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
