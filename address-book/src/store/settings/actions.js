/**
 * @file Manages Settings Redux actions
 * @module SettingsActions
 */
import {
  SET_NATIONALITY_SEARCH,
} from './actionTypes';

/**
 * @function
 * @description Nationality comma-separated values
 * @param {string} nationalitySearch comma-separated values
 */
export const setNationalitySearch = (nationalitySearch) => ({
  type: SET_NATIONALITY_SEARCH,
  payload: { nationalitySearch },
});
