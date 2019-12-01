/**
 * @file Manages User Redux actions
 * @module redux/UserActions
 */
import {
  USERS_FETCH_REQUESTED,
  USERS_FETCH_SUCCEEDED,
  USERS_FETCH_FAILED,
  SET_USERS_RECORD_TO_DISPLAY,
  RESET_USERS_FETCH_FAILED,
  SET_USERS_SEARCH,
  CLEAR_USERS_LIST,
} from './actionTypes';

/**
 * @function
 * @description Request users list.
 * @param {getUserListParams} params getUserList parameters.
 */
export const requestUsers = (params) => ({
  type: USERS_FETCH_REQUESTED,
  payload: { params },
});

/**
 * @function
 * @description Request users list success.
 * @param {response} response getUserList parameters.
 */
export const requestUsersSuccess = (response) => ({
  type: USERS_FETCH_SUCCEEDED,
  payload: { response },
});

/**
 * @function
 * @description Request users list failed.
 * @param {error} error request error.
 */
export const requestUsersError = (error) => ({
  type: USERS_FETCH_FAILED,
  payload: { error },
});

/**
 * @function
 * @description Set the number of records to display in the users list
 * @param {number} records number of records
 */
export const setUsersRecordsToDisplay = (records) => ({
  type: SET_USERS_RECORD_TO_DISPLAY,
  payload: { records },
});

/**
 * @function
 * @description Reset user request error
 */
export const resetUsersError = () => ({
  type: RESET_USERS_FETCH_FAILED,
  payload: {},
});

/**
 * @function
 * @description Clear users list
 */
export const clearUsersList = () => ({
  type: CLEAR_USERS_LIST,
  payload: {},
});

/**
 * @function
 * @description Set user search
 * @param {string} userSearch user search
 */
export const setUserSearch = (userSearch) => ({
  type: SET_USERS_SEARCH,
  payload: { userSearch },
});
