/**
 * @file Manages Users Redux reducer
 * @module UsersReducer
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

const initialState = {
  recordsToDisplay: 0,
  loading: false,
  error: null,
  userList: [],
  userSearch: '',
};

/**
 * @function
 * @description Users reducer
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case USERS_FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: null,
        userList: [...state.userList, ...action.payload.response],
      };

    case USERS_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case SET_USERS_RECORD_TO_DISPLAY:
      return {
        ...state,
        recordsToDisplay: action.payload.records,
      };

    case RESET_USERS_FETCH_FAILED:
      return {
        ...state,
        error: null,
      };

    case CLEAR_USERS_LIST:
      return {
        ...state,
        userList: [],
      };

    case SET_USERS_SEARCH:
      return {
        ...state,
        userSearch: action.payload.userSearch,
      };

    default:
      return state;
  }
}
