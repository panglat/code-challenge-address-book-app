/* eslint-disable max-len */
export const userList = state => state.users.response;
export const loadingUsers = state => state.users.loading;
export const userRecordsToDisplay = state => state.users.recordsToDisplay;
export const loadUserFailed = state => state.users.error;