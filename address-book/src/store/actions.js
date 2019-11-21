import {
  USERS_FETCH_REQUESTED,
  USERS_FETCH_SUCCEEDED,
  USERS_FETCH_FAILED,
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
