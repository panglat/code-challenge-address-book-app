/**
 * @file Manages User Redux action types.
 * @module redux-store/users/ActionTypes
 */

/**
 * @constant {string} USERS_FETCH_REQUESTED request users list
 */
export const USERS_FETCH_REQUESTED = 'USERS_FETCH_REQUESTED';

/**
 * @constant {string} USERS_FETCH_SUCCEEDED Request users list success.
 */
export const USERS_FETCH_SUCCEEDED = 'USERS_FETCH_SUCCEEDED';
/**
 * @constant {string} USERS_FETCH_SUCCEEDED Request users list failed.
 */
export const USERS_FETCH_FAILED = 'USERS_FETCH_FAILED';
/**
 * @constant {string} SET_USERS_RECORD_TO_DISPLAY Set the number of records to display in
 * the users list.
 */
export const SET_USERS_RECORD_TO_DISPLAY = 'SET_USERS_RECORD_TO_DISPLAY';
/**
 * @constant {string} RESET_USERS_FETCH_FAILED Reset user request error.
 */
export const RESET_USERS_FETCH_FAILED = 'RESET_USERS_FETCH_FAILED';
/**
 * @constant {string} CLEAR_USERS_LIST Clear users list.
 */
export const CLEAR_USERS_LIST = 'CLEAR_USERS_LIST';
/**
 * @constant {string} SET_USERS_SEARCH Set user search
 */
export const SET_USERS_SEARCH = 'SET_USERS_SEARCH';
