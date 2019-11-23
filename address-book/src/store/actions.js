import {
  USERS_FETCH_REQUESTED,
  USERS_FETCH_SUCCEEDED,
  USERS_FETCH_FAILED,
  USERS_RECORD_TO_DISPLAY,
  RESET_USERS_FETCH_FAILED,
  SET_USERS_SEARCH,
} from './actionTypes';

export const requestUsers = params => ({
  type: USERS_FETCH_REQUESTED,
  payload: { params },
});

export const requestUsersSuccess = response => ({
  type: USERS_FETCH_SUCCEEDED,
  payload: { response },
});

export const requestUsersError = error => ({
  type: USERS_FETCH_FAILED,
  payload: { error },
});

export const usersRecordsToDisplay = records => ({
  type: USERS_RECORD_TO_DISPLAY,
  payload: { records },
});

export const resetUsersError = () => ({
  type: RESET_USERS_FETCH_FAILED,
  payload: {  },
});

export const setUserSearch = userSearch => ({
  type: SET_USERS_SEARCH,
  payload: { userSearch },
});