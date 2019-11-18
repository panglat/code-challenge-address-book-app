import {
  USERS_FETCH_REQUESTED,
  USERS_FETCH_SUCCEEDED,
  USERS_FETCH_FAILED,
} from './actionTypes';

export const requestUsers = () => ({
  type: USERS_FETCH_REQUESTED,
  payload: { loading: true, error: null },
});

export const requestUsersSuccess = response => ({
  type: USERS_FETCH_SUCCEEDED,
  payload: { response, loading: false, error: null },
});

export const requestUsersError = error => ({
  type: USERS_FETCH_FAILED,
  payload: { response: null, loading: false, error },
});
