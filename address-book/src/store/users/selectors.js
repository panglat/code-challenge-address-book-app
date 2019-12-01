/**
 * @file Manages Users Redux selectors.
 * @module redux-store/users/Selectors
 */

/**
 * @function
 * @description Get users list
 */
export const userList = (state) => state.users.userList;
/**
 * @function
 * @description Get users list
 */
export const loadingUsers = (state) => state.users.loading;
/**
 * @function
 * @description Get the number of records to display in the users list.
 */
export const userRecordsToDisplay = (state) => state.users.recordsToDisplay;
/**
 * @function
 * @description Get if the last user list request failed
 */
export const loadUserFailed = (state) => state.users.error;
/**
 * @function
 * @description Get user search
 */
export const userSearch = (state) => state.users.userSearch;
