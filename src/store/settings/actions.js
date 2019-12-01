/**
 * @file Manages Settings Redux actions.
 * @module redux-store/settings/Actions
 */
import {
  SET_NATIONALITY_SEARCH,
} from './actionTypes';

/**
 * @function
 * @description List of nationality searched by the user.
 * @param {string[]} nationalitySearch Array of nationalities iso codes.
 */
export const setNationalitySearch = (nationalitySearch) => ({
  type: SET_NATIONALITY_SEARCH,
  payload: { nationalitySearch },
});
