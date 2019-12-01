/**
 * @file Manages Settings Redux reducer
 * @module redux/SettingsReducer
 */

import { SET_NATIONALITY_SEARCH } from './actionTypes';

const initialState = {
  nationalitySearch: [],
};

/**
 * @function
 * @description Settings reducer
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NATIONALITY_SEARCH:
      return {
        ...state,
        nationalitySearch: action.payload.nationalitySearch,
      };

    default:
      return state;
  }
}
